import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  FaCalendarAlt, FaUserAlt, FaArrowLeft, FaSearch,
  FaLinkedin, FaTwitter, FaFacebook, FaRocket, FaWhatsapp
} from 'react-icons/fa';
import { blogData } from '../data/blogData';

const SocialShareIcon = ({ icon, link, colorClass }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-white/40 ${colorClass} text-2xl transition-all hover:scale-125`}
  >
    {icon}
  </a>
);

const parseContent = (content) => {
  if (!content) return [];

  const blocks = content.split('\n\n');
  const elements = [];

  blocks.forEach((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={idx} className="text-2xl md:text-3xl font-heading font-bold text-white mt-10 mb-5 leading-tight">
          {trimmed.replace('## ', '')}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={idx} className="text-xl md:text-2xl font-heading font-bold text-white/90 mt-8 mb-3 leading-tight">
          {trimmed.replace('### ', '')}
        </h3>
      );
    } else if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(l => l.trim().startsWith('- '));
      elements.push(
        <ul key={idx} className="space-y-2.5 my-4 pl-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/60 font-body text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] flex-shrink-0" />
              <span>{item.replace(/^- /, '')}</span>
            </li>
          ))}
        </ul>
      );
    } else if (/^\d+\./.test(trimmed)) {
      const items = trimmed.split('\n').filter(l => /^\d+\./.test(l.trim()));
      elements.push(
        <ol key={idx} className="space-y-3 my-4 pl-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/60 font-body text-base leading-relaxed">
              <span className="mt-0.5 w-6 h-6 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] text-xs font-heading font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <span>{item.replace(/^\d+\.\s*/, '')}</span>
            </li>
          ))}
        </ol>
      );
    } else if (trimmed.startsWith('\u{1F517}')) {
      elements.push(
        <div key={idx} className="my-6 p-4 rounded-xl bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 text-[#8B5CF6] font-heading font-bold text-sm">
          {trimmed.replace(/\u{1F517}\s*/, '')}
        </div>
      );
    } else {
      elements.push(
        <p key={idx} className="text-white/55 font-body text-base leading-[1.85] mb-5">
          {trimmed}
        </p>
      );
    }
  });

  return elements;
};

const BlogDetail = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://newaitechsofts.com/blog/${slug || ''}`;
  const shareUrl = encodeURIComponent(currentUrl);
  const shareTitle = encodeURIComponent(blog?.title || 'Blog Post');
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
  const whatsappShareUrl = `https://wa.me/?text=${shareTitle}%20${shareUrl}`;

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return blogData.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.excerpt.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  React.useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.search-container')) {
        setShowResults(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!blog) {
    return (
      <div className="text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">Article Not Found</h2>
          <Link to="/blog" className="text-[#00D9FF] hover:underline font-body">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  const recentPosts = blogData.filter(b => b.id !== blog.id).slice(0, 3);
  const contentElements = parseContent(blog.content);

  return (
    <div className="text-white min-h-screen pt-20 md:pt-24 pb-20 overflow-hidden">
      <Helmet>
        <title>{blog.title} | New Ai Tech Softs Blog</title>
        <meta name="description" content={blog.excerpt || blog.title + ' - Read this article by New Ai Tech Softs, a leading software house in Islamabad.'} />
        <meta name="keywords" content={`${blog.category || 'tech'}, web development, software house Islamabad, New Ai Tech Softs`} />
        <meta name="author" content={blog.author || 'New Ai Tech Softs'} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://newaitechsofts.com/blog/${blog.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://newaitechsofts.com/blog/${blog.slug}`} />
        <meta property="og:title" content={`${blog.title} | New Ai Tech Softs`} />
        <meta property="og:description" content={blog.excerpt || blog.title} />
        <meta property="og:image" content={blog.img || 'https://newaitechsofts.com/logo.webp'} />
        <meta property="og:site_name" content="New Ai Tech Softs" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={blog.date} />
        <meta property="article:author" content={blog.author || 'New Ai Tech Softs'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://newaitechsofts.com/blog/${blog.slug}`} />
        <meta name="twitter:title" content={`${blog.title} | New Ai Tech Softs`} />
        <meta name="twitter:description" content={blog.excerpt || blog.title} />
        <meta name="twitter:image" content={blog.img || 'https://newaitechsofts.com/logo.webp'} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "description": blog.excerpt || blog.title,
            "image": blog.img || 'https://newaitechsofts.com/logo.webp',
            "author": { "@type": "Person", "name": blog.author || 'New Ai Tech Softs' },
            "publisher": {
              "@type": "Organization",
              "name": "New Ai Tech Softs",
              "logo": { "@type": "ImageObject", "url": "https://newaitechsofts.com/logo.webp" }
            },
            "datePublished": blog.date,
            "dateModified": blog.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://newaitechsofts.com/blog/${blog.slug}`
            },
            "articleSection": blog.category || 'Tech Insights',
            "keywords": `${blog.category || 'tech'}, ${blog.title}, New Ai Tech Softs, software house Islamabad`,
            "url": `https://newaitechsofts.com/blog/${blog.slug}`
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-[#8B5CF6] transition-colors font-heading font-bold uppercase text-xs tracking-widest mb-8">
              <FaArrowLeft /> Back to Insights
            </Link>
            <span className="block bg-[#8B5CF6]/10 text-[#8B5CF6] px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-widest border border-[#8B5CF6]/20 mb-6 w-fit">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-6 max-w-4xl">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-white/40 text-sm font-heading font-bold uppercase tracking-tighter">
              <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#8B5CF6]" /> {blog.date}</span>
              <span className="flex items-center gap-2"><FaUserAlt className="text-[#8B5CF6]" /> {blog.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* --- LEFT SIDE: MAIN CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 py-12"
          >
            {/* Featured Image */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl overflow-hidden bg-black/40 mb-8">
              <img
                src={blog.img}
                alt={blog.title}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/logo.webp'; }}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>

            {/* Article Body */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8 md:p-12">
              <div className="prose-custom">
                {contentElements}
              </div>
            </div>

            {/* Social Share */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8 flex items-center gap-6 mt-8">
              <span className="text-sm font-heading font-bold uppercase text-white/40">Share this:</span>
              <div className="flex gap-4">
                <SocialShareIcon icon={<FaLinkedin />} link={linkedinShareUrl} colorClass="hover:text-[#0077b5]" />
                <SocialShareIcon icon={<FaFacebook />} link={facebookShareUrl} colorClass="hover:text-[#1877f2]" />
                <SocialShareIcon icon={<FaTwitter />} link={twitterShareUrl} colorClass="hover:text-[#1da1f2]" />
                <SocialShareIcon icon={<FaWhatsapp />} link={whatsappShareUrl} colorClass="hover:text-[#25d366]" />
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: SIDEBAR --- */}
          <aside className="space-y-8 py-12 relative z-40">
            {/* Search */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8 relative search-container z-50">
              <h3 className="text-white font-heading font-bold uppercase text-sm tracking-widest mb-4">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Keyword..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
                  onFocus={() => setShowResults(true)}
                  className="w-full px-4 py-3 pr-10 bg-white/[0.06] border border-white/[0.1] rounded-xl text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-[#8B5CF6]/40 transition-colors"
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 text-sm" />
              </div>

              {showResults && searchQuery.trim() && (
                <div className="absolute left-0 right-0 top-full mt-2 mx-8 bg-[#1a1a2e] border border-white/[0.12] rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map((post) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        onClick={() => { setSearchQuery(''); setShowResults(false); }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.06] transition-colors border-b border-white/[0.06] last:border-0"
                      >
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                          <img src={post.img} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-heading font-bold text-white/80 line-clamp-1">{post.title}</p>
                          <p className="text-[10px] text-white/40 font-body">{post.category}</p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-sm text-white/40 font-body">No articles found</p>
                  )}
                </div>
              )}
            </div>

            {/* Recent Posts */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8">
              <h3 className="text-white font-heading font-bold uppercase text-sm tracking-widest mb-6">Recent Insights</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/[0.1]">
                      <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="" />
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-bold text-white/60 group-hover:text-[#8B5CF6] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-white/40 font-heading font-bold uppercase mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8 relative overflow-hidden group">
              <FaRocket className="text-4xl text-[#8B5CF6]/40 mb-4 relative z-10" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4 relative z-10">Have a Project in Mind?</h3>
              <p className="text-white/60 font-body text-sm mb-6 relative z-10">
                Let's turn these insights into a real product for your business.
              </p>
              <Link to="/contact" className="relative z-10">
                <button className="w-full bg-gradient-to-r from-[#8B5CF6] to-purple-600 text-white font-heading font-bold rounded-full py-3 uppercase text-xs tracking-widest shadow-lg shadow-[#8B5CF6]/20 hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 transition-all">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Categories */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] shadow-xl rounded-2xl p-8">
              <h3 className="text-white font-heading font-bold uppercase text-sm tracking-widest mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {['Case Study', 'Web Dev', 'Mobile', 'AI', 'Marketing'].map(cat => (
                  <span key={cat} className="px-4 py-1.5 bg-white/[0.06] text-white/40 text-xs font-heading font-bold rounded-full border border-white/[0.1] hover:text-[#8B5CF6] hover:border-[#8B5CF6]/30 cursor-pointer transition">
                    #{cat}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
