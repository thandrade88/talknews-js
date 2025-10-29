import React from "react";

interface SectionLayoutProps {
  col1Content?: React.ReactNode;
  col2Content?: React.ReactNode[];
  height?: string;
}

const NewsBanner: React.FC<SectionLayoutProps> = ({

  height = "",
}) => {
  return (
    <section className="p-4">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${height}`}>
        {/* COL 1 */}
        <div className="flex items-center justify-center bg-blue-200 rounded-lg relative overflow-hidden">
          <article className="min-w-full">
            <figure className="h-full">
              <a href="#" title="Post Title">
                <img
                  src="https://talknews.ie/wp-content/uploads/2025/07/capa-spotify-final-1024x1024.jpg"
                  alt="Teste de Post de Esporte"
                  className="w-full h-full object-cover"
                />
              </a>
            </figure>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <div className="flex items-center text-sm space-x-2 mb-2">
                <a href="#" className="uppercase font-semibold text-amber-400">Esportes</a>
                <span>•</span>
                <time dateTime="2025-05-18">5 months ago</time>
              </div>
              <h2 className="text-xl font-bold mb-1">
                <a href="#" className="hover:underline">Teste de Post de Esporte</a>
              </h2>
              <p className="text-sm text-gray-100">Teste de Post de Esporte Teste de Post de Esporte</p>
            </div>
          </article>
        </div>

        {/* COL 2 */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
          {["1col", "2col", "3col", "4col"].map((label, index) => (
            <div
              key={index}
              className="bg-green-200 rounded-lg overflow-hidden relative"
            >
              <article className="min-w-full">
                <figure className="h-full">
                  <a href="#" title="Post Title">
                    <img
                      src="https://talknews.ie/wp-content/uploads/2025/07/capa-spotify-final-1024x1024.jpg"
                      alt="Teste de Post de Esporte"
                      className="w-full h-full object-cover"
                    />
                  </a>
                </figure>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <div className="flex items-center text-sm space-x-2 mb-2">
                    <a href="#" className="uppercase font-semibold text-amber-400">Esportes</a>
                    <span>•</span>
                    <time dateTime="2025-05-18">5 months ago</time>
                  </div>
                  <h2 className="text-xl font-bold mb-1">
                    <a href="#" className="hover:underline">Teste de Post de Esporte</a>
                  </h2>
                  <p className="text-sm text-gray-100">Teste de Post de Esporte Teste de Post de Esporte</p>
                </div>
              </article>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsBanner;
