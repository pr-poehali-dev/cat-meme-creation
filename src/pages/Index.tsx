
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const catMemes = [
  {
    id: 1,
    title: "Грустный кот",
    description: "Знаменитый мем с белым котом, сидящим за столом, который стал символом уныния и разочарования",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    title: "Кот в шоке",
    description: "Удивленный кот с широко открытыми глазами, который идеально передает состояние шока и удивления",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 3,
    title: "Недовольный кот",
    description: "Сердитый кот Grumpy Cat, ставший одним из самых узнаваемых мемов в интернете",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 4,
    title: "Кот в полете",
    description: "Мем с Длиннокотом, который стал синонимом бесконечного потенциала и возможностей",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 5,
    title: "Кот-бизнесмен",
    description: "Серьезный кот в галстуке, который символизирует деловой настрой и профессионализм",
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300"
  },
];

const popularityReasons = [
  {
    id: 1,
    title: "Универсальность эмоций",
    description: "Коты выражают широкий спектр эмоций, с которыми легко соотносит себя каждый человек.",
    icon: "Heart"
  },
  {
    id: 2,
    title: "Визуальная привлекательность",
    description: "Коты фотогеничны и их выразительные морды легко становятся вирусными изображениями.",
    icon: "Image"
  },
  {
    id: 3,
    title: "Непредсказуемость",
    description: "Поведение котов часто непредсказуемо и забавно, что делает их идеальными героями мемов.",
    icon: "Lightbulb"
  },
  {
    id: 4,
    title: "Легкость восприятия",
    description: "Котики преодолевают языковые и культурные барьеры, их понимает каждый.",
    icon: "Globe"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Шапка */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Cat" className="h-8 w-8 text-purple-600" />
          <h1 className="text-2xl font-bold text-purple-800 font-montserrat">МемоКоты</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-700 font-open-sans">
          <a href="#gallery" className="hover:text-purple-600 transition-colors">Галерея</a>
          <a href="#popularity" className="hover:text-purple-600 transition-colors">Почему популярны</a>
          <a href="#facts" className="hover:text-purple-600 transition-colors">Интересные факты</a>
        </nav>
        <button className="md:hidden">
          <Icon name="Menu" className="h-6 w-6 text-gray-700" />
        </button>
      </header>

      {/* Героическая секция */}
      <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 font-montserrat leading-tight">
            Почему мемы с котиками правят интернетом?
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-open-sans">
            От Грустного Кота до Длиннокота — котики завоевали все платформы и стали неотъемлемой частью 
            интернет-культуры. Узнайте, как простые фотографии питомцев превратились в глобальный феномен.
          </p>
          <div className="flex gap-4">
            <a href="#gallery" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200 inline-flex items-center gap-2">
              <Icon name="Image" className="h-5 w-5" />
              Смотреть мемы
            </a>
            <a href="#popularity" className="px-6 py-3 bg-white hover:bg-gray-100 text-purple-600 font-medium rounded-lg border border-purple-200 transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2">
              <Icon name="Info" className="h-5 w-5" />
              Почему популярны
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=500&q=80" 
            alt="Главный кот" 
            className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
          />
        </div>
      </section>

      {/* Галерея мемов */}
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
              {catMemes.map((meme) => (
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

      {/* Почему популярны */}
      <section id="popularity" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10 font-montserrat">
          Почему котики стали королями интернета?
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 font-open-sans text-lg">
          Существует несколько научных и культурных причин, почему именно котики, а не 
          какие-либо другие животные, стали доминировать в интернет-пространстве.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularityReasons.map((reason) => (
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

      {/* Интересные факты */}
      <section id="facts" className="container mx-auto px-4 py-16 bg-purple-700 text-white rounded-3xl shadow-xl my-16">
        <h2 className="text-3xl font-bold text-center mb-10 font-montserrat">
          Интересные факты о мемах с котиками
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-purple-800/40 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-montserrat flex items-center gap-2">
              <Icon name="Star" className="h-5 w-5 text-yellow-300" />
              Мем-экономика
            </h3>
            <p className="font-open-sans">
              Известные кошки-мемы, такие как Grumpy Cat, заработали миллионы долларов на мерчандайзе и рекламных контрактах.
            </p>
          </div>

          <div className="bg-purple-800/40 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-montserrat flex items-center gap-2">
              <Icon name="Star" className="h-5 w-5 text-yellow-300" />
              Исторический прецедент
            </h3>
            <p className="font-open-sans">
              Первые мемы с котиками появились задолго до интернета — еще в начале 20 века на открытках.
            </p>
          </div>

          <div className="bg-purple-800/40 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-montserrat flex items-center gap-2">
              <Icon name="Star" className="h-5 w-5 text-yellow-300" />
              Терапевтический эффект
            </h3>
            <p className="font-open-sans">
              Исследования показывают, что просмотр мемов с котиками снижает уровень стресса и улучшает настроение.
            </p>
          </div>

          <div className="bg-purple-800/40 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3 font-montserrat flex items-center gap-2">
              <Icon name="Star" className="h-5 w-5 text-yellow-300" />
              Музейные экспонаты
            </h3>
            <p className="font-open-sans">
              Некоторые известные мемы с котиками были выставлены в современных художественных музеях как часть поп-культуры.
            </p>
          </div>
        </div>
      </section>

      {/* Подписка */}
      <section className="container mx-auto px-4 py-16 mb-16 flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-xl">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-purple-800 mb-4 font-montserrat">
            Хотите больше котиков?
          </h2>
          <p className="text-gray-700 mb-6 font-open-sans">
            Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых мемах с котиками и интересных фактах о них.
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
              Подписаться
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1574144113084-b6f450cc5e0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&h=300" 
            alt="Подписка на котиков" 
            className="rounded-xl shadow-lg h-[250px] object-cover"
          />
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Icon name="Cat" className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold font-montserrat">МемоКоты</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Twitter" className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Icon name="Youtube" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 my-8"></div>
          <div className="text-center text-gray-400 font-open-sans">
            <p>&copy; 2025 МемоКоты. Все права защищены.</p>
            <p className="mt-2">Созданно с любовью к котикам и интернет-культуре.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
