"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
              We strive to be Rwanda's leading center of excellence in perinatal loss care, research, and advocacy, providing compassionate, multidisciplinary support to bereaved families and advancing maternal-fetal health outcomes.
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
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

          {/* Stats Grid */}
          {/* <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            variants={fadeInUp}
          >
            {[
              { number: "560", label: "Women Served" },
              { number: "98%", label: "Patient Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "15+", label: "Expert Staff" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm text-center py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <h4 className="text-4xl font-bold text-sky-600">{stat.number}</h4>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div> */}
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
              style={{ stroke: "none", fill: "#ffff" }} // soft emerald/cyan
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
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prenatal Care",
                description: "Comprehensive prenatal care and support for expecting mothers.",
                image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80"
              },
              {
                title: "Women's Health",
                description: "Specialized care for women at every stage of life.",
                image: "https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Support Services",
                description: "Emotional and psychological support for women's health journey.",
                image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
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
        className="bg-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Patient Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The care and support I received at Rwanda Rainbow Clinics was exceptional. The staff truly understands women's needs.",
                author: "Sarah M."
              },
              {
                quote: "I felt heard and supported throughout my entire journey. The doctors and nurses are incredibly professional and caring.",
                author: "Marie K."
              },
              {
                quote: "The clinic's commitment to women's health equity has made a real difference in our community.",
                author: "Grace N."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6">
                  <blockquote className="text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
                  <p className="font-semibold">- {testimonial.author}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Partner Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}