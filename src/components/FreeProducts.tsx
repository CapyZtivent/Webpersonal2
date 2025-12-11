import { BookOpen, FileText, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FreeProducts() {
  const products = [
    {
      icon: BookOpen,
      title: 'Ebook Gratis: Gestión de Talento Humano',
      description: 'Obtén este Ebook gratuito para mejorar la gestión del talento humano dentro de tu empresa. Incluye consejos prácticos y herramientas esenciales.',
      buttonText: 'Descargar ahora',
      image: 'https://images.unsplash.com/photo-1532961130800-58bc2c157ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGVib29rJTIwcmVhZGluZyUyMHRhYmxldHxlbnwxfHx8fDE3NjUzMjgxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: FileText,
      title: 'Formato de expediente de Talento Humano y SST',
      description: 'Accede a este formato gratuito para organizar y mantener los documentos necesarios para cumplir con las normativas de seguridad y salud laboral.',
      buttonText: 'Descargar formato',
      image: 'https://images.unsplash.com/photo-1706517212966-43695534fe88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBkb2N1bWVudHMlMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzY1MzI4MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="productos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl text-black mb-6 tracking-tight">Productos Gratuitos</h2>
          <p className="text-xl text-gray-600">
            Descarga recursos gratuitos para mejorar la gestión de tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-3xl overflow-hidden hover:bg-gray-100 transition-all duration-300 group"
              >
                <div className="aspect-video w-full overflow-hidden bg-gray-200">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-10">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-8">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-black mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-8">{product.description}</p>
                  <button className="inline-flex items-center px-8 py-4 bg-white text-black border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-200 hover:scale-105 w-full justify-center">
                    <Download className="mr-2 w-5 h-5" />
                    {product.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}