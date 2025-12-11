import { Shield, Users, FileCheck, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const features = [
    {
      icon: Shield,
      title: 'Registro INPSASEL',
      description: 'Registro completo de tu entidad de trabajo'
    },
    {
      icon: Users,
      title: 'Delegados de Prevención',
      description: 'Gestión y capacitación de delegados'
    },
    {
      icon: FileCheck,
      title: 'Comité de Seguridad',
      description: 'Conformación y documentación legal'
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl text-black mb-6 tracking-tight">Servicios Profesionales</h2>
          <p className="text-xl text-gray-600">
            Asesoría especializada para el cumplimiento de normativas laborales
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-black mb-6">Asesoría para el registro ante INPSASEL</h3>
                <p className="text-gray-600 mb-10">
                  Te ayudamos a registrar tu entidad de trabajo, delegados de prevención y comité de seguridad ante INPSASEL de manera efectiva y sin complicaciones.
                </p>
                
                <div className="space-y-6 mb-10">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="text-black mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div>
                  <button className="inline-flex items-center px-10 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                    <MessageSquare className="mr-3 w-5 h-5" />
                    Solicitar asesoría
                  </button>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576670159411-f25b57bcd87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YW50JTIwbWVldGluZ3xlbnwxfHx8fDE3NjUyMzM1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Asesoría profesional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}