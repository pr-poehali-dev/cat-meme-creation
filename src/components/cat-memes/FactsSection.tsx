
import Icon from "@/components/ui/icon";

const FactsSection = () => {
  return (
    <section id="facts" className="container mx-auto px-4 py-16 bg-purple-700 text-white rounded-3xl shadow-xl my-16">
      <h2 className="text-3xl font-bold text-center mb-10 font-montserrat">
        Интересные факты о мемах с котиками
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <FactCard 
          title="Мем-экономика" 
          description="Известные кошки-мемы, такие как Grumpy Cat, заработали миллионы долларов на мерчандайзе и рекламных контрактах."
        />
        <FactCard 
          title="Исторический прецедент" 
          description="Первые мемы с котиками появились задолго до интернета — еще в начале 20 века на открытках."
        />
        <FactCard 
          title="Терапевтический эффект" 
          description="Исследования показывают, что просмотр мемов с котиками снижает уровень стресса и улучшает настроение."
        />
        <FactCard 
          title="Музейные экспонаты" 
          description="Некоторые известные мемы с котиками были выставлены в современных художественных музеях как часть поп-культуры."
        />
      </div>
    </section>
  );
};

interface FactCardProps {
  title: string;
  description: string;
}

const FactCard = ({ title, description }: FactCardProps) => {
  return (
    <div className="bg-purple-800/40 p-6 rounded-xl backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-3 font-montserrat flex items-center gap-2">
        <Icon name="Star" className="h-5 w-5 text-yellow-300" />
        {title}
      </h3>
      <p className="font-open-sans">{description}</p>
    </div>
  );
};

export default FactsSection;
