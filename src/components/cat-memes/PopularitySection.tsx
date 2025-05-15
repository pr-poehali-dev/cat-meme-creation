
import Icon from "@/components/ui/icon";
import { popularityReasonsData } from "@/data/cat-memes-data";

const PopularitySection = () => {
  return (
    <section id="popularity" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-10 font-montserrat">
        Почему котики стали королями интернета?
      </h2>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 font-open-sans text-lg">
        Существует несколько научных и культурных причин, почему именно котики, а не 
        какие-либо другие животные, стали доминировать в интернет-пространстве.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {popularityReasonsData.map((reason) => (
          <div key={reason.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Icon name={reason.icon} className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-800 font-montserrat">{reason.title}</h3>
            <p className="text-gray-700 font-open-sans">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularitySection;
