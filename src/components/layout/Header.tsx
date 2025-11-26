import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import fbxLogo from 'figma:asset/cff33ed1c1429b6acbfb91ceda4f9a7052f0d49e.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
         <Link to="/" className="flex items-center gap-2">
           <div className="h-6 md:h-8 w-auto overflow-hidden">
              <ImageWithFallback 
                src={fbxLogo} 
                alt="FBX Studio" 
                className="h-full w-auto object-contain"
              />
           </div>
         </Link>
         
         {/* Desktop Nav */}
         <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
           {[
             { name: 'Кейсы', href: '/cases' },
             { name: 'О нас', href: '/about' }
           ].map((item) => (
             <Link key={item.name} to={item.href} className="relative group py-1">
               <span className="relative z-10">{item.name}</span>
               <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
             </Link>
           ))}
         </nav>
         
         <div className="hidden md:block">
           <a href="https://t.me/fbx_founder" target="_blank" rel="noopener noreferrer">
             <Button className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90">
               Связаться
             </Button>
           </a>
         </div>

         {/* Mobile Menu Trigger */}
         <Sheet>
           <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-6" />
              </Button>
           </SheetTrigger>
           <SheetContent side="right" className="w-[300px] sm:w-[400px]">
             <nav className="flex flex-col gap-6 mt-12">
               {[
                 { name: 'Кейсы', href: '/cases' },
                 { name: 'О нас', href: '/about' }
               ].map((item) => (
                 <Link key={item.name} to={item.href} className="text-2xl font-medium">
                   {item.name}
                 </Link>
               ))}
               <a href="https://t.me/fbx_founder" target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                 <Button className="w-full bg-foreground text-background hover:bg-foreground/90">Связаться</Button>
               </a>
             </nav>
           </SheetContent>
         </Sheet>
      </div>
    </header>
  );
}
