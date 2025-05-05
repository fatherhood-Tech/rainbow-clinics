"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Phone, Mail, Star, Heart } from "lucide-react";

const doctors = [
  {
    id: "dr-marie-uwimana",
    name: "Dr. Marie Uwimana",
    title: "Obstetrics & Gynecology",
    specialization: "High-Risk Pregnancy",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    experience: "15+ years",
    education: "University of Rwanda Medical School",
    languages: ["English", "Kinyarwanda", "French"],
    calendlyLink: "https://calendly.com/dr-marie-uwimana",
    expertise: [
      "Prenatal Care",
      "High-Risk Pregnancy Management",
      "Fetal Medicine",
      "Maternal Health"
    ]
  },
  {
    id: "dr-sarah-mutesi",
    name: "Dr. Sarah Mutesi",
    title: "Maternal-Fetal Medicine",
    specialization: "Perinatal Loss Care",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    experience: "12+ years",
    education: "University of Nairobi Medical School",
    languages: ["English", "Kinyarwanda", "Swahili"],
    calendlyLink: "https://calendly.com/dr-sarah-mutesi",
    expertise: [
      "Perinatal Loss Support",
      "Grief Counseling",
      "Pregnancy After Loss",
      "Family Planning"
    ]
  },
  {
    id: "dr-jean-mugisha",
    name: "Dr. Jean Mugisha",
    title: "Women's Health",
    specialization: "Mental Health Support",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    experience: "10+ years",
    education: "Makerere University",
    languages: ["English", "Kinyarwanda"],
    calendlyLink: "https://calendly.com/dr-jean-mugisha",
    expertise: [
      "Mental Health Support",
      "Pregnancy Counseling",
      "Postpartum Care",
      "Anxiety & Depression Management"
    ]
  }
];

export default function Doctors() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });

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
              Meet Our Expert Doctors
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Schedule a consultation with our experienced healthcare professionals dedicated to women's health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm">{doctor.experience} Experience</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-sky-600 font-medium mb-2">{doctor.title}</p>
                  <p className="text-gray-600 mb-4">Specializing in {doctor.specialization}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Kigali, Rwanda</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-sky-600 hover:bg-sky-700"
                    asChild
                  >
                    <a href={doctor.calendlyLink} target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Consultation
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Doctors?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of experienced healthcare professionals is dedicated to providing 
              exceptional care with a focus on women's health and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Care",
                description: "Our doctors are highly qualified with extensive experience in women's healthcare.",
                icon: Star
              },
              {
                title: "Easy Scheduling",
                description: "Book your appointments online at your convenience through our Calendly system.",
                icon: Calendar
              },
              {
                title: "Comprehensive Support",
                description: "Get access to a full range of women's health services and support systems.",
                icon: Heart
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="inline-block p-4 bg-sky-50 rounded-full mb-4">
                  <feature.icon className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}