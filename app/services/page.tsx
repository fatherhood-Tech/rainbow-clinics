"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Baby,
  Heart,
  Stethoscope,
  Brain,
  Activity,
  Calendar,
  Users,
  ArrowRight
} from "lucide-react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Services() {
  const searchParams = useSearchParams();
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const mainServices = [
    {
      title: "Prenatal Care",
      id: "prenatal-care",
      description: "Our comprehensive prenatal care program is designed to ensure the health and well-being of both mother and baby throughout pregnancy. We provide regular check-ups, ultrasounds, and genetic screening, all delivered with compassionate care.",
      features: ["Regular check-ups", "Ultrasound monitoring", "Genetic screening", "Nutritional guidance"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
          <path d="M12 14v-4m0 0V8m0 2h2m-2 0H8" />
        </svg>
      ),
    },
    {
      title: "Pregnancy Support",
      id: "pregnancy-support",
      description: "We believe in providing complete pregnancy support that goes beyond medical care. Our services include childbirth education, counseling, and comprehensive preparation for the journey ahead.",
      features: ["Childbirth classes", "Lactation support", "Birth planning", "Partner involvement"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
          <path d="M12 14v-4m0 0V8m0 2h2m-2 0H8" />
        </svg>
      ),
    },
    {
      title: "High-Risk Pregnancy Care",
      id: "high-risk-pregnancy",
      description: "Our specialized high-risk pregnancy care provides intensive monitoring and expert management for complex pregnancies. We ensure 24/7 support and advanced medical care when needed.",
      features: ["24/7 monitoring", "Emergency care", "Specialist consultation", "Advanced diagnostics"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
          <path d="M12 14v-4m0 0V8m0 2h2m-2 0H8" />
        </svg>
      ),
    },
    {
      title: "Mental Health Support",
      id: "mental-health",
      description: "Mental health is a crucial aspect of maternal care. We offer comprehensive mental health services including depression screening, anxiety management, and both individual and group therapy sessions.",
      features: ["Depression screening", "Anxiety management", "Group therapy", "Individual counseling"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
          <path d="M12 14v-4m0 0V8m0 2h2m-2 0H8" />
        </svg>
      ),
    },
    {
      title: "Postnatal Care",
      id: "postnatal-care",
      description: "Our postnatal care services ensure a smooth transition into motherhood. We provide comprehensive support for both mother and baby, including recovery guidance and breastfeeding support.",
      features: ["Recovery support", "Newborn care", "Breastfeeding support", "Health monitoring"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
          <path d="M12 14v-4m0 0V8m0 2h2m-2 0H8" />
        </svg>
      ),
    },
    {
      title: "Family Planning",
      id: "family-planning",
      description: "Take control of your reproductive health with our comprehensive family planning services. We offer personalized counseling, various contraception options, and education about reproductive health.",
      features: ["Contraception counseling", "Fertility awareness", "Health education", "Preventive care"],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
          <path d="M12 14v-4m0 0V8m0 2h2m-2 0H8" />
        </svg>
      ),
    }
  ];

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

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
              Comprehensive Women&apos;s Health Services
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert care for every stage of your pregnancy journey and beyond.
            </motion.p>
          </div>
        </motion.div>
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
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-sky-100 hover:-translate-y-2 transform transition-transform"
              >
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-sky-100 group-hover:bg-sky-200 transition-colors duration-300 shadow">
                  <span className="text-sky-600">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-sky-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sky-800 text-base mb-6 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-sky-100 text-sky-700 px-3 py-1 text-xs font-medium rounded-full"
                    >
                      #{feature}
                    </span>
                  ))}
                </div>
                <a
                  href="/doctors"
                  className="mt-auto inline-block bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-sky-700 transition-colors duration-300"
                >
                  See the Doctors
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>






      {/* Support Programs Section */}
      <motion.section
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-sky-50"
        id="support-programs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our community support programs designed to provide comprehensive care
              and assistance throughout your healthcare journey.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700"
                asChild
              >
                <Link href="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-sky-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-sky-100 mb-8">
              Schedule a consultation with our expert healthcare team today.
            </p>
            <Button
              size="lg"
              className="bg-white text-sky-900 hover:bg-sky-50"
              asChild
            >
              <Link href="/contact">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}