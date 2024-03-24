"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "SEO (Search Engine Optimization)",
    description:
      "Improve your website's visibility on search engines like Google, Bing, and Yahoo. Increase organic traffic, enhance brand awareness, and drive more conversions with our SEO strategies tailored to your business goals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        SEO (Search Engine Optimization)
      </div>
    ),
  },
  {
    title: "Website Design",
    description:
      "Create stunning, user-friendly websites that represent your brand effectively. Our team of designers and developers will work closely with you to craft custom websites that engage visitors, drive conversions, and reflect your unique identity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Website Design
      </div>
    ),
  },
  {
    title: "App Development",
    description:
      "Turn your app idea into reality with our expert app development services. From concept to launch, we handle every aspect of the development process to create intuitive, high-performance mobile and web applications that meet your requirements and delight your users.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        App Development
      </div>
    ),
  },
  {
    title: "Graphic Design",
    description:
      "Capture attention and communicate your message effectively with compelling graphic design. Whether you need logos, branding materials, marketing collateral, or visual content for your website and social media, our talented designers have got you covered.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Graphic Design
      </div>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Reach your target audience, generate leads, and drive sales with our comprehensive digital marketing solutions. From social media marketing and email campaigns to pay-per-click advertising and content promotion, we help you maximize your online presence and achieve your business objectives.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Digital Marketing
      </div>
    ),
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience, establish thought leadership, and improve search engine rankings with high-quality content tailored to your target audience. Whether you need website copy, blog posts, articles, or marketing content, our experienced writers deliver compelling content that resonates with your audience and drives results.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Content Writing
      </div>
    ),
  },
];

export function Services() {
  return (
    <div className="p-10">
      <h1 className="text-white text-5xl text-center text-bold mb-4 ">
        
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
