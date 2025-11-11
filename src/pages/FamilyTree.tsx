import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const FamilyTree = () => {
  const generations = [
    {
      generation: 'Прадедушки и прабабушки',
      members: [
        { name: 'Иван Петрович', years: '1920-1995', role: 'Прадедушка' },
        { name: 'Мария Ивановна', years: '1922-2000', role: 'Прабабушка' },
      ],
    },
    {
      generation: 'Дедушки и бабушки',
      members: [
        { name: 'Пётр Иванович', years: '1945-2015', role: 'Дедушка' },
        { name: 'Анна Сергеевна', years: '1948', role: 'Бабушка' },
        { name: 'Николай Алексеевич', years: '1947', role: 'Дедушка' },
        { name: 'Елена Васильевна', years: '1950', role: 'Бабушка' },
      ],
    },
    {
      generation: 'Родители',
      members: [
        { name: 'Алексей Петрович', years: '1970', role: 'Отец' },
        { name: 'Ольга Николаевна', years: '1972', role: 'Мать' },
      ],
    },
    {
      generation: 'Дети',
      members: [
        { name: 'Дмитрий Алексеевич', years: '1995', role: 'Сын' },
        { name: 'Екатерина Алексеевна', years: '1998', role: 'Дочь' },
        { name: 'Михаил Алексеевич', years: '2005', role: 'Сын' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Родословная</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наше семейное древо — история поколений
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/10 hidden lg:block" />

          {generations.map((gen, genIndex) => (
            <div key={genIndex} className="mb-20 animate-fade-in" style={{ animationDelay: `${genIndex * 0.15}s` }}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full">
                  <Icon name="Users" size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-primary">{gen.generation}</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gen.members.map((member, memberIndex) => (
                  <Card
                    key={memberIndex}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon name="User" size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Icon name="Calendar" size={16} />
                            {member.years}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {genIndex < generations.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent lg:hidden" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12 animate-fade-in">
          <Icon name="Heart" size={48} className="text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Наша семья продолжается</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждое поколение добавляет новую страницу в историю нашей семьи. 
            Мы гордимся нашими корнями и с надеждой смотрим в будущее.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
