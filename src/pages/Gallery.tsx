import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/51b24ab7-ca62-4873-9d11-3f6aeb8f6d61/files/5834f2cc-111d-4a01-974b-f151ddaacd95.jpg',
      title: 'Семейный отдых',
      year: '2024',
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/51b24ab7-ca62-4873-9d11-3f6aeb8f6d61/files/434e78be-a0f2-4dd4-9e99-bebf168e928c.jpg',
      title: 'Семейный портрет',
      year: '2024',
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/51b24ab7-ca62-4873-9d11-3f6aeb8f6d61/files/615124fa-5fb8-4145-aad4-315571d1dbdb.jpg',
      title: 'Генеалогия',
      year: '2023',
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/projects/51b24ab7-ca62-4873-9d11-3f6aeb8f6d61/files/434e78be-a0f2-4dd4-9e99-bebf168e928c.jpg',
      title: 'День рождения',
      year: '2023',
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/projects/51b24ab7-ca62-4873-9d11-3f6aeb8f6d61/files/5834f2cc-111d-4a01-974b-f151ddaacd95.jpg',
      title: 'Праздник',
      year: '2022',
    },
    {
      id: 6,
      url: 'https://cdn.poehali.dev/projects/51b24ab7-ca62-4873-9d11-3f6aeb8f6d61/files/615124fa-5fb8-4145-aad4-315571d1dbdb.jpg',
      title: 'Воспоминания',
      year: '2022',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Галерея</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наши самые яркие моменты, запечатлённые навсегда
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-fade-in hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{photo.title}</h3>
                  <p className="text-sm text-gray-200">{photo.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={photos[selectedImage].url}
                alt={photos[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-2xl font-semibold mb-2">{photos[selectedImage].title}</h3>
                <p className="text-gray-200">{photos[selectedImage].year}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
