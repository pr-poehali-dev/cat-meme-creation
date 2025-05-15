
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { catMemesData } from "@/data/cat-memes-data";

const MemesGallery = () => {
  return (
    <section id="gallery" className="container mx-auto px-4 py-16 bg-white rounded-3xl shadow-xl mb-16">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-10 font-montserrat">
        Легендарные мемы с котиками
      </h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 font-open-sans text-lg">
        Эти котики стали настоящими легендами интернета. Их выражения морды и ситуации 
        превратились в универсальный язык, понятный каждому пользователю сети.
      </p>

      <div className="py-6">
        <Carousel>
          <CarouselContent>
            {catMemesData.map((meme) => (
              <CarouselItem key={meme.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={meme.image} 
                        alt={meme.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-purple-800 font-montserrat">{meme.title}</h3>
                      <p className="text-gray-700 font-open-sans">{meme.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default MemesGallery;
