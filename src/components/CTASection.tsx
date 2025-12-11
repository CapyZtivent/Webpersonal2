import { GraduationCap, MessageCircle, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CTA 1 - Curso */}
          <div className="bg-black rounded-3xl p-12 text-white group hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h3 className="mb-4">¿Quieres profundizar más?</h3>
            <p className="text-gray-300 mb-8">
              Únete a nuestro curso de gestión de talento humano y seguridad laboral.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-200">
              Ver curso
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          {/* CTA 2 - Contacto */}
          <div className="bg-gray-100 rounded-3xl p-12 text-black group hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center mb-8">
              <MessageCircle className="w-7 h-7" />
            </div>
            <h3 className="mb-4">¿Tienes dudas o necesitas asesoría personalizada?</h3>
            <p className="text-gray-600 mb-8">
              Nuestro equipo está listo para ayudarte.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200">
              Contáctanos
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}