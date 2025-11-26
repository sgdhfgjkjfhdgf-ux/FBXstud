import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

export function CasesPage() {
  const cases = [
    { title: "LOGISTICS AI", cat: "ERP Система", tags: ["Python", "React", "Mapbox"] },
    { title: "ЮРИДИЧЕСКИЙ АССИСТЕНТ", cat: "LLM Интеграция", tags: ["OpenAI", "Node.js", "Vector DB"] },
    { title: "ФИНТЕХ ДАШБОРД", cat: "Веб-приложение", tags: ["Next.js", "Supabase", "Recharts"] },
    { title: "РИТЕЙЛ БОТ", cat: "Telegram API", tags: ["Grammy.js", "PostgreSQL", "Redis"] },
    { title: "CRYPTO EXCHANGE", cat: "Web3 Platform", tags: ["Solidity", "React", "Wagmi"] },
    { title: "MEDICAL CRM", cat: "HealthTech", tags: ["Laravel", "Vue.js", "MySQL"] },
    { title: "SMART HOME APP", cat: "IoT Mobile", tags: ["React Native", "MQTT", "Node.js"] },
    { title: "E-COMMERCE AI", cat: "Recommendation Engine", tags: ["Python", "TensorFlow", "FastAPI"] }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-20 md:py-32 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8">
                НАШИ <br/> <span className="text-muted-foreground">ПРОЕКТЫ</span>
              </h1>
              <p className="text-lg md:text-2xl max-w-xl leading-relaxed text-muted-foreground">
                Избранные кейсы в области веб-разработки, AI-интеграций и автоматизации бизнес-процессов.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
           <div className="container mx-auto px-4 md:px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
               {cases.map((item, i) => (
                 <div key={i} className="group cursor-pointer flex flex-col h-full">
                   <div className="aspect-[4/3] bg-muted relative overflow-hidden rounded-sm mb-6 border border-border/50 group-hover:border-foreground/50 transition-colors">
                     <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[size:250%_250%] animate-gradient"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 group-hover:scale-105 transition-transform duration-700">
                        <div className={`w-3/4 h-3/4 border border-current opacity-20 rounded-full ${i % 2 === 0 ? 'rounded-tr-none' : 'rounded-bl-none'}`}></div>
                     </div>
                     <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"></div>
                     
                     {/* View Project Button Overlay */}
                     <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-background text-foreground rounded-full p-3 border border-border">
                           <ArrowUpRight className="size-6" />
                        </div>
                     </div>
                   </div>
                   
                   <div className="flex justify-between items-end border-b border-border pb-4 group-hover:border-foreground transition-colors duration-300 mt-auto">
                     <div>
                       <div className="text-xs font-mono uppercase text-muted-foreground mb-2">{item.cat}</div>
                       <h3 className="text-2xl md:text-3xl font-medium">{item.title}</h3>
                     </div>
                     <div className="hidden md:flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-wrap justify-end max-w-[50%] transform translate-y-2 group-hover:translate-y-0">
                       {item.tags.map(tag => (
                         <span key={tag} className="text-[10px] uppercase border border-border px-2 py-1 rounded-full bg-background whitespace-nowrap">
                           {tag}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>
        
        <section className="py-20 border-t border-border bg-secondary/10 text-center">
           <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-medium mb-6">ЕСТЬ ИДЕЯ?</h2>
              <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-foreground text-background hover:bg-foreground/90">
                Начать проект <ArrowRight className="ml-2" />
              </Button>
           </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
