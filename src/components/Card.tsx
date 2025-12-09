//'use client';
import Link from 'next/link';

type CardVariant = 'default' | 'horizontal';

type Article = {
  id?: string;
  slug?: string;
  title: string;
  section: string;
  imageUrl?: string;
};

type CardProps = {
  article: Article;
  variant?: CardVariant;
  className?: string;
  locale?: string;
};


export default function Card({
  article,
  variant = 'default',
  className = '',
  locale
}: CardProps) {

const imageUrl = 'https://placehold.co/600x400/png';
 const slug = article?.slug;
 const href = `/${locale ?? ""}/${article?.section}/${slug}`.replace(/\/+/g, "/");


  if (variant === 'horizontal') {
    return (
      <Link 
        href={href}
        className={`block hover:opacity-90 transition-opacity ${className}`}
        aria-label={`Read more about ${article?.title}`}
      >
        <div className="flex flex-row h-32 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="w-1/3 h-full">
            <img
              src={imageUrl}
              alt={article?.title}
              className="w-full h-full object-cover"
              width={200}
              height={133}
            />
          </div>
          <div className="flex-1 p-4 flex flex-col justify-center">
            <h2 className="text-lg font-bold text-gray-900 line-clamp-2">{article?.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{article?.section}</p>
          </div>
        </div>
      </Link>
    );
  }

  // Default card variant
  return (
    <Link
      href={href}
      className={`block hover:opacity-90 transition-opacity ${className}`}
      aria-label={`Read more about ${article?.title}`}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
          <img
            src={imageUrl}
            alt={article?.title}
            className="absolute inset-0 w-full h-full object-cover"
            width={600}
            height={400}
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article?.title}</h2>
          <p className="text-sm text-gray-500">{article?.section}</p>
        </div>
      </div>
    </Link>
  );
}