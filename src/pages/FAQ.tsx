
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a collaborative event where programmers, designers, and other tech enthusiasts come together to build innovative solutions within a limited timeframe, typically 24-72 hours. Participants form teams, brainstorm ideas, and work intensively to create functioning prototypes that address specific challenges or themes."
    },
    {
      question: "Do I need to be an experienced programmer to participate?",
      answer: "No, hackathons are for everyone! While coding experience is helpful, we welcome participants of all skill levels. Beginners can learn from more experienced teammates, contribute to design, research, or presentations, and gain valuable hands-on experience. We also provide mentors who can help guide you through challenges."
    },
    {
      question: "How do I form a team?",
      answer: "You can either register with a pre-formed team (usually up to 4-5 members) or join as an individual and form teams at the event. We host team-building sessions at the beginning of the hackathon where you can network, pitch ideas, and find teammates with complementary skills. We also provide online platforms for team formation before the event."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "You should bring your laptop, charger, any hardware you plan to use for your project, comfortable clothes, toiletries, and any medications you need. For in-person events that run overnight, consider bringing a sleeping bag or blanket, pillow, and a change of clothes."
    },
    {
      question: "Is there a fee to participate?",
      answer: "Our hackathon is completely free for all participants. We believe in providing equal opportunities for everyone to showcase their talents and learn new skills without financial barriers."
    },
    {
      question: "What kind of projects can I work on?",
      answer: "You can work on any project that fits within our hackathon themes or tracks. These typically include web/mobile applications, hardware projects, AI/ML solutions, blockchain applications, and more. The only requirement is that the core development must happen during the hackathon period."
    },
    {
      question: "Who owns the intellectual property of the projects?",
      answer: "You and your team retain full ownership of everything you build at the hackathon. However, to be eligible for prizes, you'll typically need to make your code repository public and open-source during judging."
    },
    {
      question: "Will there be food and refreshments?",
      answer: "Yes, for in-person events, we provide meals, snacks, and beverages throughout the hackathon to keep you fueled and focused on your project. We accommodate dietary restrictions when notified in advance."
    },
    {
      question: "How are projects judged?",
      answer: "Projects are evaluated by a panel of judges based on criteria such as innovation, technical complexity, design/user experience, practicality/usefulness, and presentation quality. Each track may also have specific criteria relevant to its focus area."
    },
    {
      question: "I'm not a technical person. Can I still participate?",
      answer: "Absolutely! Hackathons benefit from diverse skills including design, business development, project management, and domain expertise. Non-technical participants often provide valuable insights that make projects more user-friendly and commercially viable."
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
          Frequently Asked Questions
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Common Questions</h2>
            <p className="text-white/80 mb-4">
              Find answers to the most common questions about our hackathon events. 
              If you don't see your question answered here, feel free to reach out to us through the contact page.
            </p>
          </motion.div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-white hover:text-hackathon-cyan transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 py-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto mt-12 bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Still Have Questions?</h2>
          <p className="text-white/80 mb-4">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out to our team.
            We're here to help make your hackathon experience as smooth and enjoyable as possible.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="bg-hackathon-purple hover:bg-hackathon-cyan text-white px-6 py-2 rounded-full transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default FAQ;
