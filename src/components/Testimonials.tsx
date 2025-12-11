import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      company: 'Empresa Manufacturera XYZ',
      text: 'Gracias a esta guía logramos cumplir con todos los requisitos de INPSASEL sin complicaciones. El proceso fue claro y sencillo de seguir.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTMyMTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Servicios Industriales ABC',
      text: 'La asesoría profesional nos ayudó a conformar nuestro comité de seguridad correctamente. Excelente servicio y atención personalizada.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwb2ZmaWNlfGVufDF8fHx8MTc2NTI5MDEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Ana Martínez',
      company: 'Comercializadora DEF',
      text: 'Los formatos gratuitos nos facilitaron enormemente la organización de nuestros expedientes. Muy recomendado para cualquier empresa.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1738162837329-2f2a2cdebb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBzYWZldHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY1MzI3MTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="testimonios" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl text-black mb-6 tracking-tight">Testimonios</h2>
          <p className="text-xl text-gray-600">
            Descubre cómo hemos ayudado a otras empresas a cumplir con las normativas de seguridad y salud laboral.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-10"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-black fill-black" />
                ))}
              </div>
              
              <p className="text-gray-800 mb-8">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}