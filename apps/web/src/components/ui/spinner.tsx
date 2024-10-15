import { cn } from '~/lib/utils';

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {}

const Spinner = ({ className, ...props }: SpinnerProps) => {
  return (
    <svg
      className={cn('animate-[spin_1200ms_linear_infinite]', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <circle
        cx="9"
        cy="9"
        r="7"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="2.5"
      />
      <path
        className="animate-[spin_1200ms_ease-in-out_infinite] origin-center"
        d="M16 9C16 5.13401 12.866 2 9 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
    </svg>
  );
};
Spinner.displayName = 'Spinner';

export { Spinner };
