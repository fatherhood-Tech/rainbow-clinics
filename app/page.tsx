"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, Star, ArrowRight } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1473594659356-a404044aa2c2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="African Healthcare"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={100}
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-sky-900/40 to-transparent"></div>
        </div>

        <motion.div
          className="relative h-screen flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="ml-[5%] sm:ml-[10%] max-w-[90%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-[40%] relative z-10 px-4 sm:px-0 pt-16 sm:pt-0">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Rwanda Perinatal <br /> Loss Project
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We strive to be Rwanda&apos;s leading center of excellence in perinatal loss care, research, and advocacy, providing compassionate, multidisciplinary support to bereaved families and advancing maternal-fetal health outcomes.
            </motion.p>
            <motion.div
              className="space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-sky-600 text-white hover:bg-sky-700 transition-colors duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Top Story Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-lg"
              variants={fadeInUp}
            >
              <Image
                // src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="./hero2.jpg"
                alt="Healthcare in Rwanda"
                fill
                className="rounded-3xl object-cover w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div className="space-y-6" variants={fadeInUp}>
              <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Transforming Women&apos;s Healthcare in Rwanda
              </h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-4"
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in 2024, Rwanda Perinatal Loss Project was born from a deep commitment to supporting families experiencing pregnancy loss. Inspired by the lack of recognition and support in society, this initiative seeks to create a safe space for grieving families while advocating for better care and awareness.
                </p>
                <Link
                  href="/about"
                  className="inline-block text-sky-600 hover:text-sky-800 font-medium underline underline-offset-4 transition-colors duration-300"
                >
                  Read More &rarr;
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <section className="relative bg-gradient-to-b from-sky-50 via-cyan-100 to-white pb-16 pt-20">
        {/* Curve SVG Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="w-full h-[100px]"
          >
            <path
              d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#ffff" }}
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-20 mt-16 ">
          {[
            {
              title: "Our Mission",
              icon: (
                <path d="M13 16h-1v-4h-1m0-4h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
              ),
              description:
                "To deliver holistic, evidence-based care through medical and psychological support, community awareness, research, healthcare provider training, and policy advocacy.",
            },
            {
              title: "Our Vision",
              icon: (
                <path d="M12 4.354a4 4 0 1 0 0 7.292M12 4.354a4 4 0 0 1 0 7.292M12 4.354V20" />
              ),
              description:
                "Ensure every family receives respectful, dignified, and culturally sensitive care while working to reduce preventable stillbirths in Rwanda.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="transition-all px-6 md:px-12 "
            >
              <div className="flex flex-col items-center space-y-6 ">
                <div className="w-16 h-16 bg-sky-600 text-white flex items-center justify-center rounded-full shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-900">
                  {item.title}
                </h4>
                <p className="text-sky-800 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-b from-white via-sky-50 to-sky-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-16 text-sky-900"
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Prenatal Care",
                description: "Comprehensive prenatal care and support for expecting mothers, ensuring health and well-being for both mother and baby.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
                    <path d="M12 14v-4m0 0V8m0 2h2m-2 0H8" />
                  </svg>
                ),
              },
              {
                title: "Women's Health",
                description: "Specialized care for women at every stage of life, from adolescence through menopause and beyond.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 12v8m-4 0h8" />
                  </svg>
                ),
              },
              {
                title: "Support Services",
                description: "Emotional and psychological support for women and families, including counseling and community programs.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 8a5 5 0 0 0-10 0c0 5 5 9 5 9s5-4 5-9z" />
                    <circle cx="12" cy="8" r="2" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-sky-100 hover:-translate-y-2 transform transition-transform"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-sky-100 group-hover:bg-sky-200 transition-colors duration-300 shadow">
                  <span className="text-sky-600">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-sky-900 mb-3">{service.title}</h3>
                <p className="text-sky-800 text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="/services"
              className="inline-block bg-sky-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-sky-700 transition-colors duration-300"
            >
              Learn More Services
            </a>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="relative py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-50 to-white"></div>
        
        {/* Featured Testimonials */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sky-900 mb-4">Real stories from the families we&apos;ve supported</h2>
            <p className="text-lg text-sky-700">What Our Patients Say</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The compassionate care I received during my loss journey was beyond exceptional. The staff provided not just medical support, but genuine emotional understanding.",
                author: "Sarah Mutesi",
                role: "Patient",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
              },
              {
                quote: "They created a safe space for grief while helping us prepare for the future. Their holistic approach to care made all the difference in our healing process.",
                author: "Marie Uwase",
                role: "Patient",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl shadow-xl p-8 relative"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-sky-200" />
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-900">{testimonial.author}</h4>
                    <p className="text-sky-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="mt-4 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
      </motion.section>

       {/* Partners Section */}
       <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
            <p className="text-lg text-gray-600">Working together to improve maternal healthcare in Rwanda</p>
          </div>

          <div className="relative">
            <motion.div 
              className="flex space-x-12"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex space-x-12">
                  {[
                    {
                      name: "University of Utah",
                      logo: "data:image/png;base64,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"
                    },
                    {
                      name: "University of Rwanda",
                      logo: "https://reseaudesfemmes.org.rw/wp-content/uploads/2023/09/image-removebg-preview-5.png"
                    },
                    {
                      name: "Polyclinique De L'Etoile",
                      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWQEa1qExxCzQoN6yGIgzEBegKRSqhYNPFGom0kxbqA&s"
                    },
                    {
                      name: "University of Utah Health",
                      logo: "data:image/png;base64,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"
                    },
                    {
                      name: "Muhima Hospital",
                      logo: "https://www.nyarugengehospital.gov.rw/_assets/848a49247fad16e632dbfe56b131f2ac/Images/Coat.png"
                    }
                  ].map((partner, index) => (
                    <motion.div
                      key={index}
                      className="flex-none w-48 h-24 relative bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}