import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10">
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 font-montserrat leading-tight">
          Почему мемы с котиками правят интернетом?
        </h2>
        <p className="text-lg text-gray-700 mb-8 font-open-sans">
          От Грустного Кота до Длиннокота — котики завоевали все платформы и
          стали неотъемлемой частью интернет-культуры. Узнайте, как простые
          фотографии питомцев превратились в глобальный феномен.
        </p>
        <div className="flex gap-4">
          <a
            href="#gallery"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 inline-flex items-center gap-2"
          >
            <Icon name="Image" className="h-5 w-5" />
            Смотреть мемы
          </a>
          <a
            href="#popularity"
            className="px-6 py-3 bg-white hover:bg-gray-100 text-purple-600 font-medium rounded-lg border border-purple-200 transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <Icon name="Info" className="h-5 w-5" />
            Почему популярны
          </a>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=500&q=80"
          alt="Главный кот"
          className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
