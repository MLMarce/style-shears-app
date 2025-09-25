import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      info: 'Av. Principal 123, Centro',
      subInfo: 'Ciudad, País'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+54 11 1234-5678',
      subInfo: 'WhatsApp disponible'
    },
    {
      icon: Clock,
      title: 'Horarios',
      info: 'Lun - Sáb: 9:00 - 20:00',
      subInfo: 'Dom: 10:00 - 18:00'
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 gradient-primary rounded-xl shadow-glow">
                <svg className="h-6 w-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Estilo Unisex</h3>
                <p className="text-muted-foreground">Peluquería Moderna</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Tu salón de confianza para lucir espectacular. Ofrecemos servicios de calidad 
              para toda la familia con las últimas tendencias en cortes y peinados.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-smooth"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Información de contacto */}
          {contactInfo.map((contact, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-muted rounded-lg">
                  <contact.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{contact.title}</h4>
                  <p className="text-sm text-foreground">{contact.info}</p>
                  <p className="text-xs text-muted-foreground">{contact.subInfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Estilo Unisex. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};