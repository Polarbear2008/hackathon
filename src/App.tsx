import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Season1 from "./pages/Season1";
import Season2 from "./pages/Season2";
import Mentors from "./pages/Mentors";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Winners from "./pages/Winners";
import Gallery from "./pages/Gallery";
import Timeline from "./pages/Timeline";
import FAQ from "./pages/FAQ";
import Tracks from "./pages/Tracks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/season1" element={<Season1 />} />
          <Route path="/season1/winners" element={<Winners />} />
          <Route path="/season1/gallery" element={<Gallery />} />
          <Route path="/season2" element={<Season2 />} />
          <Route path="/season2/tracks" element={<Tracks />} />
          <Route path="/season2/timeline" element={<Timeline />} />
          <Route path="/season2/faq" element={<FAQ />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
