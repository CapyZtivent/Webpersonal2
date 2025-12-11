import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function SocialMedia() {
  const contacts = [
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@inpsasel_gestion',
      href: 'https://instagram.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'INPSASEL Gestión',
      href: 'https://linkedin.com'
    },
    {
      icon: Mail,
      label: 'Correo electrónico',
      value: 'contacto@inpsaselgestion.com',
      href: 'mailto:contacto@inpsaselgestion.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+58 424 123 4567',
      href: 'tel:+584241234567'
    }
  ];

  return (
    <section id="contacto" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl text-black mb-6 tracking-tight">Conéctate con nosotros</h2>
          <p className="text-xl text-gray-600">
            Síguenos en redes sociales y mantente actualizado
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl p-8 hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-black mb-2">{contact.label}</h4>
                <p className="text-sm text-gray-600 break-words">{contact.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}