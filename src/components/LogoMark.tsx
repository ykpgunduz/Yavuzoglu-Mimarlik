interface LogoMarkProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function LogoMark({
  color = "currentColor",
  size = 40,
  className,
}: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Y left stroke */}
      <line x1="22" y1="10" x2="40" y2="50" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Y right stroke */}
      <line x1="48" y1="10" x2="40" y2="50" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Y/K shared vertical stroke */}
      <line x1="40" y1="50" x2="40" y2="92" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* K upper diagonal */}
      <line x1="40" y1="50" x2="72" y2="10" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* K lower diagonal */}
      <line x1="40" y1="50" x2="78" y2="92" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
