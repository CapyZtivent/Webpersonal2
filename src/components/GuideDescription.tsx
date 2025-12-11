import { CheckCircle, Download } from 'lucide-react';

export function GuideDescription() {
  const benefits = [
    'Registro de entidad de trabajo ante INPSASEL',
    'Gestión de delegados de prevención',
    'Conformación del comité de seguridad',
    'Cumplimiento legal garantizado'
  ];

  return (
    <section id="guia" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl text-black mb-6 tracking-tight">Guía práctica paso a paso</h2>
          <p className="text-xl text-gray-600">
            Aprende todo lo que necesitas saber sobre el registro de tu entidad de trabajo, delegados de prevención y comité de seguridad ante INPSASEL.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-2xl">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <span className="text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="#productos"
              className="inline-flex items-center px-10 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105"
            >
              <Download className="mr-3 w-5 h-5" />
              Descarga el Ebook gratis aquí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}