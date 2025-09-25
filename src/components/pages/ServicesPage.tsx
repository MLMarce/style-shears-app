import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Baby, User, UserCheck } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onSelectService: (service: any) => void;
}

export const ServicesPage = ({ onNavigate, onSelectService }: ServicesPageProps) => {
  const serviceCategories = [
    {
      title: 'Niños (4-14 años)',
      icon: Baby,
      color: 'text-primary',
      gradient: 'gradient-primary',
      services: [
        {
          id: 1,
          name: 'Corte Infantil',
          price: 1500,
          duration: 30,
          description: 'Corte adaptado para niños con paciencia y cuidado especial'
        },
        {
          id: 2,
          name: 'Corte + Lavado',
          price: 2000,
          duration: 45,
          description: 'Corte completo con lavado y acondicionador suave'
        },
        {
          id: 3,
          name: 'Peinado Especial',
          price: 1200,
          duration: 20,
          description: 'Peinados para eventos o fiestas infantiles'
        }
      ]
    },
    {
      title: 'Adultos Jóvenes (15-65 años)',
      icon: User,
      color: 'text-secondary',
      gradient: 'gradient-secondary',
      services: [
        {
          id: 4,
          name: 'Corte Masculino',
          price: 2500,
          duration: 45,
          description: 'Corte moderno adaptado a tu estilo personal'
        },
        {
          id: 5,
          name: 'Corte Femenino',
          price: 3000,
          duration: 60,
          description: 'Corte y peinado profesional para mujeres'
        },
        {
          id: 6,
          name: 'Barba + Corte',
          price: 3500,
          duration: 75,
          description: 'Servicio completo de corte y arreglo de barba'
        },
        {
          id: 7,
          name: 'Coloración',
          price: 4500,
          duration: 120,
          description: 'Tinte profesional con productos de alta calidad'
        },
        {
          id: 8,
          name: 'Mechas/Reflejos',
          price: 5000,
          duration: 150,
          description: 'Técnicas modernas de coloración parcial'
        },
        {
          id: 9,
          name: 'Tratamiento Capilar',
          price: 3500,
          duration: 90,
          description: 'Hidratación y reparación profunda del cabello'
        }
      ]
    },
    {
      title: 'Adultos Mayores (66+ años)',
      icon: UserCheck,
      color: 'text-accent',
      gradient: 'gradient-accent',
      services: [
        {
          id: 10,
          name: 'Corte Senior',
          price: 2000,
          duration: 40,
          description: 'Atención especial y cortes clásicos elegantes'
        },
        {
          id: 11,
          name: 'Peinado + Brushing',
          price: 2500,
          duration: 50,
          description: 'Peinado profesional con técnicas tradicionales'
        },
        {
          id: 12,
          name: 'Canas + Corte',
          price: 3200,
          duration: 75,
          description: 'Tratamiento especial para canas y corte personalizado'
        }
      ]
    }
  ];

  const handleServiceSelect = (service: any, category: any) => {
    onSelectService({
      ...service,
      category: category.title
    });
    onNavigate('booking');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Servicios especializados para cada etapa de la vida, 
            adaptados a las necesidades específicas de cada edad
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <section 
              key={categoryIndex}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 ${category.gradient} rounded-xl shadow-glow`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold">{category.title}</h2>
                  <p className="text-muted-foreground">
                    Servicios especializados para esta edad
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card 
                    key={service.id}
                    className="hover:scale-105 transition-bounce shadow-card bg-card hover:bg-card/80 animate-scale-in"
                    style={{ animationDelay: `${categoryIndex * 0.2 + serviceIndex * 0.1}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <Badge variant="secondary" className="shrink-0">
                          ${service.price}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration} min</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <span>{service.price}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full"
                        variant="default"
                        onClick={() => handleServiceSelect(service, category)}
                      >
                        Reservar Servicio
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Info */}
        <section className="mt-16 bg-muted/30 rounded-2xl p-8 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Información Importante</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todos nuestros servicios incluyen consulta personalizada y productos de primera calidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Años de experiencia</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-secondary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Clientes satisfechos</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-accent mb-2">5★</div>
              <p className="text-sm text-muted-foreground">Calificación promedio</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-muted-foreground mb-6">
            Contáctanos y te ayudaremos a encontrar el servicio perfecto para ti
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => onNavigate('booking')}
          >
            Consultar Servicio Personalizado
          </Button>
        </div>
      </div>
    </div>
  );
};