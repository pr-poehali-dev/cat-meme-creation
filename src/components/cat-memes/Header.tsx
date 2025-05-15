
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
