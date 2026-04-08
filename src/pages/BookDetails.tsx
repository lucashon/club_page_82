import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { Star, BookOpen, Heart, Reply, Tag } from 'lucide-react';

export default function BookDetails() {
  const { id } = useParams();

  // BACKEND: Usar o 'id' da URL para buscar os detalhes do livro na API (ex: GET /api/books/:id)

  return (
    <div className="px-8 py-12 max-w-7xl mx-auto">
      {/* Grade de Detalhes do Livro */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
        {/* Esquerda: Visuais do Livro */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5 flex flex-col items-center md:items-start"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-on-surface/10 blur-2xl transform translate-y-4 scale-95 transition-all duration-500 group-hover:scale-100"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMXkE86Ao1Rg8arTbZByeSvWl_SV8vgkhC16U_9epEvv_JkkQDv4yHrfIRg1MdBODQ3jnEaB66EQJ6H2alwky-b29_0e3rJeJjoKn66NBky60bb-6rswM565DKQ5qVnXEOHlLQjvcI7Rb1vGPEEo0EDGbah3FW1vrFEmsv_9Wi3ZX6ZzYXig3XTCQTFkI4D28g1unevPFxJUKeoahRZ2kwuhKClqWy1-3wTUfPWx9Tlb9BmqTuurA19K2JH_X4bMBgiHztfIPbXys" 
              alt="A Sombra do Vento"
              className="relative w-full max-w-md rounded-lg shadow-xl object-cover aspect-[2/3]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-12 w-full">
            <h1 className="text-5xl font-bold text-on-surface leading-tight tracking-tight mb-4">A Sombra do Vento</h1>
            <p className="text-xl font-medium text-secondary mb-6 italic">Carlos Ruiz Zafón</p>
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <span className="px-4 py-1.5 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-semibold uppercase tracking-widest">Ficção Histórica</span>
              <span className="flex items-center gap-1 text-secondary font-bold">
                <Star className="w-4 h-4 fill-current" />
                4.8
              </span>
              <span className="text-on-surface/40 text-sm">Publicado em 2001</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-4 rounded-xl">
                <p className="text-xs uppercase tracking-widest text-on-surface/40 mb-1">Formato</p>
                <p className="font-bold text-on-surface">Capa Dura</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl">
                <p className="text-xs uppercase tracking-widest text-on-surface/40 mb-1">Páginas</p>
                <p className="font-bold text-on-surface">487</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Direita: Progresso e Detalhes */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-7 flex flex-col justify-start"
        >
          <div className="bg-surface-container-low p-10 rounded-2xl mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-secondary" />
              Meu Progresso de Leitura
            </h2>
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <span className="text-4xl font-bold text-primary">62%</span>
                <span className="text-on-surface/60 font-medium">302 de 487 páginas</span>
              </div>
              <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '62%' }}></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* BACKEND: Implementar função para atualizar o progresso no banco de dados */}
              <button className="flex-1 bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
                Atualizar leitura
              </button>
              <button className="px-6 py-4 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                Marcar como Finalizado
              </button>
            </div>
          </div>
          <div className="prose prose-on-surface max-w-none">
            <h3 className="text-2xl font-bold mb-4">Sinopse</h3>
            <p className="text-on-surface/80 leading-relaxed text-lg font-body mb-6">
              Barcelona, 1945: Uma cidade que se cura lentamente após a Guerra Civil Espanhola, e Daniel, filho de um negociante de livros antigos que chora a perda da mãe, encontra consolo em um livro misterioso intitulado A Sombra do Vento, de um certo Julián Carax. 
            </p>
            <p className="text-on-surface/80 leading-relaxed text-lg font-body">
              Mas quando ele decide encontrar outras obras do autor, faz uma descoberta chocante: alguém tem destruído sistematicamente cada cópia de cada livro que Carax já escreveu. Na verdade, Daniel pode ter o último dos livros de Carax em existência. Logo, a busca aparentemente inocente de Daniel abre uma porta para um dos segredos mais sombrios de Barcelona - uma história épica de assassinato, loucura e amor condenado.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Seção Social */}
      <section className="mt-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Discussão da Comunidade</h2>
          <div className="flex gap-4">
            <span className="text-on-surface/60 text-sm font-medium">128 Comentários</span>
          </div>
        </div>
        <div className="space-y-8 max-w-4xl">
          {/* BACKEND: Mapear comentários vindos da API (ex: GET /api/books/:id/comments) */}
          {/* Comentário 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_4px_20px_rgba(41,23,11,0.04)] relative">
            <div className="flex items-start gap-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKWnwSGhfwdyqOj93_Z1xlvDQowOG5GmHPoYwnntN_zjKb2Zjl8rgOMjrFJ6V21k9FrFxSKi2Zr2jj5yJ2L_d-F9SRbDaOYAGZWZbW4nj7n47pqsNCt0qnTGEvGpl5BVYUXqidY_Q-TlwgdyW7vDsuJWD3D1LxXL1PrCej1kFcNERqQRAQSOdj9xdR8L33W9ZbWaoUQFwdIlv2R72zun-5IVyLIpwo7SwFszBYZ4-1y1yVB0t6Sg594s3Qg1aJmBJTOwpsg6by5PU" 
                alt="Elena Gilbert"
                className="w-12 h-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-bold text-on-surface mr-3">Elena Gilbert</span>
                    <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded text-[10px] font-bold uppercase tracking-wider">Página 310</span>
                  </div>
                  <span className="text-xs text-on-surface/40">2 horas atrás</span>
                </div>
                <p className="text-on-surface/80 leading-relaxed mb-4">
                  A descrição do Cemitério dos Livros Esquecidos é tão evocativa. Quase consigo sentir o cheiro de papel velho e poeira! Mais alguém sente que Julián Carax é baseado em uma pessoa real?
                </p>
                <div className="flex items-center gap-6">
                  {/* BACKEND: Implementar lógica de curtida (like) */}
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80">
                    <Heart className="w-4 h-4 fill-current" />
                    24
                  </button>
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-on-surface/60 hover:text-primary">
                    <Reply className="w-4 h-4" />
                    Responder
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Entrada de Comentário */}
          <div className="mt-12 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
            <div className="flex gap-4">
              {/* BACKEND: Exibir avatar do usuário logado */}
              <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden">
                <img src="https://picsum.photos/seed/me/100/100" alt="Eu" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                {/* BACKEND: Capturar texto e enviar para a API (POST /api/books/:id/comments) */}
                <textarea 
                  className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 min-h-[120px] mb-4 text-on-surface placeholder:text-on-surface/30" 
                  placeholder="Compartilhe seus pensamentos ou uma nota de página específica..."
                ></textarea>
                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-2 text-on-surface/60 hover:text-primary font-semibold text-sm">
                    <Tag className="w-4 h-4" />
                    Adicionar Página #
                  </button>
                  <button className="bg-primary text-white px-8 py-2.5 rounded-lg font-bold hover:bg-primary-container transition-colors">
                    Postar Comentário
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
