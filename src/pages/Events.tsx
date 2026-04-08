import { MapPin, Clock, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Events() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full max-w-screen-2xl mx-auto px-8 pt-4 mb-12">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <img 
            src="https://picsum.photos/seed/library-hall/1920/1080" 
            alt="Biblioteca" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          
          <div className="absolute inset-0 p-12 flex flex-col justify-center">
            <span className="text-[#F04438] text-xs font-bold tracking-widest uppercase mb-4">Próximo Encontro do Clube</span>
            <h1 className="text-6xl font-bold font-headline text-white mb-8 max-w-2xl leading-tight">
              O Eco de Clarice Lispector
            </h1>
            
            <div className="flex flex-col gap-4 mb-8">
              <div>
                <span className="text-white/70 text-[10px] uppercase tracking-widest block mb-1">Data & Hora</span>
                <p className="text-white font-medium italic">24 de Novembro, 19:30</p>
              </div>
              <div>
                <span className="text-white/70 text-[10px] uppercase tracking-widest block mb-1">Localização</span>
                <p className="text-white font-medium italic">Biblioteca Municipal de Coimbra</p>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-auto">
              {/* BACKEND: Ação de confirmar presença */}
              <button className="bg-[#F04438] hover:bg-[#D92D20] text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                Confirmar Presença
              </button>
              
              <div className="flex items-center gap-4 bg-black/30 backdrop-blur-md px-6 py-2 rounded-lg border border-white/10 text-white">
                <div className="text-center">
                  <span className="block text-2xl font-bold">04</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Dias</span>
                </div>
                <span className="text-2xl font-light opacity-50">:</span>
                <div className="text-center">
                  <span className="block text-2xl font-bold">12</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">Horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Coluna Esquerda (Votação e Sugestão) */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Votação */}
          <div>
            <h2 className="text-3xl font-headline font-bold mb-2 text-on-surface">Votação de Local: Dezembro</h2>
            <p className="text-on-surface-variant mb-8 max-w-xl">
              Onde devemos realizar o nosso encontro especial de Natal? Vote no seu refúgio literário favorito.
            </p>

            <div className="space-y-6">
              {/* Opção 1 */}
              <div className="bg-[#FCF8F5] p-6 rounded-2xl border border-on-surface/5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#F04438]" />
                    <span className="font-bold text-lg">Biblioteca Municipal</span>
                  </div>
                  <button className="text-[#F04438] text-xs font-bold uppercase tracking-wider hover:underline">Votar</button>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-[#F04438] w-[45%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-wider">
                  <span>12 membros votaram</span>
                  <span className="font-bold text-on-surface">45%</span>
                </div>
              </div>

              {/* Opção 2 */}
              <div className="bg-[#FCF8F5] p-6 rounded-2xl border border-on-surface/5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#F04438]" />
                    <span className="font-bold text-lg">Café Central</span>
                  </div>
                  <button className="text-[#F04438] text-xs font-bold uppercase tracking-wider hover:underline">Votar</button>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-[#F04438] w-[38%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-wider">
                  <span>10 membros votaram</span>
                  <span className="font-bold text-on-surface">38%</span>
                </div>
              </div>

              {/* Opção 3 */}
              <div className="bg-[#FCF8F5] p-6 rounded-2xl border border-on-surface/5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#F04438]" />
                    <span className="font-bold text-lg">Reunião Online</span>
                  </div>
                  <button className="text-[#F04438] text-xs font-bold uppercase tracking-wider hover:underline">Votar</button>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-[#F04438]/30 w-[17%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-wider">
                  <span>4 membros votaram</span>
                  <span className="font-bold text-on-surface">17%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sugira um Tópico */}
          <div className="bg-white border border-on-surface/10 rounded-3xl p-8 flex flex-col md:flex-row gap-8 shadow-sm">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-headline font-bold text-[#F04438] mb-4 leading-tight">Sugira um<br/>Tópico</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Queremos ouvir a sua voz. Que passagens ou temas de Clarice deveríamos explorar profundamente no próximo encontro?
              </p>
              <img src="https://picsum.photos/seed/ink/300/300" alt="Tinteiro" className="w-full h-40 object-cover rounded-xl grayscale opacity-80" referrerPolicy="no-referrer" />
            </div>
            <div className="md:w-2/3 space-y-6">
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mb-2">Tema ou Pergunta</label>
                <input type="text" placeholder="Ex: O papel do silêncio na obra..." className="w-full px-4 py-3 bg-[#FCF8F5] border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mb-2">Contexto (Opcional)</label>
                <textarea rows={4} placeholder="Descreva brevemente por que este tópico é relevante..." className="w-full px-4 py-3 bg-[#FCF8F5] border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm resize-none"></textarea>
              </div>
              {/* BACKEND: Enviar sugestão */}
              <button className="bg-[#29170B] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors">
                Enviar Sugestão
              </button>
            </div>
          </div>

        </div>

        {/* Coluna Direita (Calendário e Agenda) */}
        <div className="space-y-12">
          
          {/* Calendário */}
          <div className="bg-[#FCF8F5] p-8 rounded-3xl border border-on-surface/5">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Novembro</h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-surface-container rounded-full"><ChevronLeft className="w-5 h-5" /></button>
                <button className="p-1 hover:bg-surface-container rounded-full"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 text-center text-[10px] font-bold text-on-surface-variant mb-4 uppercase tracking-wider">
              <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
            </div>
            
            <div className="grid grid-cols-7 gap-y-4 text-center text-sm">
              <span className="text-on-surface-variant/40">27</span><span className="text-on-surface-variant/40">28</span><span className="text-on-surface-variant/40">29</span><span className="text-on-surface-variant/40">30</span><span className="text-on-surface-variant/40">31</span><span>1</span><span>2</span>
              <span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
              <span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span>
              <span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span>
              <span className="relative flex justify-center items-center">
                <span className="bg-[#F04438] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">24</span>
              </span>
              <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
            </div>
          </div>

          {/* Agenda */}
          <div>
            <h3 className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase mb-6">Agenda de Dezembro</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-center shrink-0">
                  <span className="block text-2xl font-bold text-[#F04438]">05</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Dez</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Círculo Poético de Natal</h4>
                  <p className="text-xs text-on-surface-variant">Troca de poemas e contos curtos de inverno.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center shrink-0">
                  <span className="block text-2xl font-bold text-on-surface-variant/50">15</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/50">Dez</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Entrega do Amigo Secreto</h4>
                  <p className="text-xs text-on-surface-variant">O aguardado encontro de troca de livros.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center shrink-0">
                  <span className="block text-2xl font-bold text-on-surface-variant/50">20</span>
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/50">Dez</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">Planejamento 2025</h4>
                  <p className="text-xs text-on-surface-variant">Sessão aberta para sugestões de leituras para o novo ano.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Memórias Literárias */}
      <section className="max-w-screen-2xl mx-auto px-8 mt-20">
        <div className="flex justify-between items-end mb-8 border-b border-on-surface/10 pb-4">
          <h2 className="text-3xl font-headline font-bold">Memórias Literárias</h2>
          <button className="text-[#F04438] text-xs font-bold uppercase tracking-wider hover:underline italic">Ver Arquivo Completo</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#FCF8F5] rounded-3xl overflow-hidden border border-on-surface/5 group cursor-pointer">
            <div className="h-64 overflow-hidden">
              <img src="https://picsum.photos/seed/candles/800/600" alt="Encontro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8">
              <span className="bg-[#F04438] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Outubro 2024</span>
              <h3 className="text-2xl font-headline font-bold mb-3 italic">A Hora da Estrela: Debate Intimista</h3>
              <p className="text-sm text-on-surface-variant mb-6">Uma discussão profunda sobre a vida de Macabéa e a narrativa de Rodrigo S.M.</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-[#FCF8F5] flex items-center justify-center text-[10px] font-bold">ML</div>
                  <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-[#FCF8F5] flex items-center justify-center text-[10px] font-bold">JD</div>
                </div>
                <span className="text-[10px] font-bold text-[#F04438] bg-[#F04438]/10 px-2 py-1 rounded-full">+18</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FCF8F5] rounded-3xl overflow-hidden border border-on-surface/5 group cursor-pointer">
            <div className="h-64 overflow-hidden">
              <img src="https://picsum.photos/seed/cabin/800/600" alt="Encontro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8">
              <span className="bg-[#29170B] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Setembro 2024</span>
              <h3 className="text-2xl font-headline font-bold mb-3 italic">Noites Árticas: Leitura sob as Estrelas</h3>
              <p className="text-sm text-on-surface-variant mb-6">Exploramos contos nórdicos e o simbolismo do inverno na literatura clássica.</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-[#FCF8F5] flex items-center justify-center text-[10px] font-bold">AS</div>
                  <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-[#FCF8F5] flex items-center justify-center text-[10px] font-bold">PK</div>
                </div>
                <span className="text-[10px] font-bold text-[#F04438] bg-[#F04438]/10 px-2 py-1 rounded-full">+12</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
