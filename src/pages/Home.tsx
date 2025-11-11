import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-16">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://cdn.poehali.dev/projects/51b24ab7-ca62-4873-9d11-3f6aeb8f6d61/files/434e78be-a0f2-4dd4-9e99-bebf168e928c.jpg"
              alt="Семейное фото"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Моя Семья</h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
              Наша история, наши воспоминания, наша любовь
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/gallery">
                <Button size="lg" className="gap-2">
                  <Icon name="Image" size={20} />
                  Галерея
                </Button>
              </Link>
              <Link to="/family-tree">
                <Button size="lg" variant="outline" className="gap-2 bg-white/90 hover:bg-white">
                  <Icon name="GitBranch" size={20} />
                  Родословная
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Наша История</h3>
              <p className="text-gray-600 leading-relaxed">
                Каждая семья уникальна. Здесь мы храним наши самые дорогие моменты и воспоминания.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Camera" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Фотографии</h3>
              <p className="text-gray-600 leading-relaxed">
                От первых шагов до семейных праздников — каждый снимок рассказывает свою историю.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Поколения</h3>
              <p className="text-gray-600 leading-relaxed">
                Узнайте больше о наших корнях и семейном древе, которое растёт с каждым поколением.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Семья — это самое главное</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Мы создали этот сайт, чтобы собрать вместе наши воспоминания, 
              истории и фотографии. Здесь каждый может узнать больше о наших корнях 
              и о том, как мы стали теми, кто мы есть сегодня.
            </p>
            <Link to="/family-tree">
              <Button size="lg" className="gap-2">
                Узнать больше
                <Icon name="ArrowRight" size={20} />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
