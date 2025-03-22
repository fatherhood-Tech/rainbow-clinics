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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-sky-900 to-sky-800">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Medical Team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              About Rwanda Rainbow Clinics
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Dedicated to transforming women's healthcare in Rwanda through compassion, 
              innovation, and community engagement.
            </p>
          </motion.div>
        </div>
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
                  gaps in women's healthcare across Rwanda. What began as a small clinic in Kigali has 
                  grown into a network of healthcare facilities serving thousands of women annually.
                </p>
                <p className="text-lg text-gray-600">
                  Our founders, Dr. Marie Uwimana and Dr. Sarah Mutesi, combined their expertise in 
                  obstetrics and community health to create a healthcare model that puts women's needs 
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
              Meet the dedicated professionals leading our mission to transform women's healthcare in Rwanda.
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
                We're here to answer your questions and provide the care you need. 
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