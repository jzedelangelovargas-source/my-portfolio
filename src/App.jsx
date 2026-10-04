import { useEffect, useState } from "react";

const skills = ["Java", "HTML", "CSS", "JavaScript", "Tailwind CSS"];

const projects = [
  {
    title: "Student Grade Calculator",
    description:
      "A Java program that calculates student grades using conditional statements and loops. It practices processing multiple grade inputs with basic programming concepts.",
    technologies: ["Java", "Conditionals", "Loops"],
  },
  {
    title: "Habit Tracker",
    description:
      "A daily habit app where users can add habits, mark them complete, and keep their list saved in the browser.",
    technologies: ["HTML", "CSS", "JavaScript", "PWA"],
    liveUrl: "https://jzedelangelovargas-source.github.io/habit-tracker/",
    sourceUrl: "https://github.com/jzedelangelovargas-source/habit-tracker",
  },
];

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function App() {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState({});
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      const allRevealed = {};
      elements.forEach((element) => {
        allRevealed[element.dataset.reveal] = true;
      });
      setRevealed(allRevealed);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.reveal;
            setRevealed((current) => ({ ...current, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const page = isLight
    ? "min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300"
    : "min-h-screen bg-slate-950 text-white transition-colors duration-300";

  const navStyle = isLight
    ? "border-slate-200 bg-white/95"
    : "border-slate-800 bg-slate-950/95";

  const cardStyle = isLight
    ? "border-slate-200 bg-white"
    : "border-slate-800 bg-slate-900";

  const sectionAlt = isLight ? "bg-slate-100" : "bg-slate-900/50";
  const mutedText = isLight ? "text-slate-600" : "text-slate-400";
  const secondaryButton = isLight
    ? "border-slate-300 text-slate-800 hover:border-cyan-600 hover:text-cyan-700"
    : "border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400";

  function revealClass(id) {
    return `transition-all duration-700 ${
      revealed[id] ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;
  }

  async function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    setIsSubmitting(true);
    setContactMessage("");

    try {
      const response = await fetch("https://formspree.io/f/myekglwj", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setContactMessage(
          "Hindi naipadala ang message. Pakisubukan ulit mamaya."
        );
        return;
      }

      form.reset();
      setContactMessage("Salamat! Naipadala na ang message mo.");
    } catch {
      setContactMessage(
        "Hindi naipadala ang message. Suriin ang internet connection at subukan ulit."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={page}>
      <nav className={`sticky top-0 z-50 border-b backdrop-blur ${navStyle}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-2xl font-bold text-cyan-500">
            Jzedel
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`text-sm transition hover:text-cyan-500 ${mutedText}`}
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setIsLight((current) => !current)}
              className={`rounded-lg border px-3 py-2 text-sm transition ${secondaryButton}`}
              aria-label="Toggle light or dark theme"
            >
              {isLight ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsLight((current) => !current)}
              className={`rounded-lg border px-3 py-2 ${secondaryButton}`}
              aria-label="Toggle light or dark theme"
            >
              {isLight ? "🌙" : "☀️"}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className={`rounded-lg border px-3 py-2 ${secondaryButton}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`border-t px-6 py-3 md:hidden ${navStyle}`}>
            <div className="mx-auto flex max-w-6xl flex-col">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-sm transition hover:text-cyan-500 ${mutedText}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <section
          id="home"
          data-reveal="hero"
          className={`mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-20 ${revealClass("hero")}`}
        >
          <div className="grid w-full items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
                Computer Science Student
              </p>
              <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Jzedel Vargas
                </span>
              </h1>
              <h2 className={`mt-5 text-2xl font-semibold ${mutedText}`}>
                Computer Science Student &amp; Aspiring Software Developer
              </h2>
              <p className={`mt-6 max-w-xl text-lg leading-8 ${mutedText}`}>
                A first-year Computer Science student passionate about
                programming, technology, and creating useful digital solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className={`rounded-lg border px-6 py-3 font-semibold transition ${secondaryButton}`}
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-full border-2 border-cyan-500/50 bg-slate-900 p-2 shadow-2xl shadow-blue-500/20">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Portrait of Jzedel Vargas"
                  className="h-64 w-64 rounded-full object-cover object-top sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-slate-800">
          <div
            data-reveal="about"
            className={`mx-auto max-w-6xl px-6 py-20 ${revealClass("about")}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
              About Me
            </p>
            <h2 className="mt-3 text-4xl font-bold">Who I Am</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <article className={`rounded-2xl border p-8 ${cardStyle}`}>
                <h3 className="text-2xl font-bold">My Background</h3>
                <p className={`mt-4 leading-8 ${mutedText}`}>
                  I am Jzedel Vargas, a first-year Bachelor of Science in
                  Computer Science student. I am developing my programming
                  skills and learning how technology can create useful,
                  practical solutions.
                </p>
              </article>
              <article className={`rounded-2xl border p-8 ${cardStyle}`}>
                <h3 className="text-2xl font-bold">Career Goal</h3>
                <p className={`mt-4 leading-8 ${mutedText}`}>
                  My goal is to become a skilled software developer. I want to
                  keep improving my programming and problem-solving skills while
                  building useful applications.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className={sectionAlt}>
          <div
            data-reveal="skills"
            className={`mx-auto max-w-6xl px-6 py-20 ${revealClass("skills")}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
              Skills
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Technologies I Am Learning
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`rounded-xl border p-5 text-center font-semibold transition duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-500 ${cardStyle}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-slate-800">
          <div
            data-reveal="projects"
            className={`mx-auto max-w-6xl px-6 py-20 ${revealClass("projects")}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-bold">My Projects</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-950/20 ${cardStyle}`}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-xl font-bold text-cyan-500">
                    {"</>"}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className={`mt-4 leading-7 ${mutedText}`}>
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-cyan-500/30 px-3 py-1 text-sm text-cyan-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-400"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`rounded-lg border px-4 py-2 font-semibold transition ${secondaryButton}`}
                      >
                        Source Code ↗
                      </a>
                    )}
                    {!project.liveUrl && !project.sourceUrl && (
                      <span className={`text-sm ${mutedText}`}>
                        Project links coming soon
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className={sectionAlt}>
          <div
            data-reveal="education"
            className={`mx-auto max-w-6xl px-6 py-20 ${revealClass("education")}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
              Education
            </p>
            <h2 className="mt-3 text-4xl font-bold">My Education</h2>
            <article className={`mt-10 rounded-2xl border p-8 ${cardStyle}`}>
              <p className="text-sm font-semibold text-cyan-500">
                2026 - Present
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Bachelor of Science in Computer Science
              </h3>
              <p className={`mt-2 text-lg ${mutedText}`}>
                Mabini Colleges Inc.
              </p>
              <p className={`mt-4 leading-7 ${mutedText}`}>
                Currently studying programming, computer science fundamentals,
                problem-solving, and modern technologies.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-800">
          <div
            data-reveal="contact"
            className={`mx-auto max-w-4xl px-6 py-20 ${revealClass("contact")}`}
          >
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-bold">Let&apos;s Connect</h2>
              <p className={`mx-auto mt-5 max-w-2xl leading-8 ${mutedText}`}>
                Send me a message using the form below.
              </p>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className={`mx-auto mt-10 max-w-2xl space-y-5 rounded-2xl border p-6 sm:p-8 ${cardStyle}`}
            >
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-medium">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={`w-full rounded-lg border bg-transparent px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${
                    isLight
                      ? "border-slate-300 placeholder:text-slate-400"
                      : "border-slate-700 placeholder:text-slate-500"
                  }`}
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block font-medium">
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`w-full rounded-lg border bg-transparent px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${
                    isLight
                      ? "border-slate-300 placeholder:text-slate-400"
                      : "border-slate-700 placeholder:text-slate-500"
                  }`}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  className={`w-full resize-y rounded-lg border bg-transparent px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${
                    isLight
                      ? "border-slate-300 placeholder:text-slate-400"
                      : "border-slate-700 placeholder:text-slate-500"
                  }`}
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {contactMessage && (
                <p
                  className={`text-sm ${mutedText}`}
                  role="status"
                  aria-live="polite"
                >
                  {contactMessage}
                </p>
              )}
            </form>

            <div className={`mt-8 space-y-2 text-center text-sm ${mutedText}`}>
              <p>
                <a
                  href="mailto:jzedelangelovargas@gmail.com"
                  className="transition hover:text-cyan-500"
                >
                  jzedelangelovargas@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:09630838160"
                  className="transition hover:text-cyan-500"
                >
                  09630838160
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Jzedel Vargas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
