interface Option<Id extends string> {
  id: Id;
  emoji?: string;
  label: string;
}

interface Props<Id extends string> {
  /** Names the group for screen readers. */
  label: string;
  options: readonly Option<Id>[];
  value: Id;
  onChange: (id: Id) => void;
  disabled?: boolean;
}

/** Pick-one buttons. Arrow keys move the choice, as in any radio group. */
export default function Chips<Id extends string>({ label, options, value, onChange, disabled = false }: Props<Id>) {
  const move = (from: number, step: number) => {
    const next = options[(from + step + options.length) % options.length];
    if (next) onChange(next.id);
  };
  return (
    <div role="radiogroup" aria-label={label} class="flex flex-wrap gap-2">
      {options.map((o, i) => {
        const checked = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={checked}
            // Only the chosen chip is in the tab order; arrows move between them.
            tabIndex={checked ? 0 : -1}
            disabled={disabled}
            class="chip"
            onClick={() => onChange(o.id)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                move(i, 1);
              } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                move(i, -1);
              }
            }}
          >
            {o.emoji && <span aria-hidden="true">{o.emoji}</span>}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
