import { Sparkles } from 'lucide-react';
import redGlitterTexture from '@/assets/background/red-glitter-paper.jpg';
import { Tape } from '@/components/Tape';

export const Header = () => {
  return (
    <header className="pt-8 pb-8 text-center bg-transparent">
      <div className="inline-block relative z-20">
        {/* Ripped Edge Background */}
        <div 
          className="absolute inset-0 shadow-polaroid rounded-sm rough-edges"
          style={{
            backgroundImage: `url(${redGlitterTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content */}
        <div className="relative px-8 md:px-32 py-5">
          {/* Decorative tape */}
          <Tape 
            variant={1}
            className="-top-5 left-0 w-24 opacity-95 drop-shadow-sm z-30" 
            style={{ transform: 'translateX(-30%) rotate(-15deg)' }} 
          />
          <Tape 
            variant={2}
            className="-top-5 right-0 w-24 opacity-95 drop-shadow-sm z-30" 
            style={{ transform: 'translateX(30%) rotate(10deg)' }} 
          />
          
          <h1 className="font-handwritten text-5xl md:text-6xl text-white drop-shadow-md flex items-center justify-center gap-2">
            @plslorr
          </h1>
        </div>
      </div>
    </header>
  );
};
