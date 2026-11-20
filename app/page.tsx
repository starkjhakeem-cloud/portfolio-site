import { Navigation } from "@/app/components/navigation";
import { Orbit } from "@/app/components/orbit";
import { ProjectShowcase } from "@/app/components/project-showcase";
import { CopyEmail } from "@/app/components/copy-email";
import { Icon } from "@/app/components/ui-icon";
import { profile, skillGroups } from "@/app/data/portfolio";

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section
          id="top"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-content">
            <p className="availability">
              <span className="status-dot" /> OPEN TO INTERNSHIPS & EARLY-CAREER
              ROLES
            </p>
            <p className="hero-intro">
              Hey, I’m Jhakeem. <span className="intro-line" />
            </p>
            <h1 id="hero-title">
              Thoughtful code.
              <br />
              Real-world
              <br />
              <span className="gradient-text">impact.</span>
              <span className="heading-period" aria-hidden="true">
                ↗
              </span>
            </h1>
            <p className="hero-description">
              Software engineering student. U.S. Army veteran.
              <br className="desktop-break" /> Building useful web and mobile
              experiences with
              <br className="desktop-break" /> curiosity, discipline, and a
              little attention to detail.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <Icon name="arrow" />
              </a>
              <a
                className="button button-quiet"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" width="18" height="18" /> GitHub{" "}
                <Icon name="northeast" width="15" height="15" />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="mono">
                BASED IN CURIOSITY. BUILT WITH PURPOSE.
              </span>
            </div>
          </div>
          <Orbit />
          <a className="scroll-cue mono" href="#projects">
            <span className="scroll-icon">
              <Icon name="down" width="14" height="14" />
            </span>{" "}
            SCROLL TO EXPLORE
          </a>
          <span className="hero-index mono" aria-hidden="true">
            PORTFOLIO / 2026
          </span>
        </section>

        <div className="tech-ribbon">
          <div className="container">
            <span className="mono ribbon-label">MY EVERYDAY TOOLKIT</span>
            <div className="ribbon-technologies">
              <span>
                <span className="react-glyph" aria-hidden="true">
                  ⚛
                </span>{" "}
                React
              </span>
              <span>
                <span className="next-glyph" aria-hidden="true">
                  N
                </span>{" "}
                Next.js
              </span>
              <span>
                <span className="ts-glyph" aria-hidden="true">
                  TS
                </span>{" "}
                TypeScript
              </span>
              <span>
                <Icon name="terminal" /> React Native
              </span>
              <span>
                <span className="tailwind-glyph" aria-hidden="true">
                  ≈
                </span>{" "}
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        <section
          id="projects"
          className="section container"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>01</span> SELECTED WORK
              </p>
              <h2 id="projects-title">
                Built to solve.
                <br />
                <span className="text-muted">Designed to matter.</span>
              </h2>
            </div>
            <p className="section-description">
              A selection of my work across web and mobile.
              <br />
              Practical problems, thoughtful interfaces,
              <br className="desktop-break" /> and the code that connects them.
            </p>
          </div>
          <ProjectShowcase />
          <a
            className="text-link all-repositories"
            href={profile.github + "?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
          >
            More from my development journey{" "}
            <span>
              Explore GitHub <Icon name="northeast" width="16" height="16" />
            </span>
          </a>
        </section>

        <section
          id="about"
          className="about-section section"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div>
              <p className="eyebrow">
                <span>02</span> THE PERSON BEHIND THE CODE
              </p>
              <h2 id="about-title">
                A different path.
                <br />
                <span className="text-muted">The same drive.</span>
              </h2>
              <div className="about-signature">
                Jhakeem Moultrie<span>STUDENT. VETERAN. BUILDER.</span>
              </div>
            </div>
            <div className="about-content">
              <p className="about-lead">
                I’ve always been drawn to figuring things out.
                <br className="desktop-break" /> Now, I turn that curiosity into
                software.
              </p>
              <p>
                I’m pursuing a B.S. in Software Engineering at Western Governors
                University, building practical experience through web and mobile
                projects. I enjoy taking a problem, breaking it into smaller
                pieces, and bringing those pieces together in an interface that
                makes sense.
              </p>
              <p>
                Before software, I served in the United States Army. That
                experience shaped how I approach a challenge: show up, take
                responsibility, work with the team, and keep learning. It’s the
                same mindset I bring to every project.
              </p>
              <div className="about-facts">
                <div>
                  <Icon name="code" />
                  <span>
                    Currently studying<strong>B.S. Software Engineering</strong>
                    <small>Western Governors University</small>
                  </span>
                </div>
                <div>
                  <Icon name="globe" />
                  <span>
                    Previously served<strong>United States Army</strong>
                    <small>Discipline. Accountability. Teamwork.</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section container"
          aria-labelledby="skills-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span>03</span> TECHNICAL TOOLKIT
              </p>
              <h2 id="skills-title">
                The right tools.
                <br />
                <span className="text-muted">A builder’s mindset.</span>
              </h2>
            </div>
            <p className="section-description">
              The technologies I use to bring ideas to life.
              <br />
              Always learning. Always refining the craft.
            </p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon name={group.icon} width="24" height="24" />
                  </span>
                  <span className="mono">/ {group.number}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
                <ul className="skill-tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="resume"
          className="container resume-section"
          aria-labelledby="resume-title"
        >
          <div className="resume-card">
            <div className="resume-icon">
              <Icon name="file" width="30" height="30" />
            </div>
            <div className="resume-copy">
              <p className="eyebrow">THE SHORT VERSION</p>
              <h2 id="resume-title">My background, in one place.</h2>
              <p>
                Education, technical skills, projects, and military experience.
              </p>
            </div>
            <a
              className="button button-outline"
              href={profile.resume}
              download="Jhakeem_Moultrie_Software_Engineer_Resume.pdf"
            >
              Download résumé <span className="mono">PDF</span>
              <Icon name="download" width="18" height="18" />
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="contact-glow" aria-hidden="true" />
          <div className="container contact-content">
            <p className="eyebrow">
              <span>04</span> WHAT’S NEXT?
            </p>
            <p className="contact-availability">
              <span className="status-dot" /> Open to a great next chapter
            </p>
            <h2 id="contact-title">
              Good things start
              <br />
              with a <span className="gradient-text">conversation.</span>
            </h2>
            <p className="contact-description">
              Have an internship, an engineering role, or an interesting
              problem?
              <br className="desktop-break" /> I’d love to hear about it. Let’s
              build something useful.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <Icon name="northeast" width="30" height="30" />
            </a>
            <div className="contact-actions">
              <CopyEmail />
              <span className="contact-divider" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <Icon name="northeast" width="15" height="15" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Icon name="northeast" width="15" height="15" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-content">
          <a href="#top" className="footer-brand" aria-label="Back to top">
            jm<span>.</span>
          </a>
          <p>
            © {new Date().getFullYear()} Jhakeem Moultrie
            <span>Designed &amp; developed by Jhakeem Moultrie.</span>
          </p>
          <a className="back-top" href="#top">
            Back to top <Icon name="arrow" width="16" height="16" />
          </a>
        </div>
      </footer>
    </>
  );
}
