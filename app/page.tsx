import Image from "next/image";
import { 
  Shield, Zap, Layout, CheckCircle2, Menu, X, 
  BarChart3, Lock, Fingerprint, List, FileText, ArrowRight,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Cctv, ShieldAlert, ShieldCheck, BrickWall, Check 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white font-sans selection:bg-[#4C2A56]/50 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">PentAi.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">SecrtChat</a>
            <a href="#" className="hover:text-white transition-colors">GenPen</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button className="hidden md:block bg-[#3D1D47] hover:bg-[#4C2A56] text-white px-6 py-2 rounded-lg text-sm font-medium transition-all border border-white/10 shadow-lg shadow-purple-900/10">
            Dashboard
          </button>

          <button className="md:hidden text-gray-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden flex flex-col items-center">
        {/* Decorative Background Glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4C2A56] opacity-[0.15] blur-[120px] rounded-full" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-balance">
            Lorem ipsum dolor sit amet <br /> consectetur
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est vivamus mauris fames et. Sed lacus purus in tellus.
          </p>
          
          <div className="pt-6">
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-xl">
               Get Started
            </button>
          </div>
        </div>

        {/* Supporters Logo Strip */}
        <div className="mt-40 w-full max-w-6xl mx-auto text-center space-y-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-300">Our Supporters</p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 hover:opacity-100 transition-opacity">
                {['Supporter-logo', 'Supporter-logo', 'Supporter-logo', 'Supporter-logo', 'Supporter-logo'].map((logo, i) => (
                    <span key={i} className="text-lg font-bold tracking-tight text-white cursor-default">
                        {logo}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* --- MAIN DASHBOARD PREVIEW --- */}
      <section className="px-6 py-20 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">Lorem ipsum dolor sit amet <br /> consectetur.</h2>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla</p>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(76,42,86,0.3)]">
             <Image 
               src="/dashboard.png" 
               alt="Financial Dashboard" 
               width={1200} 
               height={800} 
               className="w-full h-auto"
               priority
             />
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Lorem ipsum dolor sit amet <br /> consectetur.</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-[#161616] rounded-3xl border border-white/5 p-12 text-center transition-all hover:bg-[#1c1c1c] hover:border-white/10">
              <h3 className="text-7xl font-bold text-white mb-6">23%</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                Consequat netus <strong className="text-gray-300 font-medium">consequat</strong> tortor vitae cursus nullam tincidunt urna. <strong className="text-gray-300 font-medium">Tristique</strong> leo.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Lorem Ipsum <br /> Dollar
            </h2>
            <p className="text-gray-400 text-base mb-12 max-w-sm leading-relaxed">
                Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo consequat.
            </p>
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
                 <div className="absolute inset-0 bg-[#4C2A56] opacity-20 blur-[60px] rounded-full"></div>
                 <Image src="/lock.png" alt="Lock 3D" width={200} height={200} className="object-contain relative z-10 drop-shadow-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[160px]">
            {/* Box 1 */}
            <div className="bg-[#161616] p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-white/10 transition-all">
               <div className="p-3 bg-white/5 rounded-xl"><Lock className="w-6 h-6 text-white" /></div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Lorem Ipsum <br/> Dollar</span>
            </div>
            {/* Box 2 (Wide) */}
            <div className="col-span-2 bg-[#161616] p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-white/10 transition-all">
               <div className="p-3 bg-white/5 rounded-xl"><Cctv className="w-8 h-8 text-white" /></div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Lorem Ipsum <br/> Dollar</span>
            </div>
            {/* Box 3 (Wide) */}
            <div className="col-span-2 bg-[#161616] p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-white/10 transition-all">
               <div className="p-3 bg-white/5 rounded-xl"><Fingerprint className="w-10 h-10 text-white" /></div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Lorem Ipsum Dollar</span>
            </div>
            {/* Box 4 (Tall) */}
            <div className="row-span-2 bg-[#161616] p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-white/10 transition-all">
               <div className="p-4 bg-white/5 rounded-xl"><ShieldAlert className="w-12 h-12 text-white" /></div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Lorem Ipsum <br/> Dollar</span>
            </div>
            {/* Box 5 */}
            <div className="bg-[#161616] p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-white/10 transition-all">
               <div className="p-3 bg-white/5 rounded-xl"><ShieldCheck className="w-6 h-6 text-white" /></div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Lorem Ipsum <br/> Dollar</span>
            </div>
            {/* Box 6 */}
            <div className="bg-[#161616] p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:border-white/10 transition-all">
               <div className="p-3 bg-white/5 rounded-xl"><BrickWall className="w-6 h-6 text-white" /></div>
               <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Lorem Ipsum <br/> Dollar</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMAGE COMPARISON SECTION --- */}
      <section className="relative py-40 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 relative z-10 pb-20">
            {/* Left Column */}
            <div className="space-y-12">
                <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#161616] shadow-2xl p-2">
                    <Image src="/image1.png" alt="Dashboard" width={600} height={400} className="rounded-[1.6rem] w-full" />
                </div>
                <div className="space-y-4">
                     <h3 className="text-4xl font-light text-white leading-tight">
                        Lorem Ipsum <span className="font-bold italic">Dolar Sed</span> <br /> congue
                     </h3>
                </div>
                <div className="space-y-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex gap-4 items-start group">
                            <div className="mt-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                                <Check className="w-3.5 h-3.5 text-black stroke-[4px]" />
                            </div>
                            <p className="text-gray-400 text-[15px] leading-relaxed">
                                Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
                <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-[#161616] shadow-2xl p-2">
                    <Image src="/image2.png" alt="Transactions" width={600} height={400} className="rounded-[1.6rem] w-full" />
                </div>
                <div className="space-y-4">
                     <h3 className="text-4xl font-light text-white leading-tight">
                        Lorem Ipsum <span className="font-bold italic">Dolar Sed</span> <br /> congue
                     </h3>
                </div>
                <div className="space-y-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex gap-4 items-start group">
                            <div className="mt-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                                <Check className="w-3.5 h-3.5 text-black stroke-[4px]" />
                            </div>
                            <p className="text-gray-400 text-[15px] leading-relaxed">
                                Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* SMILE CURVE DECORATION */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
            <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none">
                <path d="M0 10 Q 720 120 1440 10" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                <path d="M0 10 Q 720 120 1440 10" stroke="url(#lineGradient)" strokeWidth="3" strokeOpacity="0.4" fill="none" />
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="white" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
      </section>

      {/* --- FEATURE ACCORDION SECTION --- */}
      <section className="py-40 bg-[#0D0D0D]">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-5xl font-bold mb-24">Lorem ipsum dolor</h2>
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-6">
                    <div className="p-8 rounded-3xl border border-white/10 bg-[#161616] relative overflow-hidden transition-all">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4C2A56]"></div>
                        <h4 className="text-xl font-bold mb-3">Feature 1</h4>
                        <p className="text-gray-400 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. 
                            In enim tortor sed libero velit lectus.
                        </p>
                    </div>

                    {['Feature 2', 'Feature 3'].map((feat) => (
                      <div key={feat} className="p-8 pl-10 border-l border-white/5 opacity-40 hover:opacity-100 transition-all cursor-pointer">
                          <h4 className="text-xl font-bold mb-3">{feat}</h4>
                          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin.</p>
                      </div>
                    ))}
                </div>

                <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#161616] shadow-3xl">
                     <Image src="/image1.png" alt="Feature" width={800} height={800} className="w-full h-auto" />
                </div>
            </div>
         </div>
      </section>

     {/* --- TESTIMONIALS (Masonry Style) --- */}
      <section className="py-40 max-w-[1400px] mx-auto px-6">
         <div className="text-center mb-24">
           <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Tons of others love using PentAi.</h2>
         </div>
         
         <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
            {/* The "columns" utility creates a more natural masonry look than grid */}
            {[
              { name: "Floyd Miles", initial: "F", color: "#FFD4A1", text: "Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis. Ornare at turpis purus leo metus arcu arcu sed faucibus." },
              { name: "Esther Howard", initial: "E", color: "#A1C4FF", text: "Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit." },
              { name: "Erat consectetur", initial: "E", color: "#A1FFBC", text: "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit. Ac enim odio id accumsan pretium quisque venenatis suscipit lobortis." },
              { name: "Mauris pulvinar", initial: "M", color: "#FFA1A1", text: "Quis ultricies molestie massa convallis lectus orci. Accumsan volutpat tempor dapibus nunc." },
              { name: "Egestas mauris", initial: "E", color: "#FFE8A1", text: "Magna id ut eu amet blandit sit auctor gravida. Massa praesent neque et elementum." },
              { name: "Aliquet rhoncus", initial: "A", color: "#DCA1FF", text: "Urna pellentesque in elementum lacus amet tristique. Nec elementum lacus urna quis odio. Posuere facilisi ultricies et donec mauris ornare interdum dui ut." },
              { name: "Placerat nisl", initial: "P", color: "#A1F6FF", text: "Tristique nulla proin augue sit aliquam donec ornare. Aliquam diam egestas egestas feugiat lacinia." },
              { name: "Magna tellus", initial: "M", color: "#A1A9FF", text: "Leo praesent quisque placerat adipiscing eget sed rutrum pharetra. Tellus id vitae arcu lobortis. Elementum eu facilisi quam pellentesque volutpat." }
            ].map((user, i) => (
                <div key={i} className="break-inside-avoid bg-[#161616] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-black" style={{ backgroundColor: user.color }}>{user.initial}</div>
                        <h4 className="font-bold text-[15px]">{user.name}</h4>
                    </div>
                    <p className="text-[13px] text-gray-400 leading-relaxed">{user.text}</p>
                </div>
            ))}
         </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[#222222] rounded-[2rem] p-16 text-center border border-white/5 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20">
              <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                 <circle cx="400" cy="400" r="150" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                 <circle cx="400" cy="400" r="250" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                 <circle cx="400" cy="400" r="350" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
                 <circle cx="400" cy="400" r="450" stroke="white" strokeOpacity="0.1" strokeWidth="1"/>
              </svg>
           </div>
           <div className="relative z-10 space-y-6">
             <h2 className="text-3xl md:text-5xl font-bold text-white">
                <span className="text-gray-400">Ready to</span> get started?
             </h2>
             <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
               Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. 
             </p>
             <div className="pt-6">
                <button className="bg-[#4C2A56] hover:bg-[#593266] text-white px-8 py-3 rounded-full text-sm font-medium transition-all shadow-lg border border-white/10">
                    Book a demo
                </button>
             </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="pt-24 pb-12 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
             <span className="font-bold text-2xl">PentAi.</span>
             <span className="text-gray-500 text-sm">© 2024 by PentAi. All rights reserved.</span>
             <div className="flex items-center gap-6">
                {[Facebook, Instagram, X, Linkedin, Youtube].map((Icon, i) => (
                  <Icon key={i} className="w-5 h-5 text-white hover:text-purple-400 transition-colors cursor-pointer" />
                ))}
             </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[12px] text-gray-500 gap-4">
             <span className="hover:text-white transition-colors cursor-pointer uppercase tracking-widest font-bold">Realised by Right Tail Corp.</span>
             <div className="flex gap-10">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}