import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3E8E0] p-4 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-[#FCF8F5] p-12 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-headline font-bold text-on-surface mb-4">A Biblioteca Viva</h1>
            <p className="text-on-surface-variant text-lg">
              Bem-vindo de volta ao seu santuário para leitura moderna e contos clássicos.
            </p>
          </div>
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://picsum.photos/seed/books-stack/800/600" 
              alt="Pilha de livros" 
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">Entrar</h2>
            <p className="text-on-surface-variant mb-8">Continue sua jornada literária</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-2">E-mail</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-[#FCF8F5] border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-on-surface"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-on-surface">Senha</label>
                  <a href="#" className="text-xs text-[#D92D20] hover:underline">Esqueci minha senha</a>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#FCF8F5] border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-on-surface"
                />
                <p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-on-surface-variant/20 flex items-center justify-center text-[8px]">i</span>
                  Min. 8 caracteres
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="rounded border-on-surface/20 text-[#D92D20] focus:ring-[#D92D20]" />
                <label htmlFor="remember" className="text-sm text-on-surface-variant">Lembrar de mim</label>
              </div>

              {/* BACKEND: Implementar lógica de autenticação aqui */}
              <button type="submit" className="w-full bg-[#D92D20] hover:bg-[#B42318] text-white py-4 rounded-xl font-bold transition-colors">
                Entrar na Biblioteca
              </button>
            </form>

            <div className="mt-8 text-center border-t border-on-surface/10 pt-8">
              <p className="text-sm text-on-surface-variant mb-6">
                Ainda não tem uma conta? <a href="#" className="text-[#D92D20] font-bold hover:underline underline-offset-4 decoration-2">Cadastre-se</a>
              </p>
              <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                <a href="#" className="hover:text-on-surface">Privacidade</a>
                <a href="#" className="hover:text-on-surface">Termos</a>
                <a href="#" className="hover:text-on-surface">Suporte</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 text-center text-on-surface-variant/50 text-sm">
        <p className="font-headline text-lg mb-2">A Biblioteca Viva</p>
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="hover:text-on-surface-variant">Privacy Policy</a>
          <a href="#" className="hover:text-on-surface-variant">Terms of Service</a>
          <a href="#" className="hover:text-on-surface-variant">Contact Us</a>
        </div>
        <p>© 2024 The Living Library. A Sanctuary for Readers.</p>
      </div>
    </div>
  );
}
