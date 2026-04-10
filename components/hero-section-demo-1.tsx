"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Contact information
  const contactInfo = {
    whatsapp: "252905392761",
    email: "saamix17@gmail.com",
    phone: "252 90 5392761",
  };

  return (
    <main className="bg-white text-black min-h-screen font-sans antialiased">
      {/* Hero Section — profile picture on top of text with bottom gradient fade */}
      <section
        ref={targetRef}
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      >
        {/* animated background subtle gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-100" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className={cn(
            "flex flex-col items-center",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

          {/* Profile Picture — larger size with bottom gradient fade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative mb-6 cursor-pointer group"
          >
            {/* Main image container - made larger (w-48 h-48 md:w-56 md:h-56) */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden">
              <img
                src="https://i.ibb.co/Mk4GKmfg/0b6147c7-e640-4a89-a1f5-46a9442e862a-removebg-preview.png"
                alt="mohamuud Mire profile"
                width={224}
                height={224}
                className="object-cover object-top w-full h-full"
              />
              {/* Gradient overlay from transparent to white at bottom — hides bottom edge like PNG blend */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 85%)",
                }}
              />
            </div>
            {/* Soft glow behind */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-extrabold tracking-tighter text-[clamp(2.8rem,10vw,6rem)] leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 pt-5"
          >
            Mohamuud Mire
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 text-xl md:text-2xl font-medium text-gray-700"
          >
            Web & App Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base text-gray-500 mt-3 max-w-md"
          >
            Crafting high-performance web & mobile experiences with modern stacks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex gap-4"
          >
            <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-6 shadow-lg transition-all">
              View work
            </Button>
            < AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
              < AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-full border-gray-300 hover:border-black hover:bg-gray-50"
                >
                  Let's talk
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl font-bold">Contact mohamuud Mire</AlertDialogTitle>
                  <AlertDialogDescription className="text-base pt-2">
                    Reach out via any of these channels — I'll get back to you within 24 hours.
                  </ AlertDialogDescription>
                </ AlertDialogHeader>
                <div className="flex flex-col gap-4 py-4">
                  {/* WhatsApp */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💬</span>
                      <div>
                        <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                        <Button className="font-semibold text-gray-900" variant="link" asChild>
                          <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            {contactInfo.whatsapp}
                          </a>
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-green-600 hover:text-green-700 hover:bg-green-100"
                      onClick={() => navigator.clipboard.writeText(contactInfo.whatsapp)}
                    >
                      Copy
                    </Button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Email</p>
                        <p className="font-semibold text-gray-900">{contactInfo.email}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-100"
                      onClick={() => navigator.clipboard.writeText(contactInfo.email)}
                    >
                      Copy
                    </Button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 border border-purple-100">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Phone</p>
                        <p className="font-semibold text-gray-900">{contactInfo.phone}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-100"
                      onClick={() => navigator.clipboard.writeText(contactInfo.phone)}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
                <div className="text-xs text-center text-gray-400 pt-2">
                  Tap copy to save any contact detail
                </div>
                 <AlertDialogCancel>Cancel</AlertDialogCancel>
              </ AlertDialogContent>
            </ AlertDialog>
          </motion.div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
            <div className="w-1 h-2 bg-gray-500 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About Section — modern two-column with left paragraph + right black&white image */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-28 md:py-36">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* left side: about text with rich details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono uppercase tracking-wider text-gray-500 border-l-4 border-black pl-3">
              About me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
              Designer & builder <br /> at heart
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm <span className="font-semibold text-black">mohamuud Mire</span>, a full‑stack developer
                passionate about creating fast, human‑centered applications. I blend
                modern frontend frameworks with robust backend systems to ship
                products that feel effortless.
              </p>
              <p>
                Over the past years I've worked with startups and agencies, delivering
                high‑impact solutions using <strong>React, Next.js, React Native, Supabase, and C#</strong>.
                My approach merges clean code with thoughtful UI — because performance
                and aesthetics should always coexist.
              </p>
              <p>
                Outside of coding, I explore minimal design, contribute to OSS, and
                mentor aspiring developers. Let's build something memorable.
              </p>
            </div>
            <div className="mt-8 flex gap-3 flex-wrap">
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">📍 Remote / somalia</div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">⚡ 40+ projects shipped</div>
              <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">🏆 Team worker</div>
            </div>
          </motion.div>

          {/* right side: black & white image with modern styling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://i.ibb.co/GvQSPN56/04590879-5aa4-4bfa-be20-57d21298cbcb.jpg"
                alt="mohamuud Mire portrait black and white"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* minimal overlay to keep modern look */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>
            {/* decorative ring */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-gray-200 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gray-100 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section — modern grid with subtle motion */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <span className="text-sm font-mono uppercase tracking-wider text-gray-500">
              Selected work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-1">
              Featured projects
            </h2>
          </div>
          <Button variant="ghost" className="rounded-full border border-gray-300 hover:bg-black hover:text-white">
            View all →
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <Card className="group rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-44 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md text-[11px] font-mono">
                      {project.year}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl tracking-tight">{project.title}</h3>
                  <p className="text-sm text-gray-500 mt-2 mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex gap-2 flex-wrap text-xs">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials — modern floating cards */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-24">
        <div className="text-center mb-14">
          <span className="text-sm font-mono uppercase text-gray-500 tracking-wider">
            Kind words
          </span>
          <h2 className="text-4xl font-bold mt-2">What clients say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-yellow-500 text-sm mb-3">★★★★★</div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">
                    “{item.text}”
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack — modern interactive badges + marquee-like layout */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-24 text-center border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono uppercase tracking-wider text-gray-400">
            Tools & expertise
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-10">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="border border-gray-200 bg-white shadow-sm px-5 py-2.5 rounded-full text-sm font-medium text-gray-800 hover:border-black hover:bg-black hover:text-white transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-6 text-gray-400 text-sm">
            <span>✨ 3+ years experience</span>
            <span>⚡ 30+ technologies mastered</span>
          </div>
        </motion.div>
      </section>

      {/* Footer — Vercel style minimal */}
      <footer className="border-t border-gray-100 py-12 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 mohamuud Mire — built with Next.js & Framer Motion</p>
          <div className="flex gap-6">
           
            <Button variant="link"  className="text-gray-500 hover:text-black p-0 h-auto">
            <a 
                href="https://github.com/Moamire" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ---- data arrays for projects, testimonials & tech ----
const projects = [
  {
    title: "Void Analytics",
    desc: "Real-time dashboard with Next.js 14 and Supabase, serving 10k+ users.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    year: "2025",
  },
  {
    title: "NativEdge Mobile",
    desc: "Cross-platform React Native app with offline sync and C# backend.",
    tags: ["React Native", "C#", "SignalR"],
    year: "2024",
  },
  
];

const testimonials = [
  {
    text: "mohamuud delivered a flawless web app ahead of schedule. His attention to detail and communication were top-tier.",
    name: "Alex Rivera",
    role: "CTO, Lumos Studio",
  },
  {
    text: "Working with mohamuud felt like having a design & tech co-founder. The mobile app he built increased our retention by 40%.",
    name: "Samira Chen",
    role: "Product Lead, OmniRetail",
  },
  {
    text: "One of the most dedicated full-stack developers I've ever collaborated with. Deep knowledge of Supabase + Next.js.",
    name: "Jordan Wells",
    role: "Freelance Partner",
  },
];

const techStack = [
  "React",
  "Next.js",
  "React Native",
  "Supabase",
  "C#",
  "Electron",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Framer Motion",
  "Vercel",
];