'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Music2, VolumeX, Heart, Sparkles } from 'lucide-react';

const weddingDate = new Date('2026-12-04T17:00:00+05:30').getTime();
const saveTheDateVideo = 'https://xuk8mrqifju4zmcf.public.blob.vercel-storage.com/IMG_1665.MOV';
const photos = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85', alt: 'Romantic wedding details' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85', alt: 'A celebration of love' },
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85', alt: 'Wedding couple holding hands' },
];

function FloralMark({ className = '' }: { className?: string }) { return <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M60 106C60 79 58 48 60 14M60 74C42 72 31 59 30 42C48 43 60 55 60 74ZM60 88C77 85 91 70 91 53C74 55 61 69 60 88Z" stroke="currentColor" strokeWidth="1.1"/><path d="M60 39C45 28 49 14 60 8C71 14 75 28 60 39ZM60 39C43 40 34 29 39 17C52 18 59 26 60 39ZM60 39C77 40 86 29 81 17C68 18 61 26 60 39Z" stroke="currentColor" strokeWidth="1.1"/></svg> }

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [musicOn, setMusicOn] = useState(false);
  useEffect(() => {
    const update = () => { const diff = Math.max(0, weddingDate - Date.now()); setTimeLeft({ days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 }); };
    update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer);
  }, []);
  const reveal = () => { setOpened(true); window.setTimeout(() => document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' }), 550); };
  return <main>
    
    <AnimatePresence>
      {!opened && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-[#f8f4ec]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <video
            className="absolute inset-0 h-full w-full object-contain"
            src={saveTheDateVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={reveal}
            onError={() => {
              console.error('The Save the Date video could not be loaded.');
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />

          <div className="pointer-events-none absolute inset-x-0 bottom-[12%] z-10 px-5 text-center text-white">
            <p className="mb-3 text-[10px] uppercase tracking-[0.38em] text-[#f3dfb6] sm:text-xs">
              Save the Date
            </p>

            <h1 className="text-4xl font-normal sm:text-6xl">
              Shashitha <span className="italic text-[#ead4a7]">&</span> Ashani
            </h1>

            <div className="mx-auto mt-5 h-px w-14 bg-[#d7bd85]" />

            <p className="mt-4 text-xs tracking-[0.2em] text-white/90 sm:text-sm">
              04 · 12 · 2026
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0 border-[10px] border-[#f5ead5]/25 sm:border-[18px]" />

          <button
            className="absolute bottom-5 right-5 z-20 rounded-full border border-white/60 bg-black/30 px-4 py-2 text-xs text-white"
            onClick={reveal}
          >
            Skip video
          </button>
        </motion.div>
      )}
    </AnimatePresence>

    <button className="music-toggle" onClick={() => setMusicOn(v => !v)} aria-label={musicOn ? 'Turn music off' : 'Turn music on'}>{musicOn ? <Music2 size={16}/> : <VolumeX size={16}/>}<span>{musicOn ? 'Music on' : 'Music off'}</span></button>
    <section className="opening" aria-label="Open your invitation">
      <div className="opening-grain" />
      <FloralMark className="opening-flower flower-left"/><FloralMark className="opening-flower flower-right"/>
      <motion.div className="opening-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}>
        <p className="eyebrow">A little note from our hearts</p><div className="monogram">S <span>&</span> A</div>
        <p className="opening-subtitle">are getting married</p>
        <div className="thin-rule"><span>✦</span></div><p className="opening-date">04 · 12 · 2026</p>
        <button className="open-button" onClick={reveal}><span>{opened ? 'Invitation opened' : 'Open invitation'}</span><ArrowDown size={15}/></button>
      </motion.div>
      <motion.div className={`envelope ${opened ? 'envelope-open' : ''}`} onClick={reveal} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && reveal()} aria-label="Open wedding invitation">
        <div className="envelope-back"/><div className="envelope-letter"><span className="letter-monogram">S <i>&</i> A</span><span className="letter-copy">With love, always</span></div><div className="envelope-front"/><div className="envelope-flap"/><div className="wax-seal">S<span>&</span>A</div>
      </motion.div>
      <p className="scroll-hint">A day to remember <span>·</span> A love to celebrate</p>
    </section>

    <section className="invitation-section section-pad" id="invitation">
      <div className="section-frame" />
      <motion.div className="invite-inner" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8 }}>
        <FloralMark className="section-flower"/><p className="eyebrow">Together with our families</p>
        <p className="invite-intro">With hearts full of love and gratitude,</p><p className="invite-intro">we invite you to join us as we begin</p><p className="invite-intro">our most beautiful chapter yet.</p>
        <h1 className="couple-names"><span>Shashitha</span><i>&</i><span>Ashani</span></h1>
        <p className="invite-join">would be delighted by your presence</p><p className="invite-join">at the celebration of their marriage</p>
        <div className="date-lockup"><span className="date-day">FRIDAY</span><span className="date-number">04</span><span className="date-month">DECEMBER <b>2026</b></span></div>
        <p className="venue-name">Saffron, Wadduwa</p><p className="venue-note">As the sun sets, a new forever begins.</p>
      </motion.div>
    </section>

    <section className="story-section section-pad" id="story"><div className="story-heading"><p className="eyebrow">A story written in the stars</p><h2>Every love story is beautiful.<br/><em>Ours is our favourite.</em></h2><p className="section-description">Somewhere between ordinary days and unexpected moments, we found something extraordinary — each other.</p></div>
      <div className="story-grid"><motion.div className="story-image story-image-tall" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><img src={photos[2].src} alt={photos[2].alt}/><span className="image-caption">The beginning of forever</span></motion.div><div className="story-copy"><FloralMark className="story-flower"/><span className="story-number">01 — OUR JOURNEY</span><h3>Two hearts.<br/><em>One beautiful journey.</em></h3><p>From the first hello to all the little moments that became our favourite memories, every step has led us here. And now, we cannot wait to celebrate the next chapter with the people who mean the most to us.</p><div className="heart-line"><span/><Heart size={14}/><span/></div><p className="script-note">See you at the beginning of our forever.</p></div></div>
    </section>

    <section className="countdown-section"><div className="countdown-overlay"/><div className="countdown-content"><Sparkles size={18} strokeWidth={1}/><p className="eyebrow">The countdown to forever</p><h2>Until we say <em>“I do”</em></h2><div className="countdown-grid">{Object.entries(timeLeft).map(([label, value]) => <div className="countdown-unit" key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div><p className="countdown-note">We can’t wait to celebrate with you.</p></div></section>

    <section className="details-section section-pad" id="details"><div className="details-heading"><p className="eyebrow">The day we’ve been dreaming of</p><h2>Join us for <em>the celebration</em></h2><p className="section-description">A little gathering, a lot of love, and memories we’ll carry forever.</p></div><div className="details-cards"><article className="detail-card"><div className="detail-icon"><CalendarDays size={21}/></div><p className="eyebrow">When</p><h3>Friday, 4 December</h3><p>Two thousand and twenty-six</p><div className="detail-rule"/><p className="detail-small">Ceremony & celebration</p><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Shashitha%20%26%20Ashani%20Wedding&dates=20261204T113000Z/20261204T160000Z&details=Wedding%20celebration%20of%20Shashitha%20and%20Ashani&location=Saffron%2C%20Wadduwa" target="_blank" rel="noreferrer" className="text-link">Save the date <ArrowUpRight size={14}/></a></article><article className="detail-card"><div className="detail-icon"><MapPin size={21}/></div><p className="eyebrow">Where</p><h3>Saffron</h3><p>Wadduwa, Sri Lanka</p><div className="detail-rule"/><p className="detail-small">Our place for the evening</p><a href="https://www.google.com/maps/search/?api=1&query=Saffron+Wadduwa+Sri+Lanka" target="_blank" rel="noreferrer" className="text-link">Get directions <ArrowUpRight size={14}/></a></article></div><p className="details-footnote">Exact ceremony and reception times will be shared with your invitation.</p></section>

    <section className="gallery-section section-pad" id="gallery"><div className="gallery-heading"><div><p className="eyebrow">Little moments, big love</p><h2>A glimpse into <em>our world</em></h2></div><p className="gallery-note">Our memories, captured<br/>one frame at a time.</p></div><div className="gallery-grid">{photos.map((photo, i) => <motion.figure key={photo.src} className={`gallery-photo photo-${i + 1}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12, duration: .65 }}><img src={photo.src} alt={photo.alt}/><figcaption>Love, in a moment</figcaption></motion.figure>)}</div><p className="gallery-placeholder-note">Sample images shown — replace these with your pre-wedding photographs.</p></section>

    <section className="closing-section"><FloralMark className="closing-flower"/><p className="eyebrow">With all our love</p><h2>We saved you <em>a place</em><br/>in our happiest day.</h2><p>Having you with us would mean the world.</p><div className="closing-monogram">S <span>&</span> A</div><p className="closing-names">SHASHITHA & ASHANI</p><p className="closing-date">04 · 12 · 2026 &nbsp; | &nbsp; SAFFRON, WADDUWA</p><a href="#top" className="back-top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to the beginning <ArrowUpRight size={14}/></a></section>
    <footer className="site-footer"><span>Made with love, for our favourite people.</span><span>© S & A · 2026</span></footer>
  </main>;
}
