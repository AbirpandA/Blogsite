import { motion } from "framer-motion";
import { MoreHorizontal, ArrowRight, Clock } from "lucide-react";

const HistoryCard = ({ entry }) => {
  return (
    <motion.div
      className="relative bg-white rounded-lg p-6 shadow-sm mb-6 overflow-hidden border border-gray-100"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
    >
      
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2 mb-4">
          <div className="bg-black text-white text-xs font-medium px-2.5 py-1 rounded flex items-center">
            <Clock size={12} className="mr-1" />
            <span>{entry.timeperiod}</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
          <MoreHorizontal size={18} />
        </button>
      </div>

      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{entry.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{entry.description}</p>

      
      <div className="flex justify-end mt-2">
        <motion.button
          className="flex items-center text-sm font-medium text-black"
          whileHover={{ x: 3 }}
        >
          Read More
          <ArrowRight size={16} className="ml-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HistoryCard;
