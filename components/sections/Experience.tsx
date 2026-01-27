"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Metizsoft Solution Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    period: "Aug 2024 - Present",
    website: "https://www.metizsoft.com/",
    description:
      "Started my professional journey as an SEO intern and successfully transitioned to a full-time SEO Engineer role. Leading SEO initiatives, optimizing website performance, and implementing data-driven strategies to improve organic search visibility.",
    timeline: [
      {
        role: "SEO Engineer",
        period: "Feb 2025 - Present",
        achievements: [
          "Successfully transitioned from intern to full-time SEO Engineer",
          "Optimized multiple client websites for better search rankings",
          "Implemented technical SEO improvements across various projects",
          "Conducted comprehensive keyword research and competitor analysis",
        ],
      },
      {
        role: "SEO Intern",
        period: "Aug 2024 - Feb 2025",
        achievements: [
          "Completed comprehensive 6-month SEO internship program",
          "Conducted SEO audits and identified optimization opportunities",
          "Assisted in keyword research and content strategy development",
          "Learned and applied best practices in on-page and technical SEO",
        ],
      },
    ],
    technologies: [
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Google Analytics 4",
      "Schema Markup",
      "Core Web Vitals",
      "Technical SEO",
      "On-Page Optimization",
      "Keyword Research",
      "HTML/CSS",
      "SEO Auditing",
    ],
    image: "/Metiz-logo-1.svg",
    color: "from-purple-500 to-blue-500",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-[90vh] py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

        {/* Soft glows */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
            EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Professional
            <br />
            <span className="relative">
              Journey
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-purple-400/30 blur-2xl"></span>
            </span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A timeline of my professional experience, key projects, and
            achievements in the tech industry.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          {experiences.map((experience, index) => {
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-transparent hidden md:block"></div>
                )}

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden hover:bg-white/10 transition-all duration-200">
                  {/* Gradient border glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-6">
                    {/* Left Side - Company Image */}
                    <div className="flex items-start gap-4 md:flex-col md:items-center md:w-24">
                      {experience.website ? (
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${experience.color} border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden hover:scale-110 hover:border-white/40 transition-all duration-200 cursor-pointer group`}
                          aria-label={`Visit ${experience.company} website`}
                        >
                          <Image
                            src={experience.image}
                            alt={experience.company}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                          />
                        </a>
                      ) : (
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${experience.color} border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden`}
                        >
                          <Image
                            src={experience.image}
                            alt={experience.company}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="md:hidden">
                        <div className="text-white font-bold text-lg mb-1">
                          {experience.company}
                        </div>
                        <div className="text-white/70 text-sm">
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1">
                      {/* Header Info - Desktop */}
                      <div className="hidden md:flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {experience.company}
                          </h3>
                          <div className="text-lg text-white/90 font-medium mb-2">
                            Career Timeline
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-white/70 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/70">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Header Info - Mobile */}
                      <div className="md:hidden mb-4">
                        <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Timeline Roles */}
                      <div className="mb-6 space-y-6">
                        {experience.timeline.map((role, roleIndex) => (
                          <div key={roleIndex} className="relative pl-6 border-l-2 border-purple-500/30">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-black"></div>
                            
                            <div className="mb-3">
                              <h4 className="text-white font-bold text-lg mb-1">
                                {role.role}
                              </h4>
                              <p className="text-white/60 text-sm flex items-center gap-2">
                                <Calendar className="w-3 h-3" />
                                {role.period}
                              </p>
                            </div>

                            <ul className="space-y-2">
                              {role.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="text-white/70 text-sm md:text-base flex items-start gap-3"
                                >
                                  <span className="text-purple-400 mt-1.5">▸</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white/90 font-semibold mb-3 text-sm">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 text-xs md:text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
