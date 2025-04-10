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
              Rwanda Prenatal Loss Project
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We strive to be Rwanda’s leading center of excellence in perinatal loss care, research, and advocacy, providing compassionate, multidisciplinary support to bereaved families and advancing maternal-fetal health outcomes.
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
        className="py-24 bg-gradient-to-b from-sky-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden"
              variants={fadeInUp}
            >
              <Image
                src="/image.png"
                alt="Healthcare in Rwanda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="space-y-6">
              <motion.div
                className="inline-block"
                variants={fadeInUp}
              >
                <h2 className="text-sky-600 font-semibold text-lg mb-2">Our Story</h2>
                <div className="h-1 w-20 bg-sky-600 rounded"></div>
              </motion.div>
              <motion.h3
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                variants={fadeInUp}
              >
                Transforming Women&apos;s Healthcare in Rwanda
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                Founded in 2024, Rwanda Rainbow Clinic was born from a deep commitment to supporting families experiencing pregnancy loss. Inspired by the lack of recognition and support in society, this initiative seeks to create a safe space for grieving families while advocating for better care and awareness.
              </motion.p>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8"
                variants={fadeInUp}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600">
                    To deliver holistic, evidence-based care through medical and psychological support, community awareness, research, healthcare provider training, and policy advocacy,
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    Ensure every family receives respectful, dignified, and culturally sensitive care while working to reduce preventable stillbirths in Rwanda.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
                variants={fadeInUp}
              >
                {[
                  { number: "560", label: "Women Served" },
                  { number: "98%", label: "Patient Satisfaction" },
                  { number: "24/7", label: "Support Available" },
                  { number: "15+", label: "Expert Staff" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="text-3xl font-bold text-sky-600">{stat.number}</h4>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

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