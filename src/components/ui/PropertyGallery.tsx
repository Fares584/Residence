import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { cn } from '../../lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  
  const openFullscreen = (image: string) => {
    setFullscreenImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="mb-8">
      <div className="relative mb-2 rounded-lg overflow-hidden">
        <Swiper
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Navigation, Thumbs]}
          className="relative property-gallery-main"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[400px] md:h-[500px]">
                <img 
                  src={image} 
                  alt={`${title} - vue ${index + 1}`} 
                  className="object-cover w-full h-full"
                />
                <button 
                  onClick={() => openFullscreen(image)}
                  className="absolute p-2 text-white transition-opacity bg-black bg-opacity-50 rounded-full bottom-4 right-4 hover:bg-opacity-70"
                  aria-label="Voir en plein écran"
                >
                  <Maximize2 size={20} />
                </button>
              </div>
            </SwiperSlide>
          ))}
          
          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-3 shadow-md hover:bg-opacity-100 transition-all text-primary-700">
            <ArrowLeft size={20} />
            <span className="sr-only">Précédent</span>
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-3 shadow-md hover:bg-opacity-100 transition-all text-primary-700">
            <ArrowRight size={20} />
            <span className="sr-only">Suivant</span>
          </button>
        </Swiper>
      </div>
      
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-2 property-gallery-thumbs"
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="h-20 overflow-hidden transition-opacity rounded-md opacity-70 hover:opacity-100">
              <img 
                src={image} 
                alt={`${title} - miniature ${index + 1}`} 
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-7xl max-h-screen p-4">
            <img 
              src={fullscreenImage} 
              alt={title} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              onClick={closeFullscreen}
              className="absolute p-2 text-white bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-70"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Add missing X icon
const X = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default PropertyGallery;