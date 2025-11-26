import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowRight, Bot, Code, MessageSquare, Brain, Globe, ArrowUpRight, MoveRight } from 'lucide-react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

export function FBXLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center border-b border-border overflow-hidden pt-12 pb-24 md:pt-0 md:pb-20">
          {/* Creative Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border/40 hidden md:block"></div>
            <div className="absolute top-0 left-2/4 w-[1px] h-full bg-border/40 hidden md:block"></div>
            <div className="absolute top-0 left-3/4 w-[1px] h-full bg-border/40 hidden md:block"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-5xl mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 mb-6 md:mb-8 bg-background/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-foreground animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground">Система [1.0] Активна</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.02em] leading-[0.95] md:leading-[0.9] mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                {/* Mobile version */}
                <span className="block md:hidden">
                  <span className="block">МЫ СОЗДАЕМ</span>
                  <span className="block mt-1">
                    <span className="font-light italic text-muted-foreground mr-1 tracking-normal">ЦИФРОВОЙ</span>
                  </span>
                  <span className="block">ИНТЕЛЛЕКТ</span>
                </span>
                {/* Desktop version */}
                <span className="hidden md:block">
                  МЫ СОЗДАЕМ <br/>
                  <span className="block ml-12 lg:ml-20">
                    <span className="font-light italic text-muted-foreground mr-14 tracking-normal">ЦИФРОВОЙ</span>
                    ИНТЕЛЛЕКТ
                  </span>
                </span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8 md:mt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                <p className="text-lg md:text-2xl max-w-xl leading-relaxed text-muted-foreground">
                  Внедряем ИИ в бизнес-процессы. Разрабатываем кастомный софт. 
                  Превращаем технологии в конкурентное преимущество.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a href="https://t.me/fbx_founder" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="h-14 md:h-16 px-8 rounded-none border-l-4 border-foreground bg-foreground text-background hover:bg-foreground/90 hover:pl-10 transition-all text-base md:text-lg">
                      Обсудить проект <ArrowUpRight className="ml-2 size-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Infinite Ticker */}
          <div className="absolute bottom-0 left-0 w-full border-t border-border bg-background py-3 md:py-4 overflow-hidden whitespace-nowrap">
             <div className="inline-flex animate-marquee gap-8 md:gap-12">
               {[...Array(10)].map((_, i) => (
                 <div key={i} className="flex items-center gap-4 text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest">
                   <span>AI Интеграция</span>
                   <span className="text-foreground">•</span>
                   <span>Веб-разработка</span>
                   <span className="text-foreground">•</span>
                   <span>Кастомные решения</span>
                   <span className="text-foreground">•</span>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Services - Editorial Layout */}
        <section id="services" className="py-20 md:py-32 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 relative z-10">
                {/* Sticky only on Desktop */}
                <div className="lg:sticky lg:top-32 bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none pb-6 md:pb-0">
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 md:mb-6 break-words hyphens-auto">
                    НАШИ <br className="hidden lg:block"/> КОМПЕТЕНЦИИ
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg max-w-sm leading-relaxed">
                    Полный цикл разработки: от аудита до внедрения автономных AI-агентов.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                {[
                    { title: "AI ИНТЕГРАЦИЯ", desc: "Интеграция LLM моделей, автоматизация поддержки, генерация контента.", icon: Brain, num: "01" },
                    { title: "ВЕБ ПРОДУКТЫ", desc: "Высоконагруженные сервисы, корпоративные порталы, PWA.", icon: Globe, num: "02" },
                    { title: "ТЕЛЕГРАМ БОТЫ", desc: "Сложные боты с админ-панелями, оплатой и AI-логикой.", icon: MessageSquare, num: "03" },
                    { title: "КАСТОМНЫЙ СОФТ", desc: "Разработка уникальных решений под нестандартные задачи бизнеса.", icon: Code, num: "04" }
                ].map((service, i) => (
                  <div key={i} className="group bg-background p-6 md:p-12 relative overflow-hidden hover:bg-foreground hover:text-background transition-all duration-500 flex flex-col justify-between min-h-[320px]">
                     <div className="flex justify-between items-start mb-8">
                        <service.icon className="size-8 md:size-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="font-mono text-xs opacity-50 border border-current rounded-full px-2 py-1">
                          {service.num}
                        </div>
                     </div>
                     
                     <div>
                       <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 tracking-tight">{service.title}</h3>
                       <p className="text-muted-foreground text-sm md:text-base group-hover:text-background/80 max-w-md leading-relaxed transition-colors">
                         {service.desc}
                       </p>
                     </div>
                     
                     <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                       <ArrowRight className="size-5 md:size-6" />
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Cases */}
        <section id="cases" className="py-20 md:py-32 border-b border-border bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 border-b border-border/50 pb-8">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">ИЗБРАННЫЕ <br/> ПРОЕКТЫ</h2>
              <a href="/cases">
                <Button variant="outline" className="rounded-full px-6 border-foreground/20 hover:bg-foreground hover:text-background transition-colors">
                  Все кейсы <ArrowRight className="ml-2 size-4" />
                </Button>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
              {[
                { title: "ЛОГИСТИКА AI", cat: "ERP Система", tags: ["Python", "React", "Mapbox"] },
                { title: "ЮРИДИЧЕСКИЙ АССИСТЕНТ", cat: "LLM Интеграция", tags: ["OpenAI", "Node.js", "Vector DB"] },
                { title: "ФИНТЕХ ДАШБОРД", cat: "Веб-приложение", tags: ["Next.js", "Supabase", "Recharts"] },
                { title: "РИТЕЙЛ БОТ", cat: "Telegram API", tags: ["Grammy.js", "PostgreSQL", "Redis"] }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer flex flex-col h-full">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden rounded-sm mb-6 border border-border/50 group-hover:border-foreground/50 transition-colors">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[size:250%_250%] animate-gradient"></div>
                    {/* Abstract Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 group-hover:scale-105 transition-transform duration-700">
                       <div className={`w-3/4 h-3/4 border border-current opacity-20 rounded-full ${i % 2 === 0 ? 'rounded-tr-none' : 'rounded-bl-none'}`}></div>
                    </div>
                    
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"></div>
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

        {/* Process Timeline */}
        <section id="process" className="py-20 md:py-32 border-b border-border">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="text-2xl md:text-3xl font-medium mb-12 md:mb-20">ПРОЦЕСС РАБОТЫ</h2>
             <div className="space-y-0">
               {[
                 { step: "01", title: "Исследование", desc: "Аналитика, бриф и формирование стратегии." },
                 { step: "02", title: "Прототипирование", desc: "UX/UI дизайн и валидация гипотез." },
                 { step: "03", title: "Разработка", desc: "Написание кода, тесты и интеграция." },
                 { step: "04", title: "Запуск", desc: "Деплой, поддержка и развитие проекта." }
               ].map((item, i) => (
                 <div key={i} className="group flex flex-col md:flex-row md:items-baseline border-t border-border py-8 md:py-12 hover:bg-secondary/30 transition-colors cursor-default">
                    <div className="w-24 font-mono text-muted-foreground group-hover:text-foreground transition-colors text-sm md:text-base mb-4 md:mb-0">
                      / {item.step}
                    </div>
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-3xl md:text-5xl font-medium group-hover:translate-x-4 transition-transform duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mt-2 md:mt-0 md:w-1/3 text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {item.desc}
                    </div>
                 </div>
               ))}
               <div className="border-t border-border"></div>
             </div>
           </div>
        </section>

        {/* Contact / CTA */}
        <section className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-background rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
               <div>
                 <h2 className="text-4xl md:text-7xl font-medium tracking-tighter mb-6 md:mb-8">
                   ГОТОВЫ К <br/> МАСШТАБУ?
                 </h2>
                 <p className="text-background/80 text-lg md:text-xl max-w-md mb-10 md:mb-12 leading-relaxed">
                   Оставьте заявку сейчас. Мы проанализируем ваш кейс и предложим лучшее решение.
                 </p>
                 
                 <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-4">
                     <div className="size-10 md:size-12 rounded-full border border-background/20 flex items-center justify-center shrink-0">
                       <MessageSquare className="size-5" />
                     </div>
                     <div className="overflow-hidden">
                       <div className="text-sm text-background/60 uppercase tracking-wider">Telegram</div>
                       <a href="https://t.me/FBXstudio" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg hover:underline truncate block">@FBXstudio</a>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="size-10 md:size-12 rounded-full border border-background/20 flex items-center justify-center shrink-0">
                       <Bot className="size-5" />
                     </div>
                     <div className="overflow-hidden">
                       <div className="text-sm text-background/60 uppercase tracking-wider">Email</div>
                       <a href="#" className="text-base md:text-lg hover:underline truncate block">hello@fbx.studio</a>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="bg-background text-foreground p-6 md:p-12 rounded-xl w-full">
                 <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Имя</label>
                       <Input placeholder="Иван" className="border-b border-border border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-lg placeholder:text-muted-foreground/50" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Контакт</label>
                       <Input placeholder="@telegram / email" className="border-b border-border border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-lg placeholder:text-muted-foreground/50" />
                     </div>
                   </div>
                   <div className="space-y-2 pt-4">
                     <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">О проекте</label>
                     <Textarea placeholder="Расскажите о вашей задаче..." className="min-h-[100px] border-b border-border border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent resize-none text-lg placeholder:text-muted-foreground/50" />
                   </div>
                   
                   <Button className="w-full h-14 md:h-16 mt-8 text-lg bg-foreground text-background hover:bg-foreground/90">
                     Отправить <MoveRight className="ml-2" />
                   </Button>
                 </form>
               </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      
      {/* CSS for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}
