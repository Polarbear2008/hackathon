import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email to numonovsamandarferps@gmail.com
    const emailData = {
      to: "numonovsamandarferps@gmail.com",
      from: formData.email,
      subject: formData.subject,
      message: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    };

    // Simulate sending email
    fetch('https://api.example.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      return response.json();
    })
    .catch(error => {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
      throw error;
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!"
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
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
          Contact Us
        </h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3
          }}>
              <h2 className="text-2xl font-bold mb-6 text-hackathon-purple">Get in Touch</h2>
              <p className="text-white/80 mb-8">
                Have questions about the hackathon? Want to become a sponsor? 
                Or just want to say hello? Reach out to us using the form or 
                through our contact information.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-hackathon-purple/20 p-3 rounded-full mr-4">
                    <Mail className="text-hackathon-purple w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Email</h3>
                    <a href="mailto:numonovsamandarferps@gmail.com" className="text-white/70 hover:text-hackathon-cyan transition-colors">
                      numonovsamandarferps@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hackathon-purple/20 p-3 rounded-full mr-4">
                    <Phone className="text-hackathon-purple w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Phone</h3>
                    <a href="tel:+12345678901" className="text-white/70 hover:text-hackathon-cyan transition-colors">+998 91 831 81 77</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-hackathon-purple/20 p-3 rounded-full mr-4">
                    <MapPin className="text-hackathon-purple w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Location</h3>
                    <address className="text-white/70 not-italic">
                      Bukhara Presidential School<br />
                      Bukhara, Uzbekistan
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.4
          }} className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
              {!isSubmitted ? <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full bg-hackathon-navy/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-hackathon-purple" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-hackathon-navy/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-hackathon-purple" />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-hackathon-navy/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-hackathon-purple">
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Mentorship">Mentorship</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-hackathon-navy/50 border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-hackathon-purple" />
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className={`w-full py-2 rounded-md font-medium ${isSubmitting ? 'bg-gray-400 text-gray-800 cursor-not-allowed' : 'bg-hackathon-purple hover:bg-hackathon-cyan text-white transition-colors'}`}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form> : <div className="h-full flex flex-col items-center justify-center py-12">
                  <div className="text-hackathon-purple mb-4">
                    <CheckCircle size={64} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-white/80 text-center">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                </div>}
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }} className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-hackathon-purple">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[{
              q: "When is the next hackathon?",
              a: "Our next hackathon, Season 2, is scheduled for May 20-22, 2025. Registration opens on April 15, 2025."
            }, {
              q: "How can I participate?",
              a: "Anyone can participate! Register on our website once registration opens, and you'll receive all the necessary information."
            }, {
              q: "Do I need to have a team?",
              a: "You can join as an individual or with a team. We'll have team formation activities to help solo participants find teammates."
            }, {
              q: "How much does it cost to participate?",
              a: "Thanks to our sponsors, participation in the hackathon is completely free."
            }].map((faq, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.7 + index * 0.1
            }} className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-white/70">{faq.a}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>;
};
export default Contact;