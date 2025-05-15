
const SubscribeSection = () => {
  return (
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
  );
};

export default SubscribeSection;
