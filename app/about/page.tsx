"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Users, Heart, Award, Clock, MapPin, Phone, Mail } from "lucide-react";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[60vh] flex items-center bg-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1664475477169-46b784084d4e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div className="mx-auto max-w-2xl px-4 text-center relative z-10 pt-16 sm:pt-0">

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Rwanda Rainbow Clinics
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dedicated to transforming women&apos;s healthcare in Rwanda through compassion, 
              innovation, and community engagement.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* History Section */}
      <motion.section
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2020, Rwanda Rainbow Clinics was born from a vision to address the critical
                  gaps in women&apos;s healthcare across Rwanda. What began as a small clinic in Kigali has
                  grown into a network of healthcare facilities serving thousands of women annually.
                </p>
                <p className="text-lg text-gray-600">
                  Our founders, Dr. Marie Uwimana and Dr. Sarah Mutesi, combined their expertise in
                  obstetrics and community health to create a healthcare model that puts women&apos;s needs
                  at the center of everything we do.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                {[
                  { icon: Users, label: "5,000+ Patients Served" },
                  { icon: Heart, label: "98% Patient Satisfaction" },
                  { icon: Award, label: "Excellence in Healthcare" },
                  { icon: Clock, label: "24/7 Emergency Care" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-8 w-8 text-sky-600" />
                    <span className="text-gray-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289"
                alt="Healthcare in Rwanda"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide every aspect of our work and shape our commitment to providing
              exceptional healthcare services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Compassionate Care",
                description: "We provide empathetic, patient-centered care that respects each woman's unique needs and experiences."
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards of medical care and professional service in everything we do."
              },
              {
                title: "Community Focus",
                description: "We actively engage with and support our local communities to promote better health outcomes."
              },
              {
                title: "Innovation",
                description: "We embrace modern healthcare solutions while respecting traditional practices and cultural values."
              },
              {
                title: "Accessibility",
                description: "We strive to make quality healthcare accessible to all women, regardless of their background."
              },
              {
                title: "Education",
                description: "We empower women through health education and preventive care information."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals leading our mission to transform women&apos;s healthcare in Rwanda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Marie Uwimana",
                role: "Founder & Medical Director",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
              },
              {
                name: "Dr. Sarah Mutesi",
                role: "Co-Founder & Chief of Obstetrics",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f"
              },
              {
                name: "Dr. Jean Mugisha",
                role: "Chief of Women's Health",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sky-600">{member.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={ref4}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-sky-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="text-lg text-gray-600">
                We&apos;re here to answer your questions and provide the care you need.
                Contact us to schedule an appointment or learn more about our services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">123 Health Avenue, Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">+250 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-sky-600" />
                  <span className="text-gray-700">info@rwandarainbow.org</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
                alt="Our Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}