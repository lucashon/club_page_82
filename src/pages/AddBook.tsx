import React, { useState } from 'react';
import { Upload, Plus } from 'lucide-react';

export default function AddBook() {
  const [coverImage, setCoverImage] = useState<string | null>(null);

  // BACKEND: Função para lidar com o upload da imagem
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-16">
      {/* Esquerda: Texto Intro */}
      <div className="lg:w-1/3 pt-12">
        <h1 className="text-5xl font-bold font-headline leading-tight mb-6 text-on-surface">
          Expanda seu<br />Acervo Pessoal.
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
          Cada livro adicionado é uma nova jornada compartilhada com nossa comunidade de leitores. Preencha os detalhes para que possamos catalogar sua próxima leitura.
        </p>
        <div className="w-12 h-1 bg-primary"></div>
      </div>

      {/* Direita: Formulário */}
      <div className="lg:w-2/3 bg-[#FCF8F5] p-10 rounded-3xl shadow-sm border border-on-surface/5">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Seção da Capa */}
          <div>
            <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-4">
              Capa do Livro
            </label>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative w-32 h-48 bg-surface-container-high rounded-lg overflow-hidden shrink-0 border border-dashed border-on-surface/20 flex flex-col items-center justify-center group cursor-pointer">
                {coverImage ? (
                  <>
                    <img src={coverImage} alt="Capa" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                      <Upload className="w-6 h-6 mb-2" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-center px-2">Alterar Capa</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4 text-on-surface-variant group-hover:text-primary transition-colors">
                    <Upload className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Upload</span>
                  </div>
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="flex-1 pt-4">
                <p className="text-sm text-on-surface-variant italic mb-2">
                  Arraste uma imagem ou clique para selecionar.<br/>
                  Recomendamos o formato vertical (3:4) para melhor visualização na estante.
                </p>
                <button type="button" className="text-primary font-bold text-sm hover:underline underline-offset-4">
                  Escolher arquivo local
                </button>
              </div>
            </div>
          </div>

          {/* Título e Autor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">
                Título
              </label>
              <input 
                type="text" 
                placeholder="Ex: O Nome da Rosa"
                className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-primary/20 shadow-sm text-on-surface"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">
                Autor
              </label>
              <input 
                type="text" 
                placeholder="Ex: Umberto Eco"
                className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-primary/20 shadow-sm text-on-surface"
              />
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">
              Descrição/Sinopse
            </label>
            <textarea 
              rows={4}
              placeholder="Conte um pouco sobre a narrativa deste livro..."
              className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-primary/20 shadow-sm text-on-surface resize-none"
            ></textarea>
          </div>

          {/* Páginas */}
          <div>
            <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2">
              Número Total de Páginas
            </label>
            <div className="flex items-center gap-4">
              <div className="relative w-40">
                <input 
                  type="number" 
                  placeholder="000"
                  className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-primary/20 shadow-sm text-on-surface pr-16"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Páginas
                </span>
              </div>
              <p className="text-[10px] text-on-surface-variant leading-tight max-w-[200px]">
                Os dados serão validados pelos curadores da biblioteca para garantir a precisão histórica do acervo.
              </p>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="pt-6 flex items-center gap-6">
            {/* BACKEND: Implementar submissão do formulário (POST /api/books) */}
            <button type="submit" className="flex-1 bg-[#F04438] hover:bg-[#D92D20] text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
              <Plus className="w-5 h-5" />
              Adicionar à Biblioteca
            </button>
            <button type="button" className="px-8 py-4 text-on-surface font-bold hover:bg-surface-container rounded-xl transition-colors">
              Cancelar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
