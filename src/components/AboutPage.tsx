import React from 'react';
import { Button } from './ui/button';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Check, Users, Globe, Zap } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-12 md:py-32 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 mb-4 md:mb-6 bg-secondary/30">
                 <span className="w-2 h-2 rounded-full bg-foreground"></span>
                 <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">EST. 2023</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.02em] leading-[0.95] md:leading-[0.9] mb-8 md:mb-12">
                {/* Mobile version */}
                <span className="block md:hidden">
                  <span className="block">МЫ —</span>
                  <span className="block mt-1">
                    <span className="font-light italic text-muted-foreground mr-1 tracking-normal">ИНЖЕНЕРЫ</span>
                  </span>
                  <span className="block">БУДУЩЕГО</span>
                </span>
                {/* Desktop version */}
                <span className="hidden md:block">
                  МЫ — <br/>
                  <span className="block ml-12 lg:ml-20">
                    <span className="font-light italic text-muted-foreground mr-4 tracking-normal">ИНЖЕНЕРЫ</span>
                    БУДУЩЕГО
                  </span>
                </span>
              </h1>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-12 text-base md:text-xl leading-relaxed text-muted-foreground">
                <p>
                  FBX Studio — это команда разработчиков, дизайнеров и AI-энтузиастов. Мы не просто пишем код, мы создаем цифровые продукты, которые меняют правила игры в бизнесе.
                </p>
                <p>
                  Наш подход основан на сочетании строгой инженерной дисциплины и творческого поиска. Мы верим, что будущее за теми, кто умеет эффективно объединять человеческий потенциал и возможности искусственного интеллекта.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values / Grid */}
        <section className="border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
             {[
               { icon: Users, title: "КОМАНДА", desc: "Сильные специалисты с опытом в Big Tech и стартапах." },
               { icon: Zap, title: "СКОРОСТЬ", desc: "Быстрый запуск MVP и итеративная разработка." },
               { icon: Globe, title: "МАСШТАБ", desc: "Решения, готовые к высоким нагрузкам и росту." },
               { icon: Check, title: "КАЧЕСТВО", desc: "Pixel-perfect верстка и чистый, поддерживаемый код." }
             ].map((item, i) => (
               <div key={i} className="p-6 md:p-12 hover:bg-secondary/10 transition-colors">
                  <item.icon className="size-8 md:size-10 mb-4 md:mb-6 opacity-50" />
                  <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Manifesto or Big Text */}
        <section className="py-12 md:py-40 bg-foreground text-background relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
           <div className="container mx-auto px-4 md:px-6 relative z-10">
              <h2 className="text-xl md:text-4xl font-medium max-w-4xl leading-tight mx-auto text-center">
                "Мы стремимся к тому, чтобы технологии не усложняли жизнь, а делали её проще, прозрачнее и эффективнее. Каждый наш проект — это шаг к этой цели."
              </h2>
           </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-32">
           <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                 {[
                   { val: "50+", label: "Проектов" },
                   { val: "3", label: "Года на рынке" },
                   { val: "12", label: "Экспертов" },
                   { val: "24/7", label: "Поддержка" }
                 ].map((stat, i) => (
                   <div key={i}>
                      <div className="text-4xl md:text-7xl font-medium tracking-tighter mb-1 md:mb-2">{stat.val}</div>
                      <div className="text-xs md:text-sm font-mono uppercase text-muted-foreground">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
