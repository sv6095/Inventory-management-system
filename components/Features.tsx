import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';

const Features = () => {
  const features = [
    {
      title: "Split-Shipment Reduction",
      description: "Reduce split-shipments by 5-10% through intelligent inventory allocation",
      icon: "🚛",
      stats: "5-10% improvement"
    },
    {
      title: "Inventory Management",
      description: "Centralized inventory management with real-time visibility across locations",
      icon: "📦",
      stats: "100% visibility"
    },
    {
      title: "Inventory Mirroring",
      description: "Equal distribution across multiple fulfillment centers for optimal coverage",
      icon: "🔄",
      stats: "25% per location"
    },
    {
      title: "Pick Time Optimization",
      description: "Reduce picking time through optimized warehouse layouts",
      icon: "⏳",
      stats: "5-20% faster"
    },
    {
      title: "Stock Allocation",
      description: "AI-powered stock allocation using linear programming",
      icon: "📊",
      stats: "15% efficiency gain"
    }
  ];

  return (
    <SectionWrapper id="features">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl backdrop-blur-lg bg-white/5 hover:bg-white/10 
                        border border-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="text-purple-400 font-semibold">{feature.stats}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
