
import React from 'react';

type ImageShowcaseProps = {
  title: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'grid' | 'banner';
};

const ImageShowcase = ({ 
  title, 
  description, 
  className = '', 
  variant = 'default' 
}: ImageShowcaseProps) => {
  // Sample images that can be used in the showcase
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      alt: "A round fruit on a wooden plate",
      caption: "Sustainable products from natural sources"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      alt: "Two deer in a natural landscape",
      caption: "Supporting wildlife conservation efforts"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      alt: "A modern living room with furniture",
      caption: "Creating human-centric spaces for better living"
    },
  ];

  if (variant === 'grid') {
    return (
      <section className={`py-12 ${className}`}>
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {description && <p className="text-gray-600">{description}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map(image => (
              <div key={image.id} className="group overflow-hidden rounded-lg shadow-subtle">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (variant === 'banner') {
    // Use the first image as a banner
    const bannerImage = images[0];
    
    return (
      <section className={`py-12 ${className}`}>
        <div className="page-container">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="aspect-[21/9] w-full">
              <img 
                src={bannerImage.src} 
                alt={bannerImage.alt} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">{title}</h2>
                {description && <p className="text-gray-100 max-w-xl">{description}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Default variant with a simple image + text layout
  return (
    <section className={`py-12 ${className}`}>
      <div className="page-container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src={images[2].src} 
                alt={images[2].alt} 
                className="w-full rounded-lg shadow-subtle"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              {description && <p className="text-gray-600 mb-6">{description}</p>}
              <p className="text-gray-700">
                Through thoughtful design and innovative technology, we're building a future that respects human needs and potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
