import tape1 from '@/assets/tapes/washi-tape-1.png';
import tape2 from '@/assets/tapes/washi-tape-2.png';
import tape3 from '@/assets/tapes/washi-tape-3.png';
import tape4 from '@/assets/tapes/washi-tape-4.png';
import tape5 from '@/assets/tapes/washi-tape-5.png';
import tape6 from '@/assets/tapes/washi-tape-6.png';
import tape7 from '@/assets/tapes/washi-tape-7.png';
import tape8 from '@/assets/tapes/washi-tape-8.png';
import { cn } from '@/lib/utils';

const tapes = [
  tape1,
  tape2,
  tape3,
  tape4,
  tape5,
  tape6,
  tape7,
  tape8,
];

export type TapeVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface TapeProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: TapeVariant;
}

export const Tape = ({ variant = 1, className, ...props }: TapeProps) => {
  const src = tapes[variant - 1] || tape1;

  return (
    <img
      src={src}
      alt="decorative tape"
      className={cn("absolute object-contain select-none z-10 w-32", className)}
      {...props}
    />
  );
};
