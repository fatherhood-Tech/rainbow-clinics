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
            <h2 className="text-4xl font-bold text-sky-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-sky-700">Real stories from the families we&apos;ve supported</p>
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
                      name: "Rwanda Ministry of Health",
                      logo: "data:image/jpeg;base64,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"
                    },
                    {
                      name: "University of Rwanda",
                      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAAAWlBMVEVHcEzp5OC/y9bAztqJqMH16d77+/u7zdtplLWju8+es8Tp7e/38+7///////8AYJYAZZgAXJMwdKJDfqeSr8dShqx9oLz0+PkAV5GZtMrg6e4abJyvxNXJ1+IRETbfAAAAD3RSTlMAU6nI/BBe/f793IE1IBjkiJvgAAABe0lEQVQokXWS23bjMAhF41ixJbcpAgSSfPn/3yw4TZvpzJw3rQ3ocLlcfnQfpmm4X/6h92tRJshSru+/0G2MRArSImvj8eOVDSF34lh66nFriXX6YVOUgGlX2TYOc5Ftl7fvPCkcD0bIJkA6ouT4zNWeNbUM4BhMoQTS28munCVhhpjmGEV3Qdwl6ngaVaJj84p1b5ZJVaEd5t07fuOkaiUz1uKFcV4Rol7ZPS2SU4ZjbQ7rDA4tIvPidiLvCKU6pLW0zWIy7BSCQ6QdoD9hrMF/7ozR/Cpwf4FtXr3bwvCAlF4g5tqtr8CgVjYAzOgQajcImOrmhqD7DAASo8G4k6zBeik7kcX7FAYC6U1XQWihkn8IWCTnc7rBWmPzYRZqQB9VZv/osRSyGWxtExY4F+PPvH0tbUELlcfGTMgH5TY/F2r+Yba2fV1IfYbc+u37grp5lHKkoGlOYqNNr1c08pkkQp7O45/nNywCX+I0XX7rfl1UNSx/ne1/9AlEmSP4+EsOAgAAAABJRU5ErkJggg=="
                    },
                    {
                      name: "Polyclinique De L'Etoile",
                      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWQEa1qExxCzQoN6yGIgzEBegKRSqhYNPFGom0kxbqA&s"
                    },
                    {
                      name: "UNICEF Rwanda",
                      logo: "data:image/png;base64,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"
                    },
                    {
                      name: "RBC",
                      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWZvC5Ufji_SjIXee7av3DOlq4_6wqMpMBw&s"
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