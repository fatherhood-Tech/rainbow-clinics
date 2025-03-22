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
      icon: Baby,
      title: "Prenatal Care",
      id: "prenatal-care",
      description: "Our comprehensive prenatal care program is designed to ensure the health and well-being of both mother and baby throughout pregnancy. We provide regular check-ups, ultrasounds, and genetic screening, all delivered with compassionate care.",
      features: ["Regular check-ups", "Ultrasound monitoring", "Genetic screening", "Nutritional guidance"],
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982"
    },
    {
      icon: Heart,
      title: "Pregnancy Support",
      id: "pregnancy-support",
      description: "We believe in providing complete pregnancy support that goes beyond medical care. Our services include childbirth education, counseling, and comprehensive preparation for the journey ahead.",
      features: ["Childbirth classes", "Lactation support", "Birth planning", "Partner involvement"],
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed"
    },
    {
      icon: Stethoscope,
      title: "High-Risk Pregnancy Care",
      id: "high-risk-pregnancy",
      description: "Our specialized high-risk pregnancy care provides intensive monitoring and expert management for complex pregnancies. We ensure 24/7 support and advanced medical care when needed.",
      features: ["24/7 monitoring", "Emergency care", "Specialist consultation", "Advanced diagnostics"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118"
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      id: "mental-health",
      description: "Mental health is a crucial aspect of maternal care. We offer comprehensive mental health services including depression screening, anxiety management, and both individual and group therapy sessions.",
      features: ["Depression screening", "Anxiety management", "Group therapy", "Individual counseling"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    },
    {
      icon: Activity,
      title: "Postnatal Care",
      id: "postnatal-care",
      description: "Our postnatal care services ensure a smooth transition into motherhood. We provide comprehensive support for both mother and baby, including recovery guidance and breastfeeding support.",
      features: ["Recovery support", "Newborn care", "Breastfeeding support", "Health monitoring"],
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9"
    },
    {
      icon: Calendar,
      title: "Family Planning",
      id: "family-planning",
      description: "Take control of your reproductive health with our comprehensive family planning services. We offer personalized counseling, various contraception options, and education about reproductive health.",
      features: ["Contraception counseling", "Fertility awareness", "Health education", "Preventive care"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-sky-900 to-sky-800">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
            alt="Maternity Care"
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
              Comprehensive Women's Health Services
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Expert care for every stage of your pregnancy journey and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <div className="bg-white">
        {mainServices.map((service, index) => (
          <motion.section
            key={service.id}
            ref={index === 0 ? ref1 : undefined}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={fadeInUp}
            className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
            id={service.id}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  className="relative h-[400px] rounded-2xl overflow-hidden"
                  variants={fadeInUp}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <service.icon className="h-8 w-8 text-sky-600" />
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <ArrowRight className="h-5 w-5 text-sky-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="mt-6"
                    asChild
                  >
                    <Link href="/contact">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

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