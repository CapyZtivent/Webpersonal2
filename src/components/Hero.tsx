import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-black mb-8 tracking-tight">
              Guía práctica para la Gestión de Talento Humano y Seguridad Laboral
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12">
              Te enseño paso a paso cómo registrar tu entidad de trabajo, delegados de prevención y comité de seguridad ante INPSASEL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#productos" 
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                Descargar Ebook Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-200 hover:scale-105"
              >
                Ver Servicios
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwb2ZmaWNlfGVufDF8fHx8MTc2NTI5MDEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profesional de Recursos Humanos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}