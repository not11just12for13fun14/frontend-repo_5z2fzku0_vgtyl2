import React from 'react'
import Spline from '@splinetool/react-spline'

function Section({ title, children }) {
  return (
    <section className="max-w-5xl w-full mx-auto px-4 py-10 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-800 leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">Unknowne Hart</div>
          <nav className="text-sm text-gray-600 flex items-center gap-4">
            <a className="hover:text-gray-900" href="#about">About</a>
            <a className="hover:text-gray-900" href="#education">Education</a>
            <a className="hover:text-gray-900" href="#work">Work</a>
            <a className="hover:text-gray-900" href="#identity">Identity</a>
            <a className="hover:text-gray-900" href="#philosophy">Philosophy</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500">Personal site</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Kishwor Dulal <span className="text-gray-400">/</span> <span className="text-gray-900">“Unknowne Hart”</span></h1>
          <p className="mt-4 text-gray-700">A creative technologist from Nepal blending security, code, and art. Minimal, focused, and always learning.</p>
        </div>
        <div className="h-[360px] md:h-[460px] w-full rounded-lg border border-gray-200 overflow-hidden">
          <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </section>

      {/* About */}
      <div id="about">
        <Section title="👤 Personal Information">
          <p><span className="font-medium">Full Name:</span> Kishwor Dulal</p>
          <p><span className="font-medium">Stage Name / Alias:</span> “Unknowne Hart”</p>
          <p><span className="font-medium">Country:</span> Nepal</p>
        </Section>
      </div>

      {/* Education */}
      <div id="education">
        <Section title="🎓 Education">
          <div>
            <p className="font-medium">Schooling</p>
            <p>Global Public School, Kathmandu</p>
          </div>
          <div className="pt-2">
            <p className="font-medium">College</p>
            <p>VS Niketan College, Kathmandu</p>
          </div>
          <div className="pt-2">
            <p className="font-medium">Current Level</p>
            <p>Class 12 – P3</p>
          </div>
        </Section>
      </div>

      {/* What I Do */}
      <div id="work">
        <Section title="💻 What I Do">
          <ul className="list-disc pl-5 space-y-1">
            <li>Programming (Python, HTML, CSS, JS)</li>
            <li>Hardware & Arduino robotics</li>
            <li>Cybersecurity / Ethical hacking</li>
            <li>Machine learning & computer vision (beginner–intermediate)</li>
            <li>Music production, photography, and video editing</li>
          </ul>
        </Section>
      </div>

      {/* Identity & Style */}
      <div id="identity">
        <Section title="🎭 Identity & Style">
          <ul className="list-disc pl-5 space-y-1">
            <li>Music</li>
            <li>Visual arts</li>
            <li>Storytelling and personal expression</li>
            <li>Cyber-aesthetic and digital themes</li>
          </ul>
        </Section>
      </div>

      {/* What Defines Me */}
      <Section title="🌟 What Defines Me">
        <ul className="list-disc pl-5 space-y-1">
          <li>Creative + Technical blend</li>
          <li>Self-taught hacker mindset</li>
          <li>Constant learner</li>
          <li>Adaptive and hardworking</li>
          <li>Interested in both artistic and technical crafts</li>
        </ul>
      </Section>

      {/* Credentials / Affiliations (as provided) */}
      <Section title="🔒 Background & Credentials">
        <p className="text-gray-700">Former anonymous affiliations mentioned, current community participation, and training experiences. Certifications noted: CEH, OSCP, and OWASP Certified Bug Hunter (OWASPCBH), plus Tata Certified Cybersecurity.</p>
      </Section>

      {/* Philosophy */}
      <div id="philosophy">
        <Section title="🧭 Philosophy & Approach">
          <blockquote className="border-l-2 border-gray-300 pl-4 text-gray-800">
            "In the digital realm, boundaries between creator and protector blur. I build secure systems while crafting digital art, viewing each discipline through the lens of the other. This duality drives innovation in both my technical solutions and creative expressions."
          </blockquote>
        </Section>
      </div>

      {/* Final Quote */}
      <Section title="Final Quote">
        <p className="italic">“If you are the exploit, no one can exploit you.”</p>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-8">
        <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Unknowne Hart</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="/test">System Check</a>
            <a className="hover:text-gray-900" href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
