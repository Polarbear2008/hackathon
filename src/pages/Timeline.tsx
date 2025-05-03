
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Check, ArrowRight } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      date: "January 15, 2024",
      title: "Hackathon Announced",
      description: "Official announcement of Season 1 with theme and tracks revealed.",
      icon: <Calendar className="w-6 h-6" />,
      completed: true,
    },
    {
      date: "February 1, 2024",
      title: "Registration Opened",
      description: "Teams started to register for the event with early bird perks.",
      icon: <ArrowRight className="w-6 h-6" />,
      completed: true,
    },
    {
      date: "February 28, 2024",
      title: "Team Formation Deadline",
      description: "Final date for participants to form teams and finalize registrations.",
      icon: <Clock className="w-6 h-6" />,
      completed: true,
    },
    {
      date: "March 10-12, 2024",
      title: "Hackathon Weekend",
      description: "The main event with 48 hours of coding, workshops, and mentorship.",
      icon: <Clock className="w-6 h-6" />,
      completed: true,
    },
    {
      date: "March 12, 2024",
      title: "Project Submissions",
      description: "All teams submitted their projects for evaluation.",
      icon: <Check className="w-6 h-6" />,
      completed: true,
    },
    {
      date: "March 20, 2024",
      title: "Winners Announced",
      description: "The judging panel selected and announced the winning teams across all tracks.",
      icon: <Check className="w-6 h-6" />,
      completed: true,
    },
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
          Event Timeline
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div 
            className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Season 1 Journey</h2>
            <p className="text-white/80 mb-4">
              From the initial announcement to the final awards ceremony, our Season 1 Hackathon was a journey of 
              innovation, learning, and growth. Explore the key milestones that made this event a success.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-hackathon-purple via-hackathon-cyan to-hackathon-purple hidden md:block"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.title}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-full p-2 z-10">
                  <div className="bg-hackathon-purple/20 text-hackathon-purple rounded-full p-2">
                    {event.icon}
                  </div>
                </div>
                
                <div className="flex-grow bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
                    <h3 className="text-xl font-bold text-hackathon-cyan">{event.title}</h3>
                    <div className="bg-hackathon-purple/20 text-hackathon-purple text-sm rounded-full px-3 py-1 mt-2 md:mt-0">
                      {event.date}
                    </div>
                  </div>
                  <p className="text-white/80">{event.description}</p>
                  
                  {event.completed && (
                    <div className="flex items-center gap-2 mt-3 text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  )}
                </div>
              </div>
              
              {index < timelineEvents.length - 1 && <Separator className="my-8 bg-hackathon-purple/20" />}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto mt-12 bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Looking Ahead</h2>
          <p className="text-white/80">
            Building on the success of Season 1, we're already planning for an even bigger and better Season 2. 
            Stay tuned for announcements about dates, themes, and new features that will make our next hackathon 
            an unforgettable experience.
          </p>
          <div className="mt-4 flex justify-center">
            <a href="/season2" className="bg-hackathon-purple hover:bg-hackathon-cyan text-white px-6 py-2 rounded-full transition-colors duration-300 flex items-center gap-2">
              <span>Season 2 Preview</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Timeline;
