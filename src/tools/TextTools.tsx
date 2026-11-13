/** Converters where you paste or drop text: CSV, JSON, XML, YAML, Markdown, HTML and the encoding fixer. */
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import SimpleToolShell from '../components/SimpleToolShell';
import { Field, OptionsPanel } from '../components/OptionsPanel';
import type { ToolDefinition } from '../engine/types';
import { copyText } from '../lib/clipboard';
import { checkSize, withExtension } from '../lib/files';
import { DATA_SPECS, ENCODINGS, decodeBytes, runDataConversion } from '../convert/data';

function download(name: string, text: string, mime: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: `${mime};charset=utf-8` }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}

export function DataTool({ slug }: { slug: string }) {
  const spec = DATA_SPECS[slug]!;
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const [copied, setCopied] = useState(false);
  const picker = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    let current = true;
    if (input.trim() === '') {
      setOutput('');
      setError('');
      return;
    }
    const timer = setTimeout(() => {
      runDataConversion(slug, input).then(
        (result) => {
          if (!current) return;
          setOutput(result);
          setError('');
        },
        (e: unknown) => {
          if (!current) return;
          setOutput('');
          setError(e instanceof Error ? e.message : 'That input could not be converted.');
        },
      );
    }, 250);
    return () => {
      current = false;
      clearTimeout(timer);
    };
  }, [input, slug]);

  const load = async (file: File | undefined) => {
    if (!file) return;
    try {
      checkSize(file, 20, 'text file');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'That file is too big.');
      return;
    }
    setFileName(file.name);
    setInput(new TextDecoder('utf-8').decode(new Uint8Array(await file.arrayBuffer())));
  };

  return (
    <div class="grid gap-4">
      <div
        class="dropzone"
        data-dragging={dragging ? 'true' : 'false'}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          void load(e.dataTransfer?.files[0]);
        }}
      >
        <p class="text-lg font-black">Drop a {spec.inputLabel} file here, or paste below</p>
        <div class="mt-3 flex flex-wrap justify-center gap-3">
          <button type="button" class="btn btn-primary" onClick={() => picker.current?.click()}>
            Choose file
          </button>
          <button type="button" class="btn" onClick={() => setInput(spec.sample)}>
            Try an example
          </button>
          {input && (
            <button
              type="button"
              class="btn"
              onClick={() => {
                setInput('');
                setFileName('');
              }}
            >
              Clear
            </button>
          )}
        </div>
        <input ref={picker} type="file" class="sr-only" tabIndex={-1} accept={spec.accepts.join(',')} aria-label="Choose a file" onChange={(e) => void load(e.currentTarget.files?.[0])} />
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <Field id="data-in" label={`${spec.inputLabel} in`}>
          <textarea id="data-in" class="input min-h-64 font-mono text-sm" spellcheck={false} value={input} onInput={(e) => setInput(e.currentTarget.value)} placeholder={`Paste ${spec.inputLabel} here`} />
        </Field>
        <Field id="data-out" label={`${spec.outputLabel} out`}>
          <textarea id="data-out" class="input min-h-64 font-mono text-sm" readOnly spellcheck={false} value={output} placeholder="The result appears here" />
        </Field>
      </div>

      {error && (
        <p role="alert" class="text-sm font-bold text-danger">
          {error}
        </p>
      )}

      <div class="flex flex-wrap gap-3">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          disabled={!output}
          onClick={() => download(withExtension(fileName || 'converted', spec.ext), output, spec.mime)}
        >
          Download .{spec.ext}
        </button>
        <button
          type="button"
          class="btn btn-lg"
          disabled={!output}
          onClick={() =>
            void copyText(output).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            })
          }
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

// ---------- TXT encoding fixer ----------
interface EncodingOptions {
  encoding: string;
}

const encodingTool: ToolDefinition<EncodingOptions> = {
  id: 'text-encoding-fixer',
  accepts: ['.txt', '.csv', '.tsv', '.srt', '.log', '.md', '.html', '.xml', '.json', 'text/plain', 'text/csv'],
  defaultOptions: { encoding: 'windows-1252' },
  run: async (file, options) => {
    checkSize(file, 50, 'text file');
    const text = decodeBytes(new Uint8Array(await file.arrayBuffer()), options.encoding);
    const name = withExtension(file.name, /\.([a-z0-9]+)$/i.exec(file.name)?.[1] ?? 'txt').replace(/(\.[a-z0-9]+)$/i, '-utf8$1');
    return [{ name, blob: new Blob([text], { type: 'text/plain;charset=utf-8' }) }];
  },
};

function Preview({ file, encoding }: { file: File; encoding: string }) {
  const [text, setText] = useState('');
  useEffect(() => {
    let current = true;
    void file.slice(0, 4000).arrayBuffer().then((buf) => {
      if (current) setText(decodeBytes(new Uint8Array(buf), encoding).slice(0, 600));
    });
    return () => {
      current = false;
    };
  }, [file, encoding]);
  return (
    <div class="grid gap-1">
      <p class="text-sm font-bold">Preview of {file.name} read as {encoding}</p>
      <pre class="card max-h-48 overflow-auto whitespace-pre-wrap p-3 text-sm [overflow-wrap:anywhere]">{text || ' '}</pre>
    </div>
  );
}

export function EncodingTool({ runLabel }: { runLabel: string }) {
  const [encoding, setEncoding] = useState('windows-1252');
  const options = useMemo(() => ({ encoding }), [encoding]);
  return (
    <SimpleToolShell tool={encodingTool} options={options} canRun runLabel={runLabel}>
      {({ files }) => (
        <>
          <OptionsPanel title="The encoding the file was written in">
            <Field id="enc" label="Encoding" hint="If accents look like Ã© or é, the file is probably Windows-1252. Pick one and check the preview.">
              <select id="enc" class="input" value={encoding} onChange={(e) => setEncoding(e.currentTarget.value)}>
                {ENCODINGS.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>
            </Field>
          </OptionsPanel>
          {files[0] && <Preview file={files[0]} encoding={encoding} />}
        </>
      )}
    </SimpleToolShell>
  );
}
