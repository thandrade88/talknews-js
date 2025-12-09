
import Card from "./Card";

const gridColsClasses = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
} as const;

type GridSectionProps = {
    title: string;
    cols: keyof typeof gridColsClasses;
    items: {id: string, slug: {current: string}, title: string, section: string, imageUrl?: string}[];
    color?: string;
    locale?: string;
};

export default function GridSection({ title, cols, items, color, locale }: GridSectionProps) {
    const gridClass = gridColsClasses[cols] || 'md:grid-cols-1';
    
    return (
      <>
        {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
        <div className={`grid grid-cols-1 ${gridClass} gap-4`}>
          {items.map((article, index) => (
            <Card
              key={index}
              article={ article}
              locale={locale}
            />
          ))}
        </div>
      </>
    );
}


