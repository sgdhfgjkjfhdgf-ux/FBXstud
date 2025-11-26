import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Check, Menu, X } from 'lucide-react';

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Basic button classes that adhere to design system but don't override typography
  // We use the native button for consistency with global CSS typography, 
  // or we can use ShadCN button if we accept it might set text-sm.
  // Given the strict prompt, I'll use native buttons with utility classes for layout/color.
  const btnPrimary = "inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  const btnOutline = "inline-flex items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
  const btnGhost = "inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
                B
              </div>
              <h3 className="hidden md:inline-block m-0">Brand</h3>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Products</a>
              <a href="#" className="hover:text-primary transition-colors">Solutions</a>
              <a href="#" className="hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="hover:text-primary transition-colors">About</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button className={btnGhost}>Log in</button>
              <button className={btnPrimary}>Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="hover:text-primary transition-colors py-2">Products</a>
              <a href="#" className="hover:text-primary transition-colors py-2">Solutions</a>
              <a href="#" className="hover:text-primary transition-colors py-2">Pricing</a>
              <a href="#" className="hover:text-primary transition-colors py-2">About</a>
              <div className="flex flex-col gap-2 mt-4">
                <button className={btnGhost}>Log in</button>
                <button className={btnPrimary}>Get Started</button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center rounded-full border border-border px-3 py-1 w-fit bg-secondary/50 caption">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  New features available
                </div>
                <h1>
                  Build faster with our modern platform
                </h1>
                <p className="text-muted-foreground max-w-[600px]">
                  Experience the future of development with our comprehensive suite of tools designed to streamline your workflow and boost productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <button className={btnPrimary}>
                    Start Free Trial <ArrowRight className="ml-2 size-4" />
                  </button>
                  <button className={btnOutline}>
                    View Demo
                  </button>
                </div>
                
                <div className="mt-8 flex items-center gap-4 text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="size-8 rounded-full border-2 border-background bg-muted flex items-center justify-center caption">
                        U{i}
                      </div>
                    ))}
                  </div>
                  <p className="caption">Trusted by 10,000+ developers</p>
                </div>
              </div>
              
              <div className="relative rounded-xl border border-border bg-card shadow-xl overflow-hidden aspect-video lg:aspect-square">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1723987513092-83aa84ee5d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidXNpbmVzcyUyMHRlYW0lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjQwODY2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Platform Dashboard"
                  className="object-cover size-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h2>Everything you need to scale</h2>
              <p className="text-muted-foreground mt-4">
                Our platform provides all the building blocks you need to create world-class applications without the headache of managing infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Analytics", desc: "Real-time insights into your application performance and user behavior." },
                { title: "Security", desc: "Enterprise-grade security with automated compliance and data encryption." },
                { title: "Automation", desc: "Streamline your workflow with powerful automation tools and integrations." },
                { title: "Scalability", desc: "Scale effortlessly from ten to ten million users without downtime." },
                { title: "Collaboration", desc: "Built-in tools for team collaboration, code review, and project management." },
                { title: "Support", desc: "24/7 dedicated support from our team of expert engineers." }
              ].map((feature, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Check className="size-6" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary rounded-xl p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden">
              <div className="relative z-10 max-w-[700px] mx-auto">
                <h2 className="text-primary-foreground mb-6">Ready to get started?</h2>
                <p className="text-primary-foreground/90 mb-8">
                  Join thousands of developers who are building the future with our platform. Start your free 14-day trial today.
                </p>
                <button className="inline-flex items-center justify-center rounded-md bg-background text-primary hover:bg-background/90 h-12 px-8 py-3 transition-colors">
                  Start Free Trial
                </button>
              </div>
              
              {/* Abstract decoration */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-white blur-3xl"></div>
                <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-white blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4>Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Legal</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="caption text-muted-foreground">
              © 2025 Brand, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="caption text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="caption text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
