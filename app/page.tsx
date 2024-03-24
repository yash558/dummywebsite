import Content from "@/components/Content";
import { Projects } from "@/components/Projects";
import Testimonial from "@/components/testimonials";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 justify-between p-24">
      <Projects/>
      <Content/>
      <Testimonial />
    </main>
  );
}
