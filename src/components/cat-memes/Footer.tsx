
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Icon name="Cat" className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold font-montserrat">МемоКоты</span>
          </div>
          <div className="flex gap-4">
            <SocialLink name="Facebook" />
            <SocialLink name="Instagram" />
            <SocialLink name="Twitter" />
            <SocialLink name="Youtube" />
          </div>
        </div>
        <div className="border-t border-gray-700 my-8"></div>
        <div className="text-center text-gray-400 font-open-sans">
          <p>&copy; 2025 МемоКоты. Все права защищены.</p>
          <p className="mt-2">Созданно с любовью к котикам и интернет-культуре.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  name: string;
}

const SocialLink = ({ name }: SocialLinkProps) => (
  <a href="#" className="hover:text-purple-400 transition-colors">
    <Icon name={name} className="h-6 w-6" />
  </a>
);

export default Footer;
