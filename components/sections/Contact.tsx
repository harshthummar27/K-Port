"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kunalsinh009@gmail.com",
    link: "mailto:kunalsinh009@gmail.com",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 95869 60610",
    link: "tel:+919586960610",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ahmedabad, India",
    link: "#",
    color: "from-cyan-500 to-teal-500",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kunalsinh-chavda-3a567b250/",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/chavda_kunalsinh009",
    color: "from-pink-500 to-purple-500",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[85vh] py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

        {/* Soft glows */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm md:text-base font-medium mb-6">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Let's Work
            <br />
            <span className="relative">
              Together
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-blue-400/30 blur-2xl"></span>
            </span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Contact Information Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.15, delay: 0.15 + index * 0.025 }}
                >
                  <a
                    href={info.link}
                    className="block bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white/70 text-sm mb-1">
                          {info.label}
                        </div>
                        <div className="text-white font-semibold text-lg">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, delay: 0.225 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6"
            >
              <h4 className="text-white font-semibold text-lg mb-4">
                Connect on Social Media
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Additional Info Card */}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
