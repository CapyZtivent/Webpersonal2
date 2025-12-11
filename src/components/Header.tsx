import { Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-black p-2.5 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-black tracking-tight">INPSASEL</h1>
            </div>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a href="#inicio" className="text-gray-600 hover:text-black transition-colors duration-200">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-black transition-colors duration-200">Servicios</a>
            <a href="#productos" className="text-gray-600 hover:text-black transition-colors duration-200">Recursos Gratis</a>
            <a href="#premium" className="text-gray-600 hover:text-black transition-colors duration-200">Premium</a>
            <a href="#testimonios" className="text-gray-600 hover:text-black transition-colors duration-200">Testimonios</a>
            <a href="#contacto" className="text-gray-600 hover:text-black transition-colors duration-200">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  );
}