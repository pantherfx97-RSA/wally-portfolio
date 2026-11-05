const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Git & GitHub",
];

const highlights = [
  { value: "01", label: "Featured project" },
  { value: "Full-stack", label: "Development focus" },
  { value: "2026", label: "Building and learning" },
];

export default function Home() {
  return (
    <main className="portfolio">
      <nav className="navigation">
        <a className="brand" href="#home">WN<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>
          <p className="eyebrow">HELLO, I&apos;M WALLY NTHANI</p>
          <h1>
            Building solutions.
            <br />
            <span>Engineering</span>
            <br />
            possibilities.
          </h1>
          <p className="hero-description">
            I&apos;m a junior full-stack software developer focused on building
            practical digital products, solving real problems and continuously
            growing as an engineer.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a className="button-secondary" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-top">
            <span>DEVELOPER / PORTFOLIO</span>
            <span>2026</span>
          </div>
          <div className="monogram">W<span>N</span></div>
          <div className="visual-bottom">
            <span>DESIGNING WITH PURPOSE.</span>
            <span>BUILDING WITH INTENT.</span>
          </div>
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
        </div>
      </section>

      <section className="highlights">
        {highlights.map((item) => (
          <div className="highlight" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>Curiosity drives me.<br /><span>Building moves me.</span></h2>
        </div>
        <div className="about-copy">
          <p>
            My journey into software development is driven by curiosity,
            persistence and a desire to create technology that makes a
            meaningful difference.
          </p>
          <p>
            I develop through hands-on projects, independent learning and
            continuous experimentation. I enjoy turning ideas into working
            applications, learning how systems fit together and improving
            through every challenge.
          </p>
          <p>
            My current focus is full-stack development, with a growing interest
            in secure, scalable software and cybersecurity.
          </p>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">02 / TECHNOLOGY</p>
          <h2>Tools I use to<br /><span>bring ideas to life.</span></h2>
        </div>
        <div className="skills-content">
          <p className="muted">
            Technologies and tools I have worked with through practical
            development and learning.
          </p>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Ideas transformed<br /><span>into software.</span></h2>
        </div>
        <article className="project-card">
          <div className="project-topline">
            <span>FEATURED PROJECT / 001</span>
            <span>2026</span>
          </div>
          <div className="project-content">
            <div>
              <p className="project-category">CAREER READINESS / EDTECH</p>
              <h3>WorkBridge<span>.</span></h3>
              <p className="project-description">
                A skills-first career readiness platform designed to help
                young people understand their strengths, build practical skills
                and create evidence of their capabilities.
              </p>
              <a className="project-link" href="https://workbridge-navy.vercel.app" target="_blank" rel="noopener noreferrer">
                Explore WorkBridge <span>↗</span>
              </a>
            </div>
            <div className="project-preview">
              <div className="preview-label">WORKBRIDGE / PLATFORM</div>
              <div className="preview-title">Your potential<br /><span>deserves an</span><br />opportunity.</div>
              <div className="preview-footer">
                <span>ASSESSMENT</span>
                <span>ROADMAP</span>
                <span>PORTFOLIO</span>
              </div>
            </div>
          </div>
          <div className="project-tags">
            {["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "PostgreSQL"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">04 / WHAT&apos;S NEXT?</p>
        <h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2>
        <p>
          I&apos;m open to junior developer opportunities, collaborations and
          conversations about technology.
        </p>
        <a className="button-primary" href="mailto:wallynthani@gmail.com">
          Start a conversation <span>↗</span>
        </a>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">WN<span>.</span></a>
        <p>© 2026 Wally Nthani. Built with purpose.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
