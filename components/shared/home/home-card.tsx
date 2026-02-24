import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type CardItem = {
  title: string;
  link: { text: string; href: string };
  items: {
    name: string;
    items?: string[];
    image: string;
    href: string;
  }[];
};

export function HomeCard({ cards }: { cards: CardItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:gap-4">
      {cards.map((card) => (
        <Card key={card.title} className="rounded-none flex flex-col">
          <CardContent className="p-4 flex-1">
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {card.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col p-1 gap-1 bg-gray-50"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    height={100}
                    width={120}
                    priority
                  />
                  <p className="text-center text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis mt-2">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </CardContent>
          {card.link && (
            <CardFooter>
              <Link href={card.link.href} className="mt-4 block">
                <button className="bg-yellow-300 p-2 font-extrabold text-[13px] rounded-full hover:bg-yellow-400">
                  {card.link.text}
                </button>
              </Link>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
}
