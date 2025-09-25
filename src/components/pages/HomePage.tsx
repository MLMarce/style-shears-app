import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, Users, Sparkles, Scissors, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const features = [
    {
      icon: Scissors,
      title: 'Cortes Modernos',
      description: 'Las últimas tendencias en cortes y peinados para todas las edades',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Para Toda la Familia',
      description: 'Servicios especializados para niños, jóvenes y adultos mayores',
      color: 'text-secondary'
    },
    {
      icon: Sparkles,
      title: 'Productos Premium',
      description: 'Utilizamos solo productos de la más alta calidad y reconocidas marcas',
      color: 'text-accent'
    },
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description: 'Cada cliente es único y merece un servicio adaptado a sus necesidades',
      color: 'text-primary'
    }
  ];

  const promotions = [
    {
      title: 'Primer Corte Gratis',
      description: 'Para nuevos clientes menores de 12 años',
      badge: 'Nuevo Cliente',
      gradient: 'gradient-primary'
    },
    {
      title: '20% OFF Servicios',
      description: 'Para adultos mayores de lunes a miércoles',
      badge: 'Promoción',
      gradient: 'gradient-secondary'
    },
    {
      title: 'Combo Familiar',
      description: '3 cortes por el precio de 2',
      badge: 'Oferta Especial',
      gradient: 'gradient-accent'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Salon interior" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm text-muted-foreground ml-2">5.0 en Google Reviews</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Estilo
                </span>
                <br />
                <span className="text-foreground">que te define</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Descubre tu mejor versión en nuestro salón unisex. 
                Cortes modernos, atención personalizada y ambiente relajante.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => onNavigate('booking')}
                  className="animate-bounce"
                >
                  Reservar Mi Turno
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => onNavigate('services')}
                >
                  Ver Servicios
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Horarios de Atención</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunes - Viernes</span>
                      <span>9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábados</span>
                      <span>9:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingos</span>
                      <span>10:00 - 18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Más de 10 años cuidando tu imagen con profesionalismo y dedicación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card hover:bg-card/80 transition-smooth hover:scale-105 shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <feature.icon className={`h-12 w-12 mx-auto ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Promociones Especiales
            </h2>
            <p className="text-xl text-muted-foreground">
              Aprovecha nuestras ofertas limitadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card 
                key={index}
                className="relative overflow-hidden hover:scale-105 transition-bounce shadow-card animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 ${promo.gradient} opacity-10`} />
                <CardContent className="relative p-6">
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      {promo.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onNavigate('booking')}
                    className="w-full"
                  >
                    Reservar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para tu nuevo look?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Reserva tu turno ahora y descubre por qué somos la peluquería favorita de la zona
          </p>
          <Button 
            variant="cta" 
            size="xl"
            onClick={() => onNavigate('booking')}
            className="animate-pulse hover:animate-bounce"
          >
            Reservar Mi Turno Ahora
          </Button>
        </div>
      </section>
    </div>
  );
};