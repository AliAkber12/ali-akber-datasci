import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-card rounded-full text-sm font-medium text-primary border border-primary/20 mb-4">
            Data Scientist • Advanced Level
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Ali Akber
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Data Scientist from Karachi, Pakistan
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Transforming data into actionable insights through advanced analytics, 
          machine learning, and cutting-edge AI solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-foreground hover:bg-primary/10"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com/AliAkber12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all hover:scale-110 hover:shadow-glow"
          >
            <Github className="w-6 h-6 text-foreground" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ali-akber-chandio-480344329/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all hover:scale-110 hover:shadow-glow"
          >
            <Linkedin className="w-6 h-6 text-foreground" />
          </a>
          <a 
            href="mailto:aliakberhyder@gmail.com"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all hover:scale-110 hover:shadow-glow"
          >
            <Mail className="w-6 h-6 text-foreground" />
          </a>
          <a 
            href="https://www.kaggle.com/aliakber12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-card/80 rounded-lg transition-all hover:scale-110 hover:shadow-glow"
          >
            <ExternalLink className="w-6 h-6 text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
