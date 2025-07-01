import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import HomePage from "./pages/HomePage";
import SchoolPage from "./pages/SchoolPage";
import WeddingsGallery from "./album/WeddingsGallery";
import CorporatesGallery from "./album/CorporatesGallery";
import EventsGallery from "./album/EventsGallery";
import GraphicsGallery from "./album/GraphicsGallery";
import HotelsGallery from "./album/HotelsGallery";
import ProductsGallery from "./album/ProductsGallery";
import RealEstatesGallery from "./album/RealEstatesGallery";
import WildlifeGallery from "./album/WildlifeGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Routes>
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery/weddings" element={<WeddingsGallery />} />
          <Route path="/gallery/corporates" element={<CorporatesGallery />} />
          <Route path="/gallery/events" element={<EventsGallery />} />
          <Route path="/gallery/graphics" element={<GraphicsGallery />} />
          <Route path="/gallery/hotels" element={<HotelsGallery />} />
          <Route path="/gallery/products" element={<ProductsGallery />} />
          <Route path="/gallery/realestates" element={<RealEstatesGallery />} />
          <Route path="/gallery/wildlife" element={<WildlifeGallery />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
