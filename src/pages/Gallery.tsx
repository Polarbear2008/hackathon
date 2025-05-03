
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const photos = [
    {
      id: 1,
      title: "Opening Ceremony",
      description: "Participants gathering for the kickoff event",
      url: "/season1/gallery/opening_ceremony.jpg",
    },
    {
      id: 2,
      title: "Coding Marathon",
      description: "Teams working through the night",
      url: "/season1/gallery/coding_marathon.jpg",
    },
    {
      id: 3,
      title: "Workshop Session",
      description: "Learning new technologies from industry experts",
      url: "/season1/gallery/workshop_session.jpg",
    },
    {
      id: 4,
      title: "Brainstorming",
      description: "Teams collaborating and generating ideas",
      url: "/season1/gallery/brainstorming.jpg",
    },
    {
      id: 5,
      title: "Presentation Time",
      description: "Teams presenting their final projects to judges",
      url: "/season1/gallery/presentation_time.jpg",
    },
    {
      id: 6,
      title: "Award Ceremony",
      description: "Celebrating the winners and all participants",
      url: "/season1/gallery/award_ceremony.jpg",
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
          Photo Gallery
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div 
            className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Season 1 Memories</h2>
            <p className="text-white/80 mb-4">
              Relive the excitement, energy, and innovation of our Season 1 Hackathon through this collection 
              of photographs. From the opening ceremony to the final presentations, these images capture the 
              spirit of collaboration and creativity that defined our event.
            </p>
          </motion.div>
        </div>

        <div className="mb-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {photos.map((photo) => (
                <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-1"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="overflow-hidden rounded-xl border border-white/10">
                      <img 
                        src={photo.url} 
                        alt={photo.title} 
                        className="w-full h-[300px] object-cover object-center transition-transform hover:scale-110 duration-700"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = '/season1/gallery/placeholder.jpg';
                        }}
                      />
                      <div className="p-3 bg-hackathon-navy/70">
                        <h3 className="text-hackathon-cyan font-medium">{photo.title}</h3>
                        <p className="text-white/70 text-sm">{photo.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-8 bg-hackathon-purple/20 border-hackathon-purple/50 text-white hover:bg-hackathon-purple/40" />
            <CarouselNext className="-right-8 bg-hackathon-purple/20 border-hackathon-purple/50 text-white hover:bg-hackathon-purple/40" />
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative overflow-hidden rounded-lg border border-white/10 group"
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full aspect-square object-cover transition-transform group-hover:scale-110 duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-medium">{photo.title}</h3>
                <p className="text-white/70 text-sm">{photo.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Gallery;
