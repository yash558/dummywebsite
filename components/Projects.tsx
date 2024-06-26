import { HoverEffect } from "./ui/card-hover-effect";


export function Projects() {
  return (
    <div className="mx-auto px-8 py-14">
       <h1 className="text-white text-5xl text-center text-bold mb-4 ">Our Services</h1>
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
  {
    title: "SEO (Search Engine Optimization)",
    description:
      "Improve your website's visibility on search engines like Google, Bing, and Yahoo. Increase organic traffic, enhance brand awareness, and drive more conversions with our SEO strategies tailored to your business goals.",
    link: "/seo",
  },
  {
    title: "Website Design",
    description:
      "Create stunning, user-friendly websites that represent your brand effectively. Our team of designers and developers will work closely with you to craft custom websites that engage visitors, drive conversions, and reflect your unique identity.",
    link: "/website-design",
  },
  {
    title: "App Development",
    description:
      "Turn your app idea into reality with our expert app development services. From concept to launch, we handle every aspect of the development process to create intuitive, high-performance mobile and web applications that meet your requirements and delight your users.",
    link: "/app-development",
  },
  {
    title: "Graphic Design",
    description:
      "Capture attention and communicate your message effectively with compelling graphic design. Whether you need logos, branding materials, marketing collateral, or visual content for your website and social media, our talented designers have got you covered.",
    link: "/graphic-design",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach your target audience, generate leads, and drive sales with our comprehensive digital marketing solutions. From social media marketing and email campaigns to pay-per-click advertising and content promotion, we help you maximize your online presence and achieve your business objectives.",
    link: "/digital-marketing",
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience, establish thought leadership, and improve search engine rankings with high-quality content tailored to your target audience. Whether you need website copy, blog posts, articles, or marketing content, our experienced writers deliver compelling content that resonates with your audience and drives results.",
    link: "/content-writing",
  },
];
