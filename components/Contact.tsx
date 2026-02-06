
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', query: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const socialLinkClass = "inline-flex items-center px-6 py-3.5 border-2 border-black/10 text-black rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:border-black hover:bg-black hover:text-white hover:scale-105 active:scale-95";

  return (
    <section id="contact" className="py-48 px-6 md:px-12 bg-white/80 backdrop-blur-3xl relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-48">
            <p className="text-[10px] font-black tracking-[0.5em] uppercase text-black mb-10">Inquiries & Doubts</p>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-12 tracking-tighter leading-[0.9] text-black">
              Got a query? <br /> <span className="italic font-normal">Ask away.</span>
            </h2>
            
            <div className="space-y-12">
              <p className="text-xl text-black/70 max-w-sm leading-relaxed">
                Whether it's a doubt about a project, a collaboration idea, or just a quick question about design — I'm here to answer.
              </p>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-black/40 mb-4">Alternative Contact</p>
                  <a href="mailto:naamya.design@gmail.com" className="group flex items-center gap-4 text-2xl md:text-3xl font-serif italic text-black hover:text-[#ff4d00] transition-colors w-fit">
                    naamya.design@gmail.com
                    <div className="w-8 h-[1px] bg-black/20 group-hover:bg-[#ff4d00] group-hover:w-12 transition-all"></div>
                  </a>
                </div>
                
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-black/40 mb-4">Social Presence</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className={socialLinkClass}>Instagram</a>
                    <a href="#" className={socialLinkClass}>Behance</a>
                    <a href="#" className={socialLinkClass}>LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-14 rounded-[2.5rem] border border-black/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="group relative">
                <label className="text-[10px] font-black tracking-widest uppercase text-black/40 mb-2 block transition-all group-focus-within:text-black">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-black/5 py-4 outline-none focus:border-black transition-colors font-serif text-2xl placeholder:text-black/5"
                  placeholder="John Doe"
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] font-black tracking-widest uppercase text-black/40 mb-2 block transition-all group-focus-within:text-black">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-black/5 py-4 outline-none focus:border-black transition-colors font-serif text-2xl placeholder:text-black/5"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] font-black tracking-widest uppercase text-black/40 mb-2 block transition-all group-focus-within:text-black">Your Query / Doubt</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.query}
                  onChange={(e) => setFormData({...formData, query: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-black/5 py-4 outline-none focus:border-black transition-colors font-serif text-2xl resize-none placeholder:text-black/5"
                  placeholder="Tell me what's on your mind..."
                />
              </div>

              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="w-full group relative bg-black text-white py-8 rounded-2xl overflow-hidden transition-all hover:bg-black hover:scale-[1.01] active:scale-[0.98] disabled:bg-black/40 shadow-xl shadow-black/10"
              >
                <span className={`flex items-center justify-center gap-4 text-sm font-black tracking-[0.5em] uppercase transition-all ${status !== 'idle' ? 'opacity-0' : 'opacity-100'}`}>
                  Send Query
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-2 transition-transform">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                
                {status === 'sending' && (
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-black tracking-[0.5em] uppercase">
                    Processing...
                  </span>
                )}
                
                {status === 'sent' && (
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-black tracking-[0.5em] uppercase bg-green-600">
                    Query Received
                  </span>
                )}
              </button>
            </form>

            <div className="mt-16 pt-10 border-t border-black/5 grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] font-black tracking-widest uppercase text-black/40 mb-4">Location</p>
                <p className="text-xs font-bold text-black">New Delhi, IN</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black tracking-widest uppercase text-black/40 mb-4">Availability</p>
                <p className="text-xs font-bold text-black">Open for Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
