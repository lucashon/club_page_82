import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { name: 'Sobre Nós', path: '#' },
    { name: 'Termos de Serviço', path: '#' },
    { name: 'Privacidade', path: '#' },
    { name: 'Contato', path: '#' },
  ];

  return (
    <footer className="w-full border-t border-on-surface/5 bg-background">
      <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="font-body text-xs uppercase tracking-widest text-on-surface/40 mb-6 md:mb-0">
          © 2024 A Biblioteca Viva. Uma Experiência Narrativa Tátil.
        </p>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-body text-xs uppercase tracking-widest text-on-surface/40 hover:text-primary transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
