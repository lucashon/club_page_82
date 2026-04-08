import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3E8E0] p-4 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        
        {/* Left Panel */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://picsum.photos/seed/library-dark/800/800" 
            alt="Biblioteca" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-20 h-full flex flex-col justify-end p-10 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4 leading-tight">
              Sua jornada começa entre as páginas.
            </h1>
            <p className="text-white/80 text-lg">
              Junte-se à nossa comunidade de leitores e descubra histórias que transformam.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">The Living Library</h2>
            <p className="text-on-surface-variant mb-8">Crie sua conta para acessar o acervo.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-on-surface mb-2 uppercase tracking-wide">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 bg-[#FCF8F5] border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-2 uppercase tracking-wide">E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-[#FCF8F5] border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-on-surface uppercase tracking-wide">Senha</label>
                  <span className="text-[10px] text-on-surface-variant italic">mín. 8 caracteres</span>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#FCF8F5] border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface"
                />
              </div>

              {/* BACKEND: Implementar lógica de criação de conta aqui */}
              <button type="submit" className="w-full bg-[#FF4438] hover:bg-[#E03A2F] text-white py-4 rounded-lg font-bold transition-colors flex justify-center items-center gap-2 mt-4">
                Criar Minha Conta <span>→</span>
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-sm text-on-surface-variant">
                Já possui uma conta? <Link to="/login" className="text-[#992211] font-bold hover:underline">Entrar agora</Link>
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-on-surface-variant/50 text-xs uppercase tracking-widest">
        <p>© 2024 A BIBLIOTECA VIVA. TODOS OS DIREITOS RESERVADOS.</p>
      </div>
    </div>
  );
}
