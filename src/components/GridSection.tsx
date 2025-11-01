
import Card from "./Card";

export default async function GridSection({ title, cols, items, color }: {
    title: string;
    cols: number;
    items: string[];
    color?: string;
}) {
    return (
      <>
        {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
        <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-4`}>
          {items.map((label, index) => (
            <Card
              key={index}
              article={{ title: label, section: label }}
            />
          ))}
        </div>
      </>
    );
}


