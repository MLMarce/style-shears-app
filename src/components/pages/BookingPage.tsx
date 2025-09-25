import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, CheckCircle, MessageCircle, Mail, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface BookingPageProps {
  selectedService?: any;
  onNavigate: (page: string) => void;
}

export const BookingPage = ({ selectedService, onNavigate }: BookingPageProps) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
    service: selectedService?.name || '',
    date: undefined as Date | undefined,
    time: '',
  });

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
  ];

  const services = [
    'Corte Infantil', 'Corte + Lavado', 'Peinado Especial',
    'Corte Masculino', 'Corte Femenino', 'Barba + Corte',
    'Coloración', 'Mechas/Reflejos', 'Tratamiento Capilar',
    'Corte Senior', 'Peinado + Brushing', 'Canas + Corte'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.firstName || !formData.lastName || !formData.age || 
        !formData.gender || !formData.service || !formData.date || !formData.time) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    // Simular envío exitoso
    setStep('success');
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `¡Hola! Quiero confirmar mi reserva:\n\n` +
      `👤 Nombre: ${formData.firstName} ${formData.lastName}\n` +
      `📧 Email: ${formData.email || 'No proporcionado'}\n` +
      `🎂 Edad: ${formData.age} años\n` +
      `⚧ Género: ${formData.gender}\n` +
      `✂️ Servicio: ${formData.service}\n` +
      `📅 Fecha: ${formData.date ? format(formData.date, 'PPP', { locale: es }) : ''}\n` +
      `⏰ Hora: ${formData.time}\n\n` +
      `¡Espero su confirmación!`
    );
    
    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card shadow-card animate-scale-in">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">¡Reserva Exitosa!</h1>
                <p className="text-muted-foreground">
                  Tu solicitud de turno ha sido enviada correctamente
                </p>
              </div>

              {/* Resumen de la reserva */}
              <div className="bg-muted/30 rounded-lg p-6 mb-6 text-left">
                <h3 className="font-semibold mb-4">Resumen de tu reserva:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nombre:</span>
                    <span>{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Servicio:</span>
                    <span>{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fecha:</span>
                    <span>{formData.date ? format(formData.date, 'PPP', { locale: es }) : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hora:</span>
                    <span>{formData.time}</span>
                  </div>
                  {selectedService && (
                    <div className="flex justify-between font-semibold border-t border-border pt-2 mt-2">
                      <span>Precio:</span>
                      <span className="text-primary">${selectedService.price}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleWhatsAppRedirect}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Confirmar por WhatsApp
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>También recibirás un email de confirmación</span>
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('home')}
                  className="w-full"
                >
                  Volver al Inicio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('services')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Servicios
          </Button>
          <h1 className="text-4xl font-bold mb-2">Reservar Turno</h1>
          <p className="text-muted-foreground">
            Completa el formulario para reservar tu cita
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Tu apellido"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Edad *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="1"
                        max="120"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                        placeholder="Ej: 25"
                        required
                      />
                    </div>
                    <div>
                      <Label>Género *</Label>
                      <Select 
                        value={formData.gender} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu género" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="femenino">Femenino</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Servicio */}
                  <div>
                    <Label>Servicio *</Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Fecha y Hora */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Fecha *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.date ? format(formData.date, "PPP", { locale: es }) : "Selecciona una fecha"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={(date) => setFormData(prev => ({ ...prev, date }))}
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Hora *</Label>
                      <Select 
                        value={formData.time} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, time: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una hora" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Confirmar Reserva
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Resumen */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="sticky top-24 shadow-card">
              <CardHeader>
                <CardTitle>Resumen de Reserva</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedService && (
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{selectedService.name}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duración:</span>
                        <span>{selectedService.duration} min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Precio:</span>
                        <span className="font-semibold text-primary">${selectedService.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2 text-sm">
                  <h4 className="font-semibold">Datos del Cliente:</h4>
                  <div className="text-muted-foreground">
                    {formData.firstName && formData.lastName ? (
                      <p>{formData.firstName} {formData.lastName}</p>
                    ) : (
                      <p className="italic">Nombre pendiente</p>
                    )}
                    {formData.age && <p>Edad: {formData.age} años</p>}
                    {formData.gender && <p>Género: {formData.gender}</p>}
                  </div>
                </div>

                {formData.date && formData.time && (
                  <div className="space-y-2 text-sm">
                    <h4 className="font-semibold">Fecha y Hora:</h4>
                    <div className="text-muted-foreground">
                      <p>{format(formData.date, 'PPP', { locale: es })}</p>
                      <p>{formData.time}</p>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    * Los campos marcados son obligatorios
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};