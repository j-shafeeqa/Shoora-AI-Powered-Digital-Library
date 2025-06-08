
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface BookCardProps {
  title: string;
  author: string;
  year: string;
  coverImage: string;
  index: number;
}

const BookCard = ({ title, author, year, coverImage, index }: BookCardProps) => {
  // Handle image error by providing a fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/placeholder.svg';
    e.currentTarget.className = e.currentTarget.className + ' bg-gray-100';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col"
    >
      <div className="relative aspect-[3/4] rounded-md overflow-hidden shadow-md mb-3 hover:shadow-lg transition-shadow duration-300">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
      <h4 className="font-semibold text-sm line-clamp-2">{title}</h4>
      <p className="text-sm text-gray-600">{author}</p>
      <p className="text-xs text-gray-500">{year}</p>
    </motion.div>
  );
};

export default BookCard;
