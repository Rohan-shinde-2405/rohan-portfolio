import { useEffect, useMemo, useState } from 'react'
import { Github, Linkedin, Mail, Phone, ExternalLink, Orbit } from 'lucide-react'
import { Card } from './components/ui/card'
import { Button } from './components/ui/button'

/* ---------- Content ---------- */
const projects = [
  { title: 'Toxic Voice Classification', desc: 'Explainable detection of offensive speech with post-hoc attributions.', year: '2023', tech: ['Python','TensorFlow','SHAP'] },
  { title: 'F1 Simulation (NEAT & RNN)', desc: 'Neuroevolution & recurrent agents for control under dynamics.', year: '2023', tech: ['Python','NEAT','RNN'] },
  { title: 'Mini Compiler “Nexus”', desc: 'Translating algorithms into assembly with a toy compiler.', year: '2022', tech: ['C/C++','Compilers'] },
  { title: 'Smart Doorbell', desc: 'Arduino + proximity sensors for realtime alerts.', year: '2022', tech: ['Arduino','Sensors'] },
  { title: 'Emotion-Based Music Chatbot', desc: 'Sentiment-aware song recommendations via conversational UI.', year: '2023', tech: ['NLP','Flask'] },
]

const publications = [
  { title: 'Hybrid Explainable AI for AVs — ICESCI 2025', href: 'https://scholar.google.com/scholar?oi=bibs&cluster=17300078089787938947&btnI=1&hl=en' },
  { title: 'Adaptive Multimodal Learning for Robot Decision-Making — ICCAR 2025', href: 'https://scholar.google.com/scholar?oi=bibs&cluster=2153792264566554109&btnI=1&hl=en' },
  { title: 'Decentralized Federated Learning for Privacy — GCET 2025', href: 'https://scholar.google.com/scholar?oi=bibs&cluster=3057077748973331985&btnI=1&hl=en' },
  { title: 'BERT: A Paradigm Shift in NLP — ISDIA 2024', href: 'https://scholar.google.com/scholar?oi=bibs&cluster=11895694283908678593&btnI=1&hl=en' },
  { title: 'Student Performance Prediction using AI-ML & BI — ICCCA 2024 (Best Paper)', href: 'https://scholar.google.com/scholar?oi=bibs&cluster=5987600238176158827&btnI=1&hl=en' },
  { title: 'Heart Disease Prediction (JSO + ResNet) — SSRG 2023 (Best Paper)', href: 'https://scholar.google.com/scholar?oi=bibs&cluster=16966024781512924736&btnI=1&hl=en' },
]

const experience = [
  {
    years: '2024 — Present',
    title: 'Technical Solutions Engineer',
    org: 'Databricks',
    blurb: [
      `At Databricks, I sit at the intersection of engineering and customer success, helping enterprise teams run reliable, cost-efficient Lakehouse platforms on AWS and Azure.`,
      `I partner with data, ML, and platform teams to tune Spark workloads, harden model endpoints and Vector Search, and implement robust governance with Unity Catalog. I also build diagnostic tooling for logs and pipelines and maintain internal best-practice guides used across the org.`,
    ],
    tags: ['Databricks','Spark','Python','SQL','Unity Catalog','Vector Search','AWS','Azure']
  },
  {
    years: 'Jun 2023 — Jul 2023',
    title: 'Packaged App Dev Intern',
    org: 'Accenture',
    blurb: [
      `Built Java/Spring microservices on AWS, containerized with Docker, and collaborated on schema design for RDS. Contributed to CI pipelines with Bitbucket.`,
    ],
    tags: ['Java','Spring Boot','Docker','AWS','Bitbucket']
  },
  {
    years: 'Aug 2022 — May 2023',
    title: 'Software Dev Intern',
    org: 'Bleezur',
    blurb: [
      `Delivered MERN applications that integrated the WhatsApp Business API and AI chatbots, plus reusable Angular/React components for ITSM workflows.`,
    ],
    tags: ['MERN','React','Angular','Node.js','WhatsApp API']
  }
]


const certifications = [
  {
    group: 'AWS',
    items: [
      {
        name: 'Solutions Architect — Professional',
        href: 'https://www.credly.com/badges/dd548f6c-f920-40c1-ada8-308c7cb236c6/public_url',
      },
      {
        name: 'Data Engineer — Associate',
        href: 'https://www.credly.com/badges/847b5511-d0e3-46c9-8c40-6e3f413833af/public_url',
      },
      {
        name: 'Machine Learning — Specialty',
        href: 'https://www.credly.com/badges/d03b3ef4-8ca5-4974-bb53-0fb6628d539f/public_url',
      },
    ],
  },
  {
    group: 'Databricks',
    items: [
      {
        name: 'Data Engineer — Professional',
        href: 'https://credentials.databricks.com/c39a15e6-a7f0-4a96-8449-544b7d3d8961#acc.d20rzjBR',
      },
      {
        name: 'Data Engineer — Associate',
        href: 'https://credentials.databricks.com/c01b6e3a-4671-40b3-8201-b931f8220a4b#acc.wSEbuFNW',
      },
      {
        name: 'Generative AI Engineer — Associate',
        href: 'https://credentials.databricks.com/f284840e-e764-4067-9957-6577275cabb0',
      },
    ],
  },
]


/* ---------- Small components ---------- */
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="section-title">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  )
}

function ProjectCard({ p }) {
  return (
    <a href="#" className="group block rounded-2xl border border-ring/40 bg-night-800/70 p-5 shadow-subtle hover:border-ring/60 transition-colors">
      <div className="flex items-baseline justify-between">
        <h3 className="text-white font-semibold">{p.title}</h3>
        <span className="text-xs text-muted/70">{p.year}</span>
      </div>
      <p className="mt-1 text-[15px] text-muted/90">{p.desc}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {p.tech.map(t => (
          <span key={t} className="px-2 py-1 rounded-full border border-ring/40 bg-night-800 text-muted/90 text-xs">{t}</span>
        ))}
      </div>
    </a>
  )
}

function ExperienceItem({ x }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-3">
        <div className="text-muted/80 text-sm">{x.years}</div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="rounded-2xl border border-ring/40 bg-night-800/70 p-5 shadow-subtle">
          <div className="flex items-baseline justify-between">
            <h3 className="text-white font-semibold">{x.title} · {x.org}</h3>
          </div>
          {x.blurb.map((p, i) => (
            <p key={i} className={`mt-${i ? '2' : '3'} text-[15px] text-muted/90`}>{p}</p>
          ))}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {x.tags.map(t => (
              <span key={t} className="px-2 py-1 rounded-full border border-ring/40 bg-night-800 text-muted/90 text-xs">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Page ---------- */
export default function App(){
  const [filter, setFilter] = useState('all')
  const filtered = useMemo(() => projects.filter(p => filter === 'all' || p.tech.includes(filter)), [filter])

  /* Spotlight — bigger, brighter core + huge soft halo (more fade) */
  const [pos, setPos] = useState({x: 0, y: 0})
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      {/* Cursor spotlight */}
      <div
        className="spotlight"
        style={{
          background: `
            radial-gradient(600px 600px at ${pos.x}px ${pos.y}px,
              rgba(255,255,255,0.06) 0%,   /* very faint core */
              rgba(255,255,255,0.025) 40%, /* almost transparent */
              rgba(255,255,255,0.008) 80%, /* barely there edges */
              transparent 100%),
            radial-gradient(1600px 1600px at ${pos.x}px ${pos.y}px,
              rgba(100,255,218,0.015),
              transparent 70%)`
        }}
      />
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-5 lg:py-24 py-12 lg:sticky top-0 self-start">
          <div className="space-y-6">
            <div>
              <div className="h-9 w-9 rounded-xl bg-accent"></div>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white">Rohan Kishor Shinde</h1>

              {/* About — two short paras like Brittany’s */}
              <p className="mt-4 text-muted/90">
                I’m a solutions-minded engineer who enjoys the overlap of data platforms, ML systems, and product polish.
                My happy place is taking a proof-of-concept and hardening it for the real world—observability, performance,
                cost, and a great developer experience.
              </p>
              <p className="mt-3 text-muted/90">
                Lately, I’ve been helping teams ship reliable Spark pipelines, govern data with Unity Catalog, and stand up
                low-latency model endpoints and Vector Search on the Lakehouse. Outside work, I tinker with RL sims, read
                about explainability, and build tiny tools that make on-call life easier.
              </p>
            </div>

            <nav className="flex flex-col gap-2 text-sm">
              <a className="hover:text-white" href="#experience">— Experience</a>
              <a className="hover:text-white" href="#research">— Research</a>
              <a className="hover:text-white" href="#certs">— Certifications</a>
              <a className="hover:text-white" href="#projects">— Projects</a>
              <a className="hover:text-white" href="#contact">— Contact</a>
            </nav>

            <div className="flex items-center gap-4 text-[15px]">
              <a className="flex items-center gap-2 hover:text-white" href="mailto:shinderohan115@gmail.com"><Mail className="w-4 h-4"/> Email</a>
              <a className="flex items-center gap-2 hover:text-white" href="https://github.com/Rohan-shinde-2405" target="_blank" rel="noreferrer"><Github className="w-4 h-4"/> GitHub</a>
              <a className="flex items-center gap-2 hover:text-white" href="https://www.linkedin.com/in/rohanshinde2405/" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4"/> LinkedIn</a>
              <a className="flex items-center gap-2 hover:text-white" href="tel:+918308832789"><Phone className="w-4 h-4"/> Call</a>
            </div>

            <div className="flex gap-2 pt-1">
              <Button onClick={() => location.hash = '#contact'}>Get in touch</Button>
              <a className="inline-flex" href="mailto:shinderohan115@gmail.com"><Button variant="ghost">Email me</Button></a>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="lg:col-span-7 lg:py-24 py-6 space-y-16">
          {/* 1) Experience (immersive cards, like Brittany) */}
          <Section id="experience" title="Experience">
            <div className="space-y-10">
              {experience.map((x) => <ExperienceItem key={x.title} x={x} />)}
            </div>
          </Section>

          {/* 2) Research */}
          <Section id="research" title="Research & Publications">
            <Card>
              <ul className="space-y-2">
                {publications.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ExternalLink className="w-4 h-4 mt-1 text-accent"/>
                    <a href={p.href} target="_blank" rel="noreferrer" className="text-[15px] text-white hover:text-accent">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </Section>

          {/* 3) Certifications */}
          <Section id="certs" title="Certifications">
            <Card>
              <div className="grid sm:grid-cols-2 gap-6">
                {certifications.map((c) => (
                  <div key={c.group}>
                    <h4 className="text-white font-semibold">{c.group}</h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {c.items.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-1 rounded-full border border-ring/40 bg-night-800 text-muted/90 text-xs hover:text-accent hover:border-accent/60 transition-colors inline-flex items-center gap-1.5"
                          title={item.name}
                        >
                          {item.name}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Section>

          {/* 4) Projects */}
          <Section id="projects" title="Projects">
            <div className="flex items-center justify-between mt-1">
              <p className="text-muted/90">A few things I’ve been building recently.</p>
              <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="bg-night-800/70 border border-ring/40 rounded-xl px-3 py-2 text-sm text-muted"
                title="Filter by tech"
              >
                <option value="all">All</option>
                <option>Python</option><option>TensorFlow</option><option>NLP</option><option>Arduino</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {filtered.map(p => <ProjectCard key={p.title} p={p} />)}
            </div>
          </Section>

          {/* 5) Contact */}
          <Section id="contact" title="Contact">
            <Card>
              <div className="grid sm:grid-cols-2 gap-6 text-[15px]">
                <div className="space-y-2">
                  <p className="text-muted/90">DattaGitai Bungalow, Sr. No: 52/3, Maruti Nagar, Wadgaon Sheri, Pune — 411014</p>
                  <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent"/> <a className="hover:text-white" href="tel:+918308832789">+91 83088 32789</a></p>
                  <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent"/> <a className="hover:text-white" href="mailto:shinderohan115@gmail.com">shinderohan115@gmail.com</a></p>
                  <p className="flex items-center gap-2"><Github className="w-4 h-4 text-accent"/> <a className="hover:text-white" href="https://github.com/Rohan-shinde-2405" target="_blank" rel="noreferrer">github.com/Rohan-shinde-2405</a></p>
                  <p className="flex items-center gap-2"><Linkedin className="w-4 h-4 text-accent"/> <a className="hover:text-white" href="https://www.linkedin.com/in/rohanshinde2405/" target="_blank" rel="noreferrer">linkedin.com/in/rohanshinde2405</a></p>
                </div>
                <form onSubmit={(e)=>{
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  const name = encodeURIComponent(f.get('name'));
                  const email = encodeURIComponent(f.get('email'));
                  const message = encodeURIComponent(f.get('message'));
                  const subject = `Portfolio message from ${name}`;
                  const body = `From: ${name} (%20${email}%20)\\n\\n${message}`;
                  window.location.href = `mailto:shinderohan115@gmail.com?subject=${subject}&body=${body}`;
                }} className="space-y-3">
                  <div>
                    <label className="text-xs text-muted/70">Name</label>
                    <input name="name" required className="w-full px-3 py-2 rounded-xl bg-night-800/70 border border-ring/40 text-white"/>
                  </div>
                  <div>
                    <label className="text-xs text-muted/70">Email</label>
                    <input name="email" type="email" required className="w-full px-3 py-2 rounded-xl bg-night-800/70 border border-ring/40 text-white"/>
                  </div>
                  <div>
                    <label className="text-xs text-muted/70">Message</label>
                    <textarea name="message" rows="4" required className="w-full px-3 py-2 rounded-xl bg-night-800/70 border border-ring/40 text-white"/>
                  </div>
                  <Button type="submit">Send</Button>
                </form>
              </div>
            </Card>
          </Section>

          <p className="text-muted/70 text-sm">© {new Date().getFullYear()} Rohan Kishor Shinde</p>
        </main>
      </div>

      {/* Rotating icon bottom-right (back to top) */}
      <a
        href="#"
        className="fixed right-6 bottom-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent/60 text-accent/90 hover:text-accent hover:border-accent bg-night-800/70 backdrop-blur spin-slow"
        title="Back to top"
        aria-label="Back to top"
      >
        <Orbit className="w-6 h-6" />
      </a>
    </div>
  )
}
