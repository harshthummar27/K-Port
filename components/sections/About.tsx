"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  Target,
  Award,
  Users,
  Zap,
  Globe,
} from "lucide-react";

const skills = [
  { name: "On-Page SEO", icon: Code, level: 92 },
  { name: "Technical SEO", icon: Rocket, level: 88 },
  { name: "Content Marketing", icon: Palette, level: 85 },
  { name: "Link Building", icon: Target, level: 90 },
];

const achievements = [
  { icon: Award, number: "7+", label: "Websites Optimized" },
  { icon: Users, number: "10+", label: "Happy Clients" },
  { icon: Zap, number: "1.5+", label: "Years Experience" },
  { icon: Globe, number: "100%", label: "Client Satisfaction" },
];

const technologies = [
  "Google Analytics 4",
  "Google Search Console",
  "SEMrush",
  "Ahrefs",
  "Screaming Frog",
  "Yoast SEO",
  "Rank Tracker",
  "Canonical Tags",
  "Schema Markup",
  "Keyword Research",
  "Ubersuggest",
  "ChatGPT (Atlas)",
  "Word AI",
  "QuillBot",
  "Perplexity AI",
  "Shutterstock",
];

export default function About() {
  return (
    <section
      id="about"
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Boosting Online
            <br />
            <span className="relative">
              Visibility
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-blue-400/30 blur-2xl"></span>
            </span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Dedicated SEO Engineer specializing in driving organic traffic and improving
            search engine rankings through data-driven strategies and technical excellence.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Who I Am
                </h3>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    I'm an experienced SEO Engineer with 1.5 years of proven expertise in
                    driving organic growth and increasing online visibility. I combine technical
                    SEO knowledge with strategic optimization to help businesses achieve
                    higher search rankings and increased qualified traffic.
                  </p>
                  <p>
                    My approach leverages data-driven insights and industry best practices,
                    ensuring that every optimization effort directly contributes to measurable
                    business results. I stay updated with the latest algorithm changes and
                    SEO trends to keep strategies ahead of the curve.
                  </p>
                  <p>
                    I specialize in comprehensive SEO audits, technical optimization,
                    on-page SEO, content strategy, and link building using tools like
                    SEMrush, Ahrefs, and Google Search Console, while maintaining white-hat
                    and best practices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                  Core Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-white/70" />
                            <span className="text-white font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-white/60 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: 0.3 + index * 0.05,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                            style={{
                              boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: 0.2 + index * 0.025 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-200 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/70 text-sm">{achievement.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Gradient border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-50 blur-xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1, delay: 0.25 + index * 0.015 }}
                  className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-default"
                >
                  <span className="text-sm md:text-base font-medium">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
