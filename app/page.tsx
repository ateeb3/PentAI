import Image from "next/image";
import { 
  Shield, Zap, Layout, CheckCircle2, Menu, X, 
  BarChart3, Lock, Fingerprint, List, FileText, ArrowRight,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Cctv, ShieldAlert, ShieldCheck, BrickWall, Check 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#4C2A56]/50 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight">PentAi.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">SecrtChat</a>
            <a href="#" className="hover:text-white transition-colors">GenPen</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button className="hidden md:block bg-[#4C2A56] hover:bg-[#593266] text-white px-6 py-2 rounded-lg text-sm font-medium transition-all border border-white/5">
            Dashboard
          </button>

          <button className="md:hidden text-gray-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
        {/* Soft Purple Background Haze */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[#4C2A56] opacity-20 blur-[150px] -z-10 rounded-full" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Lorem ipsum dolor sit amet <br />
            consectetur
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est vivamus mauris fames et. Sed lacus purus in tellus.
          </p>
          
          <div className="pt-8">
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg">
               Get Started
            </button>
          </div>
        </div>

        {/* Supporters */}
        <div className="mt-32 w-full max-w-5xl mx-auto text-center space-y-10">
            <p className="text-lg font-semibold text-white">Our Supporters</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
                {['Supporter-logo', 'Supporter-logo', 'Supporter-logo', 'Supporter-logo', 'Supporter-logo'].map((logo, i) => (
                    <span key={i} className="text-base font-medium tracking-wide text-gray-300 hover:text-white transition-colors cursor-default">
                        {logo}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* --- DASHBOARD IMAGE SECTION (Fixed: Added Text Headers) --- */}
      {/* --- DASHBOARD IMAGE SECTION (Fixed: Removed Purple Glow) --- */}
      <section className="px-6 pb-20 pt-10">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Lorem ipsum dolor sit amet <br /> consectetur.</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla</p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Removed the absolute background gradient div to match the "no background" design */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
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
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Lorem ipsum dolor sit amet <br /> consectetur.</h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-[#222222] rounded-2xl border border-white/5 p-8 text-center relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-6xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent mb-4">23%</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Consequat netus <strong className="text-gray-300">consequat</strong> tortor vitae cursus nullam tincidunt urna. <strong className="text-gray-300">Tristique</strong> leo.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- BENTO GRID --- */}
      <section className="py-24 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lorem Ipsum <br /> Dollar
            </h2>
            <p className="text-gray-400 text-sm mb-12 max-w-xs leading-relaxed">
                Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo consequat.
            </p>
            <div className="relative w-56 h-56 group mx-auto lg:mx-0">
                 <div className="absolute inset-0 bg-[#4C2A56]/30 blur-[50px] rounded-full group-hover:bg-[#4C2A56]/40 transition-all"></div>
                 <Image src="/lock.png" alt="Lock 3D" width={150} height={150} className="object-contain relative z-10 drop-shadow-2xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[140px]">
            <div className="col-span-1 bg-[#222222] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#2a2a2a] transition-colors">
               <Lock className="w-6 h-6 text-white" />
               <span className="text-xs font-medium text-gray-300">Lorem Ipsum<br/>Dollar</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-[#222222] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#2a2a2a] transition-colors">
               <Cctv className="w-8 h-8 text-white" />
               <span className="text-xs font-medium text-gray-300">Lorem Ipsum<br/>Dollar</span>
            </div>
            <div className="col-span-1 md:col-span-2 bg-[#222222] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#2a2a2a] transition-colors">
               <Fingerprint className="w-10 h-10 text-white" />
               <span className="text-xs font-medium text-gray-300">Lorem Ipsum Dollar</span>
            </div>
            <div className="col-span-1 md:col-span-1 md:row-span-2 md:col-start-3 bg-[#222222] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-4 hover:bg-[#2a2a2a] transition-colors">
               <ShieldAlert className="w-10 h-10 text-white mb-2" />
               <span className="text-sm font-medium text-gray-300">Lorem Ipsum<br/>Dollar</span>
            </div>
            <div className="col-span-1 bg-[#222222] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#2a2a2a] transition-colors">
               <ShieldCheck className="w-6 h-6 text-white" />
               <span className="text-xs font-medium text-gray-300">Lorem Ipsum<br/>Dollar</span>
            </div>
            <div className="col-span-1 bg-[#222222] p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center gap-3 hover:bg-[#2a2a2a] transition-colors">
               <BrickWall className="w-6 h-6 text-white" />
               <span className="text-xs font-medium text-gray-300">Lorem Ipsum<br/>Dollar</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- DUAL COLUMNS (FIXED: Smile Curve via SVG) --- */}
      <section className="relative py-32 max-w-7xl mx-auto px-6 overflow-hidden">
        
        {/* Background Particles */}
        <div className="absolute top-24 left-16 w-1 h-1 bg-white/60 rounded-full blur-[0.5px]" />
        <div className="absolute top-36 right-32 w-1.5 h-1.5 bg-white/40 rounded-full blur-[0.5px]" />
        <div className="absolute bottom-60 left-1/2 w-1 h-1 bg-white/30 rounded-full" />
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 relative z-10 pb-40">
            {/* LEFT COLUMN */}
            <div className="space-y-10">
                <div className="bg-[#1C1C21] p-3 rounded-2xl border border-white/5 shadow-2xl relative group">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#121212] border border-white/5">
                        <Image src="/image1.png" alt="Dashboard Preview" fill className="object-cover" />
                    </div>
                </div>
                <div>
                     <h3 className="text-3xl font-normal text-white mb-1">
                        Lorem Ipsum <span className="font-bold">Dolar Sed</span>
                     </h3>
                     <h3 className="text-3xl font-normal text-white">congue</h3>
                </div>
                <div className="space-y-5">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex gap-4 items-start group">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg shadow-white/20">
                                <Check className="w-3 h-3 text-black stroke-[4px]" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10">
                <div className="bg-[#1C1C21] p-3 rounded-2xl border border-white/5 shadow-2xl relative group">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#121212] border border-white/5">
                        <Image src="/image2.png" alt="Transaction Preview" fill className="object-cover" />
                    </div>
                </div>
                <div>
                     <h3 className="text-3xl font-normal text-white mb-1">
                        Lorem Ipsum <span className="font-bold">Dolar Sed</span>
                     </h3>
                     <h3 className="text-3xl font-normal text-white">congue</h3>
                </div>
                <div className="space-y-5">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex gap-4 items-start group">
                            <div className="mt-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg shadow-white/20">
                                <Check className="w-3 h-3 text-black stroke-[4px]" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* --- THE SMILE CURVE (SVG) --- */}
        {/* SVG creates a perfect concave arc that starts high at edges and dips in center */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] overflow-hidden pointer-events-none z-0 translate-y-1">
             <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
                 {/* Path draws a curve from left to right */}
                 <path 
                    d="M0,0 Q720,100 1440,0" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="1"
                 />
                 {/* Optional: Glow under the line */}
                 <path 
                    d="M0,0 Q720,100 1440,0" 
                    fill="none" 
                    stroke="url(#glowGradient)" 
                    strokeWidth="4"
                    strokeOpacity="0.5"
                 />
                 <defs>
                    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="white" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                 </defs>
             </svg>
        </div>
      </section>

      {/* --- FEATURE ACCORDION --- */}
    <section className="relative pt-24 pb-48 bg-[#121212] overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-center text-3xl font-bold mb-16">Lorem ipsum dolor</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Features List */}
                <div className="space-y-6">
                    {/* Active Feature (Boxed) */}
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#1C1C21] shadow-lg relative overflow-hidden group cursor-pointer">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4C2A56]"></div>
                        <h4 className="text-lg font-bold mb-2 text-white">Feature 1</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. 
                            In enim tortor sed libero velit lectus.
                        </p>
                    </div>

                    {/* Inactive Features (Plain Text) */}
                    <div className="p-6 pl-8 border-l border-white/5 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                        <h4 className="text-lg font-bold mb-2 text-white">Feature 2</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin.
                        </p>
                    </div>

                    <div className="p-6 pl-8 border-l border-white/5 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                        <h4 className="text-lg font-bold mb-2 text-white">Feature 3</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin.
                        </p>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="relative">
                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#1C1C21]">
                         <Image 
                           src="/image1.png" 
                           alt="Feature Preview" 
                           width={800} 
                           height={800}
                           className="w-full h-auto object-cover" 
                         />
                    </div>
                </div>
            </div>
         </div>
      </section>

     {/* --- TESTIMONIALS (Fixed: Matched Data & Masonry) --- */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold">Tons of others love using PentAi.</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            
            {/* COLUMN 1 */}
            <div className="space-y-6">
                <div className="bg-[#222222] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FFD4A1] flex items-center justify-center font-bold text-xs text-black">F</div>
                        <h4 className="font-bold text-sm text-white">Floyd Miles</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis. Ornare at turpis purus leo metus arcu arcu sed faucibus.
                    </p>
                </div>
                <div className="bg-[#222222] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FFE8A1] flex items-center justify-center font-bold text-xs text-black">E</div>
                        <h4 className="font-bold text-sm text-white">Egestas mauris</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Magna id ut eu amet blandit sit auctor gravida. Massa praesent neque et elementum.
                    </p>
                </div>
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-6">
                <div className="bg-[#222222] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#A1C4FF] flex items-center justify-center font-bold text-xs text-black">E</div>
                        <h4 className="font-bold text-sm text-white">Esther Howard</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit.
                    </p>
                </div>
                <div className="bg-[#222222] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#DCA1FF] flex items-center justify-center font-bold text-xs text-black">A</div>
                        <h4 className="font-bold text-sm text-white">Aliquet rhoncus</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Urna pellentesque in elementum lacus amet tristique. Nec elementum lacus urna quis odio. Posuere facilisi ultricies et donec mauris ornare interdum dui ut.
                    </p>
                </div>
            </div>

            {/* COLUMN 3 */}
            <div className="space-y-6">
                <div className="bg-[#222222] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#A1FFBC] flex items-center justify-center font-bold text-xs text-black">E</div>
                        <h4 className="font-bold text-sm text-white">Erat consectetur</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit. Ac enim odio id accumsan pretium quisque venenatis suscipit lobortis.
                    </p>
                </div>
                <div className="bg-[#222222] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#A1F6FF] flex items-center justify-center font-bold text-xs text-black">P</div>
                        <h4 className="font-bold text-sm text-white">Placerat nisl</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                         Tristique nulla proin augue sit aliquam donec ornare. Aliquam diam egestas egestas feugiat lacinia. Facilisis sagittis nibh morbi ornare nunc luctus sit.
                    </p>
                </div>
            </div>

            {/* COLUMN 4 */}
            <div className="space-y-6">
                <div className="bg-[#222222] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FFA1A1] flex items-center justify-center font-bold text-xs text-black">M</div>
                        <h4 className="font-bold text-sm text-white">Mauris pulvinar</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Quis ultricies molestie massa convallis lectus orci. Accumsan volutpat tempor dapibus nunc.
                    </p>
                </div>
                <div className="bg-[#222222] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#A1A9FF] flex items-center justify-center font-bold text-xs text-black">M</div>
                        <h4 className="font-bold text-sm text-white">Magna tellus</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Leo praesent quisque placerat adipiscing eget sed rutrum pharetra. Tellus id vitae arcu lobortis. Elementum eu facilisi quam pellentesque volutpat. Dictum eleifend nunc aenean auctor.
                    </p>
                </div>
            </div>

         </div>
      </section>
      {/* --- CTA FOOTER --- */}
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
      <footer className="bg-[#121212] text-xs text-gray-500 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6 md:gap-0">
             <span className="text-white font-bold text-xl tracking-tight">PentAi.</span>
             <span className="text-gray-500">© 2024 by PentAi. All rights reserved.</span>
             <div className="flex items-center gap-4">
                <Facebook className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
                <Instagram className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
                <X className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
                <Linkedin className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
                <Youtube className="w-5 h-5 text-white cursor-pointer hover:text-gray-300 transition-colors" />
             </div>
          </div>
          <div className="w-full h-[1px] bg-white/10"></div>
          <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 md:gap-0">
             <span className="hover:text-white cursor-pointer transition-colors">Realised by Right Tail Corp.</span>
             <div className="flex gap-8">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}