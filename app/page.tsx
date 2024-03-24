import {Services} from "@/components/Services";
import { Projects } from "@/components/Projects";
import {Testimonial} from "@/components/testimonials";
import { Hero } from "@/components/Hero";
import { GlobeView } from "@/components/globeView";
import { JoinList } from "@/components/JoinList";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Projects />
      <Services />
      <GlobeView />
      <JoinList/>
      <Testimonial />
      <Footer/>

    </main>
  );
}
