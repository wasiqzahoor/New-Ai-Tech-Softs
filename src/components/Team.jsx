import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import image2 from "../assets/team/image2.webp";
import image3 from "../assets/team/image3.webp";
import image4 from "../assets/team/image4.webp";
import image5 from "../assets/team/image5.webp";
import image6 from "../assets/team/image6.webp";
import CEO from "../assets/team/CEO.webp";
import {
  FaUserTie,
  FaProjectDiagram,
  FaCode,
  FaRobot,
  FaPalette,
} from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Chaudhary Wasiq Zahoor',
    role: 'Founder & CEO',
    desc: 'A visionary leader steering New Tech Softs towards technological excellence.',
    img: CEO,
    icon: FaUserTie,
    accent: '#00D9FF',
    social: {
      linkedin: 'https://www.linkedin.com/in/chaudhary-wasiq-zahoor-bbab952b0/',
      github: 'https://github.com/wasiqzahoor',
    },
  },
  {
    id: 2,
    name: 'Nafeesa Arshad',
    role: 'Project Manager',
    desc: 'Leading teams with strategic vision, ensuring timely delivery and efficient workflows.',
    img: image3,
    icon: FaProjectDiagram,
    accent: '#818cf8',
    social: {
      linkedin: 'https://www.linkedin.com/in/nafeesa-arshad-4235a1364/',
      github: 'https://github.com/nafeesaawan',
    },
  },
  {
    id: 3,
    name: 'Warda Riffat',
    role: 'Full Stack Developer',
    desc: 'Building scalable web applications with focus on performance and security.',
    img: image5,
    icon: FaCode,
    accent: '#34d399',
    social: {
      linkedin: 'https://www.linkedin.com/in/warda-riffat-556731317',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'Muhammad Musa',
    role: 'AI Engineer',
    desc: 'Designing and deploying intelligent AI models that drive automation.',
    img: image2,
    icon: FaRobot,
    accent: '#f472b6',
    social: {
      linkedin: 'https://www.linkedin.com/in/mussakhan-ai/',
      github: '#',
    },
  },
  {
    id: 5,
    name: 'Malik Imran',
    role: 'Graphic Designer',
    desc: 'Transforming brand stories into stunning visual identities.',
    img: image4,
    icon: FaPalette,
    accent: '#fb923c',
    social: {
      linkedin: 'https://www.linkedin.com/in/malik-imran-13754937a/',
      github: '#',
    },
  },
  {
    id: 6,
    name: 'Areeba Wazeer',
    role: 'Human Resources',
    desc: 'Focused on talent acquisition and organizational development.',
    img: image6,
    icon: FaUserTie,
    accent: '#3fea8c',
    social: {
      linkedin: 'https://www.linkedin.com/in/areeba-wazeer-945b73368',
      github: '#',
    },
  }
];

const TeamCard = ({ member, index }) => {
  const [hovered, setHovered] = useState(false);
  const { name, role, desc, img, accent, social } = member;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center group"
    >
      {/* Card container */}
      <div
        className="relative w-full p-6 pb-5 rounded-3xl transition-all duration-500 group-hover:-translate-y-2"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${hovered ? accent + '40' : 'rgba(255,255,255,0.08)'}`,
          boxShadow: hovered
            ? `0 20px 50px rgba(0,0,0,0.3), 0 0 40px ${accent}10`
            : '0 4px 20px rgba(0,0,0,0.15)',
        }}
      >
        {/* Circle image */}
        <div className="relative mx-auto mb-5" style={{ width: '160px', height: '160px' }}>
          {/* Glow ring */}
          <div
            className="absolute -inset-2 rounded-full transition-all duration-500"
            style={{
              background: `conic-gradient(from 0deg, ${accent}60, transparent 40%, ${accent}60)`,
              opacity: hovered ? 1 : 0,
              filter: 'blur(8px)',
            }}
          />
          {/* Border ring */}
          <div
            className="absolute -inset-1 rounded-full transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${accent}, ${accent}44)`,
              opacity: hovered ? 1 : 0.3,
            }}
          />
          {/* Image */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0a0a1e]">
            {img ? (
              <img
                src={img}
                alt={name}
                className="w-full h-full object-cover object-top transition-all duration-500"
                style={{
                  filter: hovered ? 'grayscale(0%) brightness(1)' : 'grayscale(20%) brightness(0.85)',
                  transform: hovered ? 'scale(1.1)' : 'scale(1)',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/[0.05] to-white/[0.02]">
                <span className="text-brand-cyan text-4xl font-black font-heading">
                  {name.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <h3
          className="text-lg font-heading font-bold text-white mb-1 transition-colors duration-300"
          title={name}
        >
          {name}
        </h3>

        {/* Role badge */}
        <span
          className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 font-body"
          style={{
            background: accent + '15',
            color: accent,
            border: `1px solid ${accent}30`,
          }}
        >
          {role}
        </span>

        {/* Description */}
        <p className="text-[13px] text-white/45 leading-relaxed font-body mb-5 min-h-[40px]">
          {desc}
        </p>

        {/* Divider */}
        <div
          className="h-px mx-auto mb-4 transition-all duration-500"
          style={{
            width: hovered ? '80%' : '40%',
            background: `linear-gradient(to right, transparent, ${accent}50, transparent)`,
          }}
        />

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3">
          {social.linkedin && social.linkedin !== '#' && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: hovered ? accent + '15' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${hovered ? accent + '30' : 'rgba(255,255,255,0.08)'}`,
                color: hovered ? accent : 'rgba(255,255,255,0.35)',
              }}
            >
              <FaLinkedin className="text-sm" />
            </a>
          )}
          {social.github && social.github !== '#' && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: hovered ? accent + '15' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${hovered ? accent + '30' : 'rgba(255,255,255,0.08)'}`,
                color: hovered ? accent : 'rgba(255,255,255,0.35)',
              }}
            >
              <FaGithub className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[11px] font-bold tracking-[3px] uppercase px-5 py-2 rounded-full mb-5 font-body">
            Our Dream Team
          </span>

          <h2 className="text-[clamp(30px,5vw,44px)] font-heading font-bold text-white leading-tight mb-4">
            Meet the Minds{' '}
            <span className="bg-gradient-to-r from-brand-mid to-brand-cyan bg-clip-text text-transparent">
              Behind the Code
            </span>
          </h2>

          <p className="text-white/50 text-sm max-w-lg mx-auto leading-relaxed font-body">
            A dedicated squad of experts delivering exceptional digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto relative z-10">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;
