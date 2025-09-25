import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Scissors } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: 'home' },
    { name: 'Servicios', href: 'services' },
    { name: 'Reservar', href: 'booking' },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-smooth"
            onClick={() => onNavigate('home')}
          >
            <div className="p-2 gradient-primary rounded-xl shadow-glow">
              <Scissors className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Estilo Unisex
              </h1>
              <p className="text-xs text-muted-foreground">Peluquería Moderna</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavigate(item.href)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-smooth hover:scale-105",
                  currentPage === item.href
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => onNavigate('booking')}
              className="animate-none hover:animate-pulse"
            >
              Reservar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    onNavigate(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "px-4 py-3 rounded-lg font-medium text-left transition-smooth",
                    currentPage === item.href
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => {
                  onNavigate('booking');
                  setIsMenuOpen(false);
                }}
                className="mt-2 animate-none"
              >
                Reservar Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};