import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Send, Lock, Boxes, ArrowRight, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-dark" />
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2">
              <Lock className="w-5 h-5 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Decentralized Subscription Token</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            HIMITSU
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground mb-4 max-w-3xl mx-auto font-light">
            Your Key to Anonymous Subscriptions
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Unlock premium content. Stay anonymous. Built on blockchain for ultimate privacy.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-10 py-6 h-auto shadow-glow-primary"
            asChild
          >
            <a href="https://pump.fun" target="_blank" rel="noopener noreferrer">
              Buy on pump.fun
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What is <span className="bg-gradient-primary bg-clip-text text-transparent">HIMITSU</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-destructive/20 hover:border-destructive/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-destructive">The Problem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Traditional subscriptions expose your personal data and payment information. 
                Every service you sign up for becomes another vulnerability in your digital life.
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow-primary">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                HIMITSU lets you pay for the content you love, completely anonymously. 
                No names, no credit cards, just the blockchain. Your privacy is protected.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary/40 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all">
                <Lock className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Anonymous Subscriptions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pay for services without revealing your identity. True privacy on every transaction.
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-secondary/40 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:shadow-glow-secondary transition-all">
                <Send className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">P2P Transactions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Instantly send HIMITSU to friends, family, or any wallet. Fast and secure.
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-primary/40 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Decentralized & Secure</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Built on blockchain for maximum security. No central point of failure.
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-border hover:border-secondary/40 transition-all group">
              <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:shadow-glow-secondary transition-all">
                <Boxes className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wide Utility</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Use for news, music, software, and other digital content platforms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:shadow-glow-primary transition-all">
                1
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold mb-2">Get HIMITSU</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Purchase HIMITSU tokens on pump.fun. Quick, easy, and secure onboarding to the ecosystem.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:shadow-glow-primary transition-all">
                2
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold mb-2">Find a Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse participating services offering premium content, from news outlets to streaming platforms.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:shadow-glow-primary transition-all">
                3
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold mb-2">Subscribe Anonymously</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use your HIMITSU wallet to subscribe. No personal information required, complete privacy guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-8">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Join the Movement</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the <span className="bg-gradient-primary bg-clip-text text-transparent">Community</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with fellow HIMITSU holders, stay updated on new integrations, 
            and help shape the future of anonymous subscriptions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="community" 
              size="lg"
              className="text-base"
              asChild
            >
              <a href="https://t.me/himitsu" target="_blank" rel="noopener noreferrer">
                Join our Telegram
              </a>
            </Button>
            
            <Button 
              variant="community" 
              size="lg"
              className="text-base"
              asChild
            >
              <a href="https://twitter.com/himitsu" target="_blank" rel="noopener noreferrer">
                Follow us on X
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                HIMITSU
              </h3>
              <p className="text-sm text-muted-foreground">
                Decentralized Subscription Token
              </p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://t.me/himitsu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Telegram
              </a>
              <a 
                href="https://twitter.com/himitsu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                X (Twitter)
              </a>
              <a 
                href="https://pump.fun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                pump.fun
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} HIMITSU. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
