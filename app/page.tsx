'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Music2, VolumeX, Heart, Sparkles } from 'lucide-react';

const weddingDate = new Date('2026-12-04T19:00:00+05:30').getTime();
const saveTheDateVideo = 'https://xuk8mrqifju4zmcf.public.blob.vercel-storage.com/IMG_1665.MOV';
const photos = [
  { src: 'https://qc0m9d97iu3krw1r.private.blob.vercel-storage.com/WBP_4595.jpg.jpeg?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfcWMwbTlEOTdJdTNLUlcxUiIsIm93bmVySWQiOiJ0ZWFtX3VYS0xFcTZ3ekdtR2hmSWpDbnVWWm9oYSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzkzNzUwNTg3ODM5LCJpYXQiOjE3OTM3MDczODc5OTd9.k0PlCId0bQU1wsJzOutLR-XX8-2ln-da3KjTfKsgi3I&vercel-blob-signature=AqonK3O9jJ9yczknuPg2CKemj-OlG4LWZMMKueq_68Y', alt: 'Moments to Remember' },
  { src: 'https://qc0m9d97iu3krw1r.private.blob.vercel-storage.com/WBP_4555.jpg.jpeg?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfcWMwbTlEOTdJdTNLUlcxUiIsIm93bmVySWQiOiJ0ZWFtX3VYS0xFcTZ3ekdtR2hmSWpDbnVWWm9oYSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzkzNzUwNTEwMDE3LCJpYXQiOjE3OTM3MDczMTAxNzN9.Zcnp3sAj_EsQ1Km7rhFPOLBM53p9pnIYIclBrzIyVF8&vercel-blob-signature=Jpgv5kRnefrFmQdJavB3Q1RJvoo2x71BgQ70Qhr9K9A', alt: 'Love in the Moment' },
  { src: 'https://sacfsjdvjdfbvjdfbjskdbvfjdkbd.dfbb', alt: 'A Little More Us' },
];
const photoCaptions = ['Moments to Remember', 'Love in the Moment', 'A Little More Us'];
const storyPhoto = { src: 'https://qc0m9d97iu3krw1r.private.blob.vercel-storage.com/WBP_4575.jpg.jpeg?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfcWMwbTlEOTdJdTNLUlcxUiIsIm93bmVySWQiOiJ0ZWFtX3VYS0xFcTZ3ekdtR2hmSWpDbnVWWm9oYSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzkzNzQ1NjI5ODM4LCJpYXQiOjE3OTM3MDI0MzAwMzN9.S1PEZ_C3MgxJkiLCKfcjrewSXbJCPBo2ncKh4mYpVrw&vercel-blob-signature=Cx9KSaCrSZdMFLcBMqfSYXOD2djCj9Sur0dO-1tNL8k', alt: 'Wedding couple holding hands' };

function FloralMark({ className = '' }: { className?: string }) { return <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M60 106C60 79 58 48 60 14M60 74C42 72 31 59 30 42C48 43 60 55 60 74ZM60 88C77 85 91 70 91 53C74 55 61 69 60 88Z" stroke="currentColor" strokeWidth="1.1" /><path d="M60 39C45 28 49 14 60 8C71 14 75 28 60 39ZM60 39C43 40 34 29 39 17C52 18 59 26 60 39ZM60 39C77 40 86 29 81 17C68 18 61 26 60 39Z" stroke="currentColor" strokeWidth="1.1" /></svg> }

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [musicOn, setMusicOn] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState('');
  const [rsvpSending, setRsvpSending] = useState(false);
  const [attendance, setAttendance] = useState<'yes' | 'no' | ''>('');
  const [rsvpTeam, setRsvpTeam] = useState<'bride' | 'groom' | ''>('');
  const [rsvpRelationship, setRsvpRelationship] = useState<'office' | 'friend' | ''>('');
  const [rsvpGuests, setRsvpGuests] = useState<'1' | '2' | ''>('');
  const [saveDateVisible, setSaveDateVisible] = useState(true);
  useEffect(() => {
    const update = () => { const diff = Math.max(0, weddingDate - Date.now()); setTimeLeft({ days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 }); };
    update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer);
  }, []);
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.story-heading, .story-copy, .countdown-section, .gallery-heading, .details-section, .closing-section, .rsvp-section');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    elements.forEach(element => {
      element.dataset.scrollFade = '';
      observer.observe(element);
    });
    return () => observer.disconnect();
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

          {/* full video
          <video
            className="absolute inset-0 h-full w-full object-cover"
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
          */}
          {/* Blurred background  blur-sm blur blur-md blur-lg blur-2xl*/}
          <video
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-md"
            src={saveTheDateVideo}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />

          {/* Main video — full frame visible */}
          <video
            className="absolute inset-0 h-full w-full object-contain"
            src={saveTheDateVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={event => {
              const video = event.currentTarget;
              if (video.currentTime >= 16) {
                setSaveDateVisible(false);
              }
            }}
            onEnded={reveal}
            onError={() => {
              console.error('The Save the Date video could not be loaded.');
            }}
          />



          <motion.div
            className="pointer-events-none absolute inset-0"
            animate={{ opacity: saveDateVisible ? 1 : 0 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />

            <div className="absolute inset-x-0 bottom-[12%] z-10 px-5 text-center text-white">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.4em] text-[#f7ebd6]/90 sm:text-xs">
                Save the Date
              </p>
              <h1 className="save-date-names text-4xl font-normal sm:text-6xl">
                Ashani <span className="italic text-[#ead4a7]">&</span> Shashitha
              </h1>

              <div className="mx-auto mt-5 h-px w-14 bg-[#d7bd85]" />
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-0 border-[10px] border-[#f5ead5]/25 sm:border-[18px]" />



          <button
            className="absolute bottom-5 right-5 z-20 rounded-full border border-white/60 bg-black/30 px-4 py-2 text-xs text-white"
            onClick={reveal}
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>

    <button className="music-toggle" onClick={() => setMusicOn(v => !v)} aria-label={musicOn ? 'Turn music off' : 'Turn music on'}>{musicOn ? <Music2 size={16} /> : <VolumeX size={16} />}<span>{musicOn ? 'Music on' : 'Music off'}</span></button>


    <motion.section
      className="invitation-section section-pad"
      id="invitation"
      initial={{ opacity: 0, y: 12 }}
      animate={opened ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="section-frame" />
      <motion.div className="invite-inner" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8 }}>
        <FloralMark className="section-flower" /><p className="eyebrow">Together with our families</p>
        <p className="invite-intro">With hearts full of love and gratitude,</p><p className="invite-intro">we invite you to join us as we begin</p><p className="invite-intro">our forever together.</p>
        <h1 className="couple-names"><span>Ashani</span><i>&</i><span>Shashitha</span></h1>
        <p className="invite-join">would be delighted by your presence</p><p className="invite-join">at the celebration of their marriage</p>
        <div className="date-lockup"><span className="date-day">FRIDAY</span><span className="date-number">04</span><span className="date-month">DECEMBER</span></div>
        <p className="event-time">From 7 PM onwards</p>
        <p className="venue-name">Saffron, Wadduwa</p><br /><p className="venue-note">As the sun sets, a new forever begins.</p>
      </motion.div>
    </motion.section>

    <section className="story-section section-pad" id="story"><div className="story-heading"><p className="eyebrow">SOME STORIES ARE WRITTEN BY DESTINY</p><h2><span className="story-title-first-line">We were closer than we knew.</span><br /><em>Until life brought us together.</em></h2><p className="section-description">We were once part of the same little world, yet complete strangers to each other,never imagining that life would bring us together years later.</p></div>
      <div className="story-grid"><motion.div className="story-image story-image-tall" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><img src={storyPhoto.src} alt={storyPhoto.alt} /><span className="image-caption">The beginning of forever</span></motion.div><div className="story-copy"><FloralMark className="story-flower" /><span className="story-number">A LITTLE BIT OF DESTINY</span><h3>Different paths.<br /><em>One beautiful destination.</em></h3><p>One starry night brought two strangers together, and a thousand conversations made them each other's favourite person. Perhaps life was simply waiting for the right moment to bring us together.</p><div className="heart-line"><span /><Heart size={14} /><span /></div></div></div>
    </section>

    <section className="countdown-section"><div className="countdown-overlay" /><div className="countdown-content"><Sparkles size={18} strokeWidth={1} /><p className="eyebrow">The countdown to our day</p><h2>Until we say <em>“I do”</em></h2><div className="countdown-grid">{Object.entries(timeLeft).map(([label, value]) => <div className="countdown-unit" key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div><p className="countdown-note">We can’t wait to celebrate with you.</p></div></section>



    <section className="gallery-section section-pad" id="gallery"><div className="gallery-heading"><div><p className="eyebrow">Little moments, big love</p><h2>A glimpse into <em>our world</em></h2></div></div><div className="gallery-grid">{photos.map((photo, i) => <motion.figure key={photo.src} className={`gallery-photo photo-${i + 1}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12, duration: .65 }}><img src={photo.src} alt={photo.alt} /><figcaption>{photoCaptions[i]}</figcaption></motion.figure>)}</div></section>

    <section className="details-section section-pad" id="details">
      <div className="details-heading">{/* <p className="eyebrow">The day we’ve been dreaming of</p> */}
        <h2>Join us for <em>the celebration</em></h2>
        <p className="section-description">A little gathering, a lot of love, and memories we’ll carry forever.</p></div>
      <div className="details-actions" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'clamp(12px, 4vw, 28px)', width: 'min(100%, 520px)', margin: '0 auto' }}>
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ashani%20%26%20Shashitha%27s%20Wedding&dates=20261204T133000Z/20261204T183000Z&details=Wedding%20celebration%20of%20Ashani%20and%20Shashitha&location=Saffron%2C%20Wadduwa" target="_blank" rel="noreferrer" className="text-link detail-action" style={{ position: 'relative', display: 'flex', width: '100%', minWidth: 0, alignItems: 'center', justifyContent: 'center', padding: '0 32px 0 12px', textAlign: 'center' }}>Save the date <CalendarDays size={14} style={{ position: 'absolute', right: 12, flexShrink: 0 }} /></a>
        <a href="https://www.google.com/maps/search/?api=1&query=Saffron+Wadduwa+Sri+Lanka" target="_blank" rel="noreferrer" className="text-link detail-action" style={{ position: 'relative', display: 'flex', width: '100%', minWidth: 0, alignItems: 'center', justifyContent: 'center', padding: '0 32px 0 12px', textAlign: 'center' }}>Get directions <MapPin size={14} style={{ position: 'absolute', right: 12, flexShrink: 0 }} /></a>
      </div>
    </section>

    <section className="closing-section"><FloralMark className="closing-flower" />
      <p className="eyebrow">With all our love</p>
      <h2>We saved you <em>a place</em><br />in our happiest day.</h2>
      <p>Having you with us would mean the world.</p></section>


    <section className="rsvp-section section-pad" id="rsvp">
      <div className="rsvp-inner">
        <p className="eyebrow">Kindly reply</p>
        <h2>Will you join <em>us?</em></h2>
        {/* <p className="rsvp-intro">Please let us know if you can celebrate with us.</p>
        <p className="rsvp-note">Your reply will be shared privately with the couple.</p> */}
        <form className="rsvp-form" onSubmit={async event => {
          event.preventDefault();
          const form = event.currentTarget;
          const formData = new FormData(form);
          if (!attendance) {
            setRsvpStatus('Please choose a response.');
            return;
          }
          if (attendance === 'yes' && (!rsvpTeam || !rsvpRelationship || !rsvpGuests)) {
            setRsvpStatus('Please complete each RSVP question before submitting.');
            return;
          }
          setRsvpSending(true);
          setRsvpStatus('');
          try {
            const response = await fetch('/api/rsvp', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: formData.get('name'),
                attendance,
                guests: attendance === 'yes' ? Number(rsvpGuests) : 0,
                team: attendance === 'yes' ? rsvpTeam : null,
                relationship: attendance === 'yes' ? rsvpRelationship : null,
                website: formData.get('website'),
              }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'We could not save your RSVP. Please try again.');
            setRsvpStatus('Thank you. Your RSVP has been received.');
            form.reset();
            setAttendance('');
            setRsvpTeam('');
            setRsvpRelationship('');
            setRsvpGuests('');
          } catch (error) {
            setRsvpStatus(error instanceof Error ? error.message : 'We could not save your RSVP. Please try again.');
          } finally {
            setRsvpSending(false);
          }
        }}>
          <div className="rsvp-honeypot" aria-hidden="true"><label>{/* Leave this field empty */}<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <fieldset className="rsvp-question rsvp-response" aria-label="RSVP response">
            <div className="rsvp-options">
              <button type="button" className={`rsvp-option${attendance === 'yes' ? ' is-selected' : ''}`} aria-pressed={attendance === 'yes'} onClick={() => { setAttendance('yes'); setRsvpTeam(''); setRsvpRelationship(''); setRsvpGuests(''); setRsvpStatus(''); }}>Joyfully accepts</button>
              <button type="button" className={`rsvp-option${attendance === 'no' ? ' is-selected' : ''}`} aria-pressed={attendance === 'no'} onClick={() => { setAttendance('no'); setRsvpTeam(''); setRsvpRelationship(''); setRsvpGuests(''); setRsvpStatus(''); }}>Regretfully declines</button>
            </div>
          </fieldset>
          {attendance === 'yes' && <>
            <fieldset className="rsvp-question">
              <legend>You're celebrating with</legend>
              <div className="rsvp-options">
                <button type="button" className={`rsvp-option${rsvpTeam === 'bride' ? ' is-selected' : ''}`} aria-pressed={rsvpTeam === 'bride'} onClick={() => { setRsvpTeam('bride'); setRsvpStatus(''); }}>Bride</button>
                <button type="button" className={`rsvp-option${rsvpTeam === 'groom' ? ' is-selected' : ''}`} aria-pressed={rsvpTeam === 'groom'} onClick={() => { setRsvpTeam('groom'); setRsvpStatus(''); }}>Groom</button>
              </div>
            </fieldset>
            <fieldset className="rsvp-question">
              <legend>How do you know us?</legend>
              <div className="rsvp-options">
                <button type="button" className={`rsvp-option${rsvpRelationship === 'office' ? ' is-selected' : ''}`} aria-pressed={rsvpRelationship === 'office'} onClick={() => { setRsvpRelationship('office'); setRsvpStatus(''); }}>Office</button>
                <button type="button" className={`rsvp-option${rsvpRelationship === 'friend' ? ' is-selected' : ''}`} aria-pressed={rsvpRelationship === 'friend'} onClick={() => { setRsvpRelationship('friend'); setRsvpStatus(''); }}>Friend</button>
              </div>
            </fieldset>
          </>}
          <label className="rsvp-name">Your name<input name="name" autoComplete="name" maxLength={120} required /></label>
          {attendance === 'yes' && <fieldset className="rsvp-question rsvp-guest-count">
            <legend>How many are coming along? (Including you!)</legend>
            <div className="rsvp-options">
              <button type="button" className={`rsvp-option${rsvpGuests === '1' ? ' is-selected' : ''}`} aria-pressed={rsvpGuests === '1'} onClick={() => { setRsvpGuests('1'); setRsvpStatus(''); }}>One</button>
              <button type="button" className={`rsvp-option${rsvpGuests === '2' ? ' is-selected' : ''}`} aria-pressed={rsvpGuests === '2'} onClick={() => { setRsvpGuests('2'); setRsvpStatus(''); }}>Two</button>
            </div>
          </fieldset>}
          <button type="submit" className="rsvp-submit" disabled={rsvpSending}>{rsvpSending ? 'Sending…' : 'Submit'}</button>
          {rsvpStatus && <p className="rsvp-status" role="status">{rsvpStatus}</p>}
        </form>
      </div>
    </section>

    <a href="#top" className="back-top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to the beginning <ArrowUpRight size={14} /></a>

    <footer className="site-footer"><span>Made with love, for our favourite people.</span><span>© A & S · 2026</span></footer>
  </main>;
}
