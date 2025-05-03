import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
const Season1 = () => {
  return <Layout>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
          Season 1 Recap
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <motion.div className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }}>
            <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">About Season 1</h2>
            <p className="text-white/80 mb-4">Our first BPS Hackathon gathered 8 teams from across Uzbekistan for 2 days of intense innovation. Participants worked on startup ideas, received mentorship from industry experts, and competed for exciting prizes.</p>
            <p className="text-white/80">Season 1 featured expert workshops, team-building, and startup networking — setting the stage for future founders to rise!</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.4
          }}>
              <h2 className="text-xl font-bold mb-4 text-hackathon-cyan">Highlights</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>2 days non-stop coding marathon</li>
                <li>6  mentors providing guidance</li>
                <li>Workshops on cutting-edge technologies</li>
                <li>Participants from all regions</li>
                <li>Unique projects are submitted</li>
              </ul>
            </motion.div>
            
            <motion.div className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.5
          }}>
              <h2 className="text-xl font-bold mb-4 text-hackathon-cyan">Top Categories</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>AI & Machine Learning</li>
                <li>Web3 & Blockchain</li>
                <li>Climate Tech</li>
                <li>Healthcare Solutions</li>
                <li>Educational Technology</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Layout>;
};
export default Season1;