import React from 'react';
import { Testimonial as TestimonialType } from '../../lib/types';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  testimonial: TestimonialType;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  const { name, role, content, rating, image } = testimonial;
  
  const renderRating = () => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-beige-500 fill-beige-500' : 'text-gray-300'}
      />
    ));
  };
  
  return (
    <motion.div 
      className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4 space-x-1">
        {renderRating()}
      </div>
      
      <blockquote className="flex-grow mb-4">
        <p className="text-gray-600 italic">"{content}"</p>
      </blockquote>
      
      <div className="flex items-center mt-auto">
        {image ? (
          <img
            src={image}
            alt={name}
            className="object-cover w-10 h-10 mr-3 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-10 h-10 mr-3 text-white bg-primary-600 rounded-full">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;