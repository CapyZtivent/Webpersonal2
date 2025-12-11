import { Crown, GraduationCap, ClipboardCheck, Database, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PremiumProducts() {
  const products = [
    {
      icon: Crown,
      title: 'Asesoría Premium Personalizada',
      description: 'Acompañamiento completo en todo el proceso de registro ante INPSASEL con atención prioritaria y seguimiento personalizado.',
      price: '$250',
      period: 'Por proyecto',
      image: 'https://images.unsplash.com/photo-1763479169474-728a7de108c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29uc3VsdGluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzY1MzI4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Consultoría personalizada uno a uno',
        'Revisión completa de documentación',
        'Acompañamiento en el proceso de registro',
        'Soporte prioritario vía WhatsApp',
        'Garantía de cumplimiento normativo'
      ],
      featured: true
    },
    {
      icon: GraduationCap,
      title: 'Curso Online Completo',
      description: 'Programa de capacitación integral sobre gestión de talento humano y seguridad laboral con certificación incluida.',
      price: '$120',
      period: 'Acceso de por vida',
      image: 'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjUyNzc4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '15+ horas de contenido en video',
        'Material descargable y plantillas',
        'Certificado de finalización',
        'Actualizaciones gratuitas',
        'Grupo privado de estudiantes'
      ],
      featured: false
    },
    {
      icon: ClipboardCheck,
      title: 'Auditoría de Cumplimiento',
      description: 'Evaluación exhaustiva del estado actual de tu empresa respecto a las normativas de INPSASEL con plan de acción.',
      price: '$180',
      period: 'Por auditoría',
      image: 'https://images.unsplash.com/photo-1521579498714-ff08ba4836ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1ZGl0JTIwY2hlY2tsaXN0fGVufDF8fHx8MTc2NTMwNzg1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        'Análisis completo de documentación',
        'Identificación de brechas de cumplimiento',
        'Informe detallado con recomendaciones',
        'Plan de acción priorizado',
        'Seguimiento post-auditoría'
      ],
      featured: false
    },
    {
      icon: Database,
      title: 'Kit Digital Premium',
      description: 'Paquete completo de plantillas, formatos y herramientas digitales para gestionar talento humano y SST.',
      price: '$85',
      period: 'Pago único',
      image: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdG9vbHMlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjUzMjgyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: [
        '50+ plantillas editables',
        'Formatos de expedientes completos',
        'Checklists y procedimientos',
        'Políticas y reglamentos modelo',
        'Actualizaciones anuales incluidas'
      ],
      featured: false
    }
  ];

  return (
    <section id="premium" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl text-white mb-6 tracking-tight">Productos Premium</h2>
          <p className="text-xl text-gray-400">
            Lleva tu gestión al siguiente nivel con nuestras soluciones profesionales especializadas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 group ${
                  product.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                <div className={`w-full overflow-hidden bg-gray-200 ${
                  product.featured ? 'aspect-video' : 'aspect-square'
                }`}>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-8 text-black">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-black mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{product.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl text-black">{product.price}</span>
                    </div>
                    <p className="text-sm text-gray-500">{product.period}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full px-6 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-200">
                    Adquirir ahora
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            ¿Necesitas una solución personalizada para tu empresa?
          </p>
          <a 
            href="#contacto" 
            className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-105"
          >
            Contactar para cotización
          </a>
        </div>
      </div>
    </section>
  );
}
