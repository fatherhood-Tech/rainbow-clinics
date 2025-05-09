"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Example hospital data
const hospitals = [
    {
        name: "Kigali University Teaching Hospital",
        lat: -1.9441,
        lng: 30.0619,
        address: "KN 4 Ave, Kigali",
        phone: "+250 788 123 456",
    },
    {
        name: "King Faisal Hospital",
        lat: -1.9445,
        lng: 30.0921,
        address: "KG 544 St, Kigali",
        phone: "+250 788 654 321",
    },
];

// Custom hospital marker icon
const hospitalIcon = new L.Icon({
    iconUrl: "/hospital-marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export default function ContactPage() {
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
        <div>
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
                            We&apos;re Here for You
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg md:text-xl text-sky-100 mb-6 sm:mb-8 leading-relaxed drop-shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Get support through our online sessions — or visit one of our trusted partner clinics.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
                <section>
                    <h2 className="text-3xl font-semibold mb-4">Our Partner Hospitals</h2>
                    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow mb-6">
                        <MapContainer
                            center={[-1.9441, 30.0619]}
                            zoom={13}
                            scrollWheelZoom={false}
                            style={{ height: "100%", width: "100%" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {hospitals.map((hospital) => (
                                <Marker
                                    key={hospital.name}
                                    position={[hospital.lat, hospital.lng]}
                                    icon={hospitalIcon}
                                >
                                    <Popup>
                                        <strong>{hospital.name}</strong>
                                        <br />
                                        {hospital.address}
                                        <br />
                                        {hospital.phone}
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {hospitals.map((hospital) => (
                            <div
                                key={hospital.name}
                                className="border border-border rounded-lg p-4 shadow-sm bg-card"
                            >
                                <h3 className="text-lg font-semibold">{hospital.name}</h3>
                                <p className="text-sm text-muted-foreground">{hospital.address}</p>
                                <p className="text-sm text-muted-foreground">{hospital.phone}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-2">
                    <h2 className="text-2xl font-semibold">Reach Out to Us</h2>
                    <p>Email: <a href="mailto:info@rplp.org" className="text-primary underline">info@rplp.org</a></p>
                    <p>Phone: <a href="tel:+250788000000" className="text-primary underline">+250 788 000 000</a></p>
                    <p>Address: KN 123 St, Kigali, Rwanda</p>
                </section>
            </div>
        </div>
    );
}
