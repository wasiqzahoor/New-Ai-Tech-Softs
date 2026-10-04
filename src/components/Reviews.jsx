import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviewsData = [
  {
    name: "Malik Sharif",
    role: "Aims Colleges",
    company: "AIMS COLLEGES",
    text: "Solid design work by New Ai Tech Softs for Aims Colleges. Clean execution, quick turnaround, and everything was made exactly as required.",
    rating: 5,
  },
  {
    name: "Muhammad Salman",
    role: "Founder & CEO",
    company: "ARISE X ROSE",
    text: "Created engaging reels for our brand with solid attention to detail. The theme was understood quickly, and the final output was exactly what we needed.",
    rating: 5,
  },
  {
    name: "Mushtaq Ahmed",
    role: "CEO",
    company: "THE PATHOLOGY LAB",
    text: "Produced reels for our lab that were clean, and professional. New Ai Tech Softs delivered on time and met all our content requirements perfectly.",
    rating: 5,
  },
  {
    name: "BigLou",
    role: "Software Optimizer",
    company: "OPTIMIZER PRO",
    text: "New Ai Tech Softs developed a robust Windows tweaking utility for us. The project delivery was flawless and the performance boost is significant.",
    rating: 5,
  },
  {
    name: "Lana Houts",
    role: "Podcast Host",
    company: "THE AI CHICKS",
    text: "The AI Chicks website and podcast platform built by New Ai Tech Softs have exceeded our expectations. Their technical expertise is impressive.",
    rating: 5,
  },
  {
    name: "Mudassir",
    role: "CEO & Founder",
    company: "PRIMEZTECH",
    text: "I've worked with many teams, but New Ai Tech Softs stands out for their efficiency and top-notch code quality. Highly professional team.",
    rating: 5,
  },
  {
    name: "Usama Saqlain",
    role: "CEO & Founder",
    company: "HECTA AI",
    text: "New Ai Tech Softs took our tech academy to the next level. Their custom web solutions perfectly fit our business requirements.",
    rating: 5,
  },
  {
    name: "Ahmed Raza",
    role: "Marketing Director",
    company: "GROWTH STUDIO",
    text: "The social media management and content creation by New Ai Tech Softs transformed our online presence. Engagement increased by 300% in just two months.",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    role: "Founder",
    company: "BLOOM BOUTIQUE",
    text: "Our e-commerce website built by New Ai Tech Softs is stunning and performant. Sales increased significantly after the redesign. Highly recommend their work.",
    rating: 5,
  },
  {
    name: "Hassan Ali",
    role: "CTO",
    company: "NEXUS LABS",
    text: "New Ai Tech Softs delivered a complex SaaS platform on time and within budget. Their MERN stack expertise is top-tier. Will work with them again.",
    rating: 5,
  },
  {
    name: "Sara Malik",
    role: "Operations Head",
    company: "SERVE CONNECT",
    text: "The mobile app they developed for our food delivery business is smooth and reliable. Customer satisfaction improved dramatically after launch.",
    rating: 5,
  },
  {
    name: "Imran Shah",
    role: "Managing Director",
    company: "AL FATAH GROUP",
    text: "New Ai Tech Softs built our corporate website with exceptional attention to detail. The design is modern, fast, and exactly what we envisioned.",
    rating: 5,
  },
  {
    name: "Nadia Bibi",
    role: "Founder",
    company: "SKIN GLOW CLINIC",
    text: "Our clinic management system streamlined all our operations. Booking, patient records, and billing all in one place. Thank you New Ai Tech Softs!",
    rating: 5,
  },
  {
    name: "Kamran Tariq",
    role: "Product Manager",
    company: "FINTECH SOLUTIONS",
    text: "Built a secure payment gateway integration for us. The code quality was excellent and the documentation was thorough. Great team to work with.",
    rating: 5,
  },
  {
    name: "Ayesha Noor",
    role: "Creative Director",
    company: "DESIGN HIVE",
    text: "New Ai Tech Softs brought our Figma designs to life pixel-perfect. Their frontend development skills are outstanding. Clean, semantic code every time.",
    rating: 5,
  },
];

const ReviewCard = ({ name, role, company, text, rating }) => (
  <div className="flex-shrink-0 w-[360px] md:w-[380px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.10] rounded-2xl p-7 flex flex-col relative overflow-hidden group hover:border-brand-mid/25 transition-colors duration-400">
    <div className="absolute top-5 right-5 text-white/[0.04] text-6xl">
      <FaQuoteLeft />
    </div>
    <div className="flex gap-1 mb-5">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="text-[#FF6A00] text-sm" />
      ))}
    </div>
    <p className="text-white/65 font-body text-[15px] leading-relaxed mb-6 flex-1 min-h-[120px]">
      <span className="text-[#FF6A00] text-lg font-bold">"</span>
      {text}
      <span className="text-[#FF6A00] text-lg font-bold">"</span>
    </p>
    <div className="w-full h-px bg-white/[0.08] mb-5" />
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={`https://ui-avatars.com/api/?name=${name}&background=0C447C&color=fff&bold=true`}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-11 h-11 rounded-full border border-white/10"
        />
        <div>
          <p className="font-bold text-white text-sm font-heading">{name}</p>
          <p className="text-xs text-white/40 font-body">{role}</p>
        </div>
      </div>
      <span className="text-[10px] font-bold tracking-wider text-white/30 font-body uppercase bg-white/[0.06] px-3 py-1.5 rounded-full border border-white/[0.08]">
        {company}
      </span>
    </div>
  </div>
);

const Reviews = () => {
  const doubledReviews = [...reviewsData, ...reviewsData];

  return (
    <section className="relative py-24 md:py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-sm bg-[#FF6A00] rotate-45" />
            <span className="text-[#FF6A00] text-[11px] font-bold tracking-[3px] uppercase font-body">
              Reviews
            </span>
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-heading font-bold text-white leading-[1.1] max-w-2xl">
            Here's what people say about our work.
          </h2>
        </div>
      </div>

      <div className="reviews-track-wrapper relative w-full overflow-hidden py-2">
        <div className="reviews-track flex gap-6 w-max">
          {doubledReviews.map((rev, i) => (
            <ReviewCard
              key={i}
              name={rev.name}
              role={rev.role}
              company={rev.company}
              text={rev.text}
              rating={rev.rating}
            />
          ))}
        </div>
      </div>

      <style>{`
        .reviews-track {
          animation: reviewsMarquee 60s linear infinite;
        }
        .reviews-track-wrapper:hover .reviews-track {
          animation-play-state: paused;
        }
        @keyframes reviewsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
};

export default Reviews;
