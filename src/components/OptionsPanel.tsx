import type { ComponentChildren } from 'preact';

interface PanelProps {
  title?: string;
  children: ComponentChildren;
}

/** Groups a tool's controls. Children are usually <Field>s. */
export function OptionsPanel({ title = 'Options', children }: PanelProps) {
  return (
    <fieldset class="card p-5">
      <legend class="rounded-md bg-duck px-2 text-sm font-black text-duckink">{title}</legend>
      <div class="grid gap-4">{children}</div>
    </fieldset>
  );
}

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  children: ComponentChildren;
}

/** A labelled control. Give the inner input the same `id`. */
export function Field({ id, label, hint, children }: FieldProps) {
  return (
    <div class="grid gap-1">
      <label for={id} class="text-sm font-bold">
        {label}
      </label>
      {children}
      {hint && <p class="text-xs text-muted">{hint}</p>}
    </div>
  );
}

export default OptionsPanel;
