type CardVariant = 'default' | 'horizontal';

type Article = {
  title: string;
  section: string;
  imageUrl?: string;
};

type CardProps = {
  article: Article;
  variant?: CardVariant;
  className?: string;
};

export default function Card({ 
  article, 
  variant = 'default',
  className = '' 
}: CardProps) {
  const imageUrl = article.imageUrl || 'https://placehold.co/600x400/png';
  
  if (variant === 'horizontal') {
    return (
      <div className={`flex flex-row h-32 bg-white rounded-lg overflow-hidden shadow-md ${className}`}>
        <div className="w-1/3 h-full">
          <img
            src={imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-center">
          <h2 className="text-lg font-bold text-gray-900 line-clamp-2">{article.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{article.section}</p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex items-center justify-center bg-green-200 rounded-lg aspect-video relative overflow-hidden ${className}`}>
      <img
        src={imageUrl}
        alt={article.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h2 className="text-xl font-bold mb-1 line-clamp-2">{article.title}</h2>
        <p className="text-sm">{article.section}</p>
      </div>
    </div>
  );
}