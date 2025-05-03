
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { ExternalLink } from "lucide-react";

const Sponsors = () => {
  const tiers = [
    {
      name: "Platinum",
      sponsors: [
        { name: "TechGiant", logo: "https://placehold.co/200x100/1A1F2C/9b87f5?text=TechGiant", url: "#" },
        { name: "InnovateCorp", logo: "https://placehold.co/200x100/1A1F2C/9b87f5?text=InnovateCorp", url: "#" }
      ]
    },
    {
      name: "Gold",
      sponsors: [
        { name: "DevStudio", logo: "https://placehold.co/180x90/1A1F2C/7E69AB?text=DevStudio", url: "#" },
        { name: "CloudSys", logo: "https://placehold.co/180x90/1A1F2C/7E69AB?text=CloudSys", url: "#" },
        { name: "CodeHub", logo: "https://placehold.co/180x90/1A1F2C/7E69AB?text=CodeHub", url: "#" }
      ]
    },
    {
      name: "Silver",
      sponsors: [
        { name: "DataFlow", logo: "https://placehold.co/150x75/1A1F2C/6E59A5?text=DataFlow", url: "#" },
        { name: "AILabs", logo: "https://placehold.co/150x75/1A1F2C/6E59A5?text=AILabs", url: "#" },
        { name: "WebWorks", logo: "https://placehold.co/150x75/1A1F2C/6E59A5?text=WebWorks", url: "#" },
        { name: "TechLearn", logo: "https://placehold.co/150x75/1A1F2C/6E59A5?text=TechLearn", url: "#" }
      ]
    }
  ];

  const benefits = [
    {
      tier: "Platinum",
      price: "$10,000",
      benefits: [
        "Premium logo placement on all event materials",
        "Dedicated booth at the event",
        "5-minute presentation to all participants",
        "First access to participants' resumes",
        "Exclusive workshop session",
        "Social media promotion (5 dedicated posts)",
        "Logo on event t-shirts"
      ]
    },
    {
      tier: "Gold",
      price: "$5,000",
      benefits: [
        "Logo placement on event website and materials",
        "Shared booth at the event",
        "3-minute presentation to all participants",
        "Access to participants' resumes",
        "Social media promotion (3 dedicated posts)",
        "Logo on event t-shirts"
      ]
    },
    {
      tier: "Silver",
      price: "$2,500",
      benefits: [
        "Logo placement on event website",
        "Table display at the event",
        "Access to participants' resumes",
        "Social media mention (1 dedicated post)",
        "Logo on digital materials"
      ]
    }
  ];

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-24 pb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
          Our Sponsors
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div 
            className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/80">
              Our hackathon wouldn't be possible without the generous support of our sponsors. 
              These organizations are not just funding the event but are also committed to fostering innovation, 
              supporting new talent, and engaging with the tech community.
            </p>
          </motion.div>
        </div>
        
        {tiers.map((tier, tierIndex) => (
          <motion.div 
            key={tier.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + tierIndex * 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className={`
                ${tier.name === 'Platinum' ? 'text-hackathon-purple' : ''}
                ${tier.name === 'Gold' ? 'text-yellow-400' : ''}
                ${tier.name === 'Silver' ? 'text-gray-300' : ''}
              `}>{tier.name}</span> Sponsors
            </h2>
            
            <div className={`grid gap-8 justify-items-center ${
              tier.name === 'Platinum' ? 'grid-cols-1 md:grid-cols-2' : 
              tier.name === 'Gold' ? 'grid-cols-1 md:grid-cols-3' : 
              'grid-cols-2 md:grid-cols-4'
            }`}>
              {tier.sponsors.map((sponsor) => (
                <motion.a
                  key={sponsor.name}
                  href={sponsor.url}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-hackathon-navy/50 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center group"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="mb-3" 
                  />
                  <div className="flex items-center text-white group-hover:text-hackathon-cyan transition-colors">
                    <span>{sponsor.name}</span>
                    <ExternalLink size={14} className="ml-1" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-hackathon-cyan">Sponsorship Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((tier) => (
              <motion.div
                key={tier.tier}
                whileHover={{ translateY: -5 }}
                className={`
                  bg-hackathon-navy/30 backdrop-blur-md border rounded-xl overflow-hidden
                  ${tier.tier === 'Platinum' ? 'border-hackathon-purple' : ''}
                  ${tier.tier === 'Gold' ? 'border-yellow-400' : ''}
                  ${tier.tier === 'Silver' ? 'border-gray-300' : ''}
                `}
              >
                <div className={`
                  py-4 text-center font-bold text-xl
                  ${tier.tier === 'Platinum' ? 'bg-hackathon-purple/20 text-hackathon-purple' : ''}
                  ${tier.tier === 'Gold' ? 'bg-yellow-400/20 text-yellow-400' : ''}
                  ${tier.tier === 'Silver' ? 'bg-gray-300/20 text-gray-300' : ''}
                `}>
                  {tier.tier}
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-white">{tier.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className={`
                          h-5 w-5 mr-2 mt-0.5
                          ${tier.tier === 'Platinum' ? 'text-hackathon-purple' : ''}
                          ${tier.tier === 'Gold' ? 'text-yellow-400' : ''}
                          ${tier.tier === 'Silver' ? 'text-gray-300' : ''}
                        `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-white/80 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 text-center">
                  <button className={`
                    px-6 py-2 rounded-md transition-colors text-white
                    ${tier.tier === 'Platinum' ? 'bg-hackathon-purple hover:bg-opacity-80' : ''}
                    ${tier.tier === 'Gold' ? 'bg-yellow-400 hover:bg-opacity-80' : ''}
                    ${tier.tier === 'Silver' ? 'bg-gray-300 hover:bg-opacity-80 text-gray-800' : ''}
                  `}>
                    Contact Us
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Sponsors;
