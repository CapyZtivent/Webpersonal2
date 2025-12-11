import { Shield, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-2.5 rounded-xl">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-white">INPSASEL</h3>
              </div>
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Expertos en gestión de talento humano y cumplimiento de normativas de seguridad laboral ante INPSASEL.
            </p>
          </div>
          
          {/* Información de contacto */}
          <div>
            <h4 className="text-white mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                <span className="text-sm">Av. Principal, Caracas 1050, Venezuela</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                <span className="text-sm">+58 424 123 4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                <span className="text-sm">contacto@inpsaselgestion.com</span>
              </div>
            </div>
          </div>
          
          {/* Enlaces legales */}
          <div>
            <h4 className="text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} INPSASEL Gestión. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}