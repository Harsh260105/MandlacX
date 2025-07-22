import { useEffect, useRef } from 'react';
import EdgeProcessor3D from '../components/EdgeProcessor3D';

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen mandlac-gradient text-white relative overflow-hidden">
      {/* Background Effects - Animated gradients */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[20%] right-[15%] w-[500px] h-[300px] bg-yellow-600/30 rounded-full blur-[120px] transform rotate-12 animate-pulse-slow"></div>
        <div className="absolute bottom-[30%] left-[10%] w-[400px] h-[200px] bg-yellow-500/20 rounded-full blur-[100px] transform -rotate-12 animate-float"></div>
        <div className="absolute top-[60%] right-[70%] w-[350px] h-[200px] bg-yellow-400/25 rounded-full blur-[80px] animate-pulse-slow-delay"></div>
        <div className="absolute top-[10%] right-[90%] w-[300px] h-[150px] bg-yellow-600/15 rounded-full blur-[90px] animate-float-delay"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center pt-16 pb-8">
          <p className="text-yellow-400 text-base font-medium tracking-[0.48px] uppercase mb-8">
            The Future of On-Site AI Surveillance
          </p>
          
          <h1 className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-[106px] font-normal italic leading-[1.2] tracking-[-0.07em] mb-12">
            <span className="mandlac-text-gradient">MandlacX Edge</span>
            <span className="mandlac-text-gradient italic"> Processor</span>
          </h1>
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-8">
          
          <div className="relative flex justify-center items-center py-16">
            <div className="w-[600px] h-[500px] relative">
              <EdgeProcessor3D />
            </div>
                        
            {/* MandlacX Edge Processor Card - Top Left */}
            <div className="absolute left-0 top-8 w-[350px] mandlac-blur-card rounded-xl p-8 hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8">
              <div className="flex items-start gap-4 mb-6">
                <h2 className="text-xl font-bold text-white flex-1 leading-[1.66] tracking-[-0.03em]">
                  MandlacX Edge Processor
                </h2>
                <div className="w-1 h-8 bg-yellow-400 flex-shrink-0"></div>
              </div>
              
              <div className="flex items-start gap-[18px]">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-[13px] flex-shrink-0"></div>
                <p className="text-md text-white leading-[1.66] tracking-[-0.03em]">
                  A multi-domain, first-generation AI-powered device designed for real-time threat detection.
                </p>
              </div>
            </div>

            {/* Real-Time Threat Detection Card - Bottom Left */}
            <div className="absolute left-0 bottom-8 w-[350px] mandlac-blur-card rounded-xl p-8 hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8">
              <div className="flex items-start gap-4 mb-6">
                <h2 className="text-xl font-bold text-white flex-1 leading-[1.66] tracking-[-0.03em]">
                  Real-Time Threat Detection
                </h2>
                <div className="w-1 h-8 bg-yellow-400 flex-shrink-0"></div>
              </div>
              
              <div className="space-y-4">
                <p className="text-md text-white leading-[1.66] tracking-[-0.03em]">Detects</p>
                {[
                  'Intrusions',
                  'Firearms & Sharp Objects', 
                  'Human Falls',
                  'Unusual or Aggressive Motion'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[18px]">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <p className="text-md text-white leading-[1.66] tracking-[-0.03em]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Specifications Card - Top Right */}
            <div className="absolute right-0 top-8 w-[350px] mandlac-blur-card rounded-xl p-8 hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8">
              <div className="flex items-start gap-4 mb-6">
                <h2 className="text-xl font-bold text-white flex-1 leading-[1.66] tracking-[-0.03em]">
                  Key Specifications
                </h2>
                <div className="w-1 h-8 bg-yellow-400 flex-shrink-0"></div>
              </div>
              
              <div className="space-y-4">
                {[
                  'USB 3.0 Support',
                  '16 GB RAM',
                  'A7 Cortex Processor',
                  'Three multi-axis surveillance lenses'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-[18px]">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <p className="text-md text-white leading-[1.66] tracking-[-0.03em]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* On-Device Intelligence Card - Bottom Right */}
            <div className="absolute right-0 bottom-8 w-[350px] mandlac-blur-card rounded-xl p-8 hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8">
              <div className="flex items-start gap-4 mb-6">
                <h2 className="text-xl font-bold text-white flex-1 leading-[1.66] tracking-[-0.03em]">
                  On-Device Intelligence
                </h2>
                <div className="w-1 h-8 bg-yellow-400 flex-shrink-0"></div>
              </div>
              
              <div className="flex items-start gap-[18px]">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-[13px] flex-shrink-0"></div>
                <p className="text-md text-white leading-[1.66] tracking-[-0.03em]">
                  Engineered to deliver intelligent surveillance without relying on the cloud, it gives you control, speed, and reliability right where you need it.
                </p>
              </div>
            </div>

            {/* Pointer Lines */}

            {/* Top-Left Line: Aligned with the top-left card */}
            {/* <svg className="absolute top-28 left-[360px] w-[336px] h-[81px] opacity-80" viewBox="0 0 336 81" fill="none">
                <path d="M12.5 13.4161L79.5 80H336" stroke="#E8E8E8" strokeDasharray="200" strokeDashoffset="400" className="animate-draw-line"/>
                <ellipse cx="11" cy="10.9317" rx="11" ry="10.9317" fill="#F8F8F8" className="animate-pulse"/>
            </svg> */}

            {/* Top-Right Line: Aligned with the top-right card */}
            {/* <svg className="absolute top-8 right-[360px] w-[336px] h-[82px] opacity-80" viewBox="0 0 336 82" fill="none">
                <path d="M323.5 68L256.5 1H0" stroke="#E8E8E8" strokeDasharray="200" strokeDashoffset="400" className="animate-draw-line-delay"/>
                <circle cx="325" cy="70.5" r="11" transform="rotate(180 325 70.5)" fill="#F8F8F8" className="animate-pulse"/>
            </svg> */}

            {/* Bottom-Left Line: Path corrected to point right */}
            {/* <svg className="absolute bottom-8 left-[360px] w-[336px] h-[81px] opacity-80" viewBox="0 0 336 81" fill="none">
                <path d="M12.5 67.5L79.5 1H336" stroke="#E8E8E8" strokeDasharray="200" strokeDashoffset="400" className="animate-draw-line-delay-2"/>
                <ellipse cx="11" cy="67.5" rx="11" ry="10.9317" fill="#F8F8F8" className="animate-pulse"/>
            </svg> */}

            {/* Bottom-Right Line: Path corrected to point left */}
            {/* <svg className="absolute bottom-8 right-[360px] w-[336px] h-[82px] opacity-80" viewBox="0 0 336 82" fill="none">
                <path d="M323.5 14L256.5 81H0" stroke="#E8E8E8" strokeDasharray="200" strokeDashoffset="400" className="animate-draw-line-delay-3"/>
                <circle cx="325" cy="14" r="11" transform="rotate(180 325 14)" fill="#F8F8F8" className="animate-pulse"/>
            </svg> */}
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mt-24 mb-16">
          <h2 className="text-5xl font-normal text-white leading-[1.2] tracking-[-0.03em]">
            MandlacX Over <span className="font-bold">Cloud-Only Video Analytics</span>
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            
            {/* Bullet-Proof Weapon Detection */}
            <div className="mandlac-blur-card rounded-xl p-7 space-y-4 hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="w-11 h-11 border border-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="1.25" className='ml-2'>
                  <path d="M14.8535 10.3035V5.9285C14.8535 5.7627 14.7877 5.6037 14.6705 5.4865C14.5532 5.3693 14.3943 5.3035 14.2285 5.3035H1.7285C1.5628 5.3035 1.4038 5.3693 1.2866 5.4865C1.1694 5.6037 1.1035 5.7627 1.1035 5.9285V10.3035C1.1035 17.8035 7.9785 19.6785 7.9785 19.6785C7.9785 19.6785 14.8535 17.8035 14.8535 10.3035Z"/>
                  <path d="M13.7575 14.9738L7.9786 10.9285L2.1997 14.9738"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white leading-[1.2] tracking-[-0.03em]">
                Bullet-Proof Weapon Detection
              </h3>
              <p className="text-base text-white leading-[1.66] tracking-[-0.03em]">
                MandlacX is trained to detect firearms, knives, and other sharp threats with precision—no internet required.
              </p>
            </div>

            {/* Bandwidth You Can Actually Afford */}
            <div className="mandlac-blur-card rounded-xl p-7 space-y-4 hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 hover:shadow-2xl hover:shadow-yellow-500/20" style={{animationDelay: '0.1s'}}>
              <div className="w-11 h-11 border border-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="1.25" className='ml-2'>
                  <path d="M10.5525 7.7307V17.7307"/>
                  <path d="M13.6775 4.6057V17.7307"/>
                  <path d="M7.4275 10.8557V17.7307"/>
                  <path d="M4.3025 13.9807V17.7307"/>
                  <path d="M1.1775 17.1057V17.7307"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white leading-[1.2] tracking-[-0.03em]">
                Bandwidth You Can Actually Afford
              </h3>
              <p className="text-base text-white leading-[1.66] tracking-[-0.03em]">
                No continuous streaming. No heavy uploads. Just efficient edge computing that saves your network and your budget.
              </p>
            </div>

            {/* Privacy by Design */}
            <div className="mandlac-blur-card rounded-xl p-7 space-y-4 hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 hover:shadow-2xl hover:shadow-yellow-500/20" style={{animationDelay: '0.2s'}}>
              <div className="w-11 h-11 border border-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="1.25">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1" fill="#FFCC00"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white leading-[1.2] tracking-[-0.03em]">
                Privacy by Design
              </h3>
              <p className="text-base text-white leading-[1.66] tracking-[-0.03em]">
                Your footage stays on-site. No cloud syncs, no external servers—just full control over your data.
              </p>
            </div>

            {/* Future-Proof AI Stack */}
            <div className="mandlac-blur-card rounded-xl p-7 space-y-4 hover:scale-105 hover:bg-white/5 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 hover:shadow-2xl hover:shadow-yellow-500/20" style={{animationDelay: '0.3s'}}>
              <div className="w-11 h-11 border border-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="1.25" className='ml-2'>
                  <path d="M14.6035 8.4285L16.4785 6.5535L14.6035 4.6785"/>
                  <path d="M1.4785 11.5535C1.4785 10.2274 2.0053 8.9556 2.943 8.0179C3.8807 7.0803 5.1524 6.5535 6.4785 6.5535H16.4785"/>
                  <path d="M3.3535 14.6785L1.4785 16.5535L3.3535 18.4285"/>
                  <path d="M16.4785 11.5535C16.4785 12.8795 15.9517 14.1513 15.014 15.089C14.0764 16.0267 12.8046 16.5535 11.4785 16.5535H1.4785"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white leading-[1.2] tracking-[-0.03em]">
                Future-Proof AI Stack
              </h3>
              <p className="text-base text-white leading-[1.66] tracking-[-0.03em]">
                With modular AI models and local firmware updates, MandlacX is built to evolve with your needs—no dependency on cloud upgrades.
              </p>
            </div>
          </div>

          {/* Bottom Row with Additional Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="mandlac-blur-card rounded-xl p-7 space-y-4 hover:scale-105 hover:bg-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="w-11 h-11 border border-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCC00" strokeWidth="1.25" className='ml-2'>
                  <path d="M10.5 3.25L9.25 9.5L14.25 11.375L5.5 20.75L6.75 14.5L1.75 12.625L10.5 3.25Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white leading-[1.2] tracking-[-0.03em]">
                Latency That Saves Seconds—and Lives
              </h3>
              <p className="text-base text-white leading-[1.66] tracking-[-0.03em]">
                Instant on-device processing means faster alerts and quicker interventions during critical moments.
              </p>
            </div>

            <div className="text-center lg:text-right">
              <h2 className="text-5xl font-normal leading-[1.2] tracking-[-0.03em] text-white">
                Built for Speed. <span className="font-bold">Designed for Action.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
