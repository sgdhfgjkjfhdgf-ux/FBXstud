import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import fbxLogo from 'figma:asset/cff33ed1c1429b6acbfb91ceda4f9a7052f0d49e.png';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
       <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
         <div className="flex items-center gap-2">
           <div className="h-4 w-auto opacity-50 grayscale">
              <ImageWithFallback 
                src={fbxLogo} 
                alt="FBX" 
                className="h-full w-auto"
              />
           </div>
           <span>© 2025 FBX Studio</span>
         </div>
         <div className="flex gap-6">
           <a href="#" className="hover:text-foreground">Политика</a>
           <a href="#" className="hover:text-foreground">Оферта</a>
         </div>
       </div>
    </footer>
  );
}
