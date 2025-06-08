
import { motion } from 'framer-motion';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Book, FileText, Scale, Gavel, Landmark, Building2, Sprout, Briefcase, Users, Shield } from 'lucide-react';

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  index: number;
  description?: string;
}

const TopicCard = ({ icon, title, index, description }: TopicCardProps) => {
  // Function to get appropriate icon based on title
  const getIcon = () => {
    const titleLower = title.toLowerCase();
    
    if (titleLower.includes('administrative')) return <Landmark className="w-6 h-6" />;
    if (titleLower.includes('agricultural')) return <Sprout className="w-6 h-6" />;
    if (titleLower.includes('dispute resolution')) return <Scale className="w-6 h-6" />;
    if (titleLower.includes('antitrust')) return <Shield className="w-6 h-6" />;
    if (titleLower.includes('banking')) return <Building2 className="w-6 h-6" />;
    if (titleLower.includes('constitutional')) return <Landmark className="w-6 h-6" />;
    if (titleLower.includes('contract')) return <FileText className="w-6 h-6" />;
    if (titleLower.includes('corporate')) return <Briefcase className="w-6 h-6" />;
    
    // Default icon
    return <Book className="w-6 h-6" />;
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-shoora-gold hover:bg-gradient-to-br from-white to-shoora-gold/5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="bg-shoora-gold/20 p-3 rounded-full text-shoora-gold flex items-center justify-center shadow-inner">
              {typeof icon === 'string' && icon.startsWith('/lovable-uploads/') ? (
                <img src={icon} alt={title} className="w-6 h-6 object-contain" />
              ) : (
                getIcon()
              )}
            </div>
            <div>
              <span className="font-medium text-gray-800 text-base">{title}</span>
              {description && (
                <p className="text-xs text-gray-500 mt-1">{description}</p>
              )}
            </div>
          </motion.div>
        </TooltipTrigger>
        {description && (
          <TooltipContent>
            <p>{description}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default TopicCard;
