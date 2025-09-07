import { Button } from "./ui/button";
import { TrendingUp } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-primary">Finflow</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm hover:text-accent transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm hover:text-accent transition-colors">
            How it Works
          </a>
          <a href="#testimonials" className="text-sm hover:text-accent transition-colors">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Log In
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}