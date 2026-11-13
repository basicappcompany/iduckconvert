interface Props {
  /** 0 to 1. Omit for an indeterminate bar (e.g. while a codec downloads). */
  value?: number;
  label: string;
}

export default function ProgressBar({ value, label }: Props) {
  const percent = value === undefined ? undefined : Math.round(Math.min(1, Math.max(0, value)) * 100);
  return (
    <div>
      <div class="mb-1 flex justify-between text-sm font-bold">
        <span>{label}</span>
        {percent !== undefined && <span>{percent}%</span>}
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        {...(percent !== undefined ? { 'aria-valuenow': percent } : {})}
        class="meter"
      >
        <div
          class={percent === undefined ? 'w-1/3 animate-pulse' : 'transition-[width]'}
          style={percent === undefined ? undefined : { width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
