function App() {
  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
  ];

  const projects = [
    {
      title: "Student Grade Calculator",
      description:
        "A Java program that calculates and determines student grades using conditional statements and loops. It helps process multiple student grade inputs using basic programming concepts.",
      technologies: "Java • Conditional Statements • Loops",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-2xl font-bold text-cyan-400"
          >
            Jzedel
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#education" className="transition hover:text-cyan-400">
              Education
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto flex min-h-[90vh] max-w-6xl items-center px-6 py-20"
      >
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Computer Science Student
            </p>

            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Jzedel Vargas
              </span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-300">
              Computer Science Student & Aspiring Software Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
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
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="rounded-full border-2 border-cyan-400/40 bg-slate-900 p-2 shadow-2xl shadow-blue-500/20">
              <img
                src="/profile.png"
                alt="Jzedel Vargas"
                className="h-72 w-72 rounded-full object-cover object-top sm:h-80 sm:w-80"
              />
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Who I Am
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                Who I Am
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                I am Jzedel Vargas, a first-year Bachelor of Science in
                Computer Science student. I am currently developing my
                programming skills and learning how technology can be used to
                create useful and practical solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                Career Goal
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                My goal is to become a skilled software developer. I want to
                continuously improve my programming and problem-solving skills
                while building useful applications and gaining real-world
                experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Technologies I Am Learning
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            My Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-blue-500"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-xl text-cyan-400">
                  {"</>"}
                </div>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <p className="mt-6 text-sm font-semibold text-cyan-400">
                  {project.technologies}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            My Education
          </h2>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-8">
            <p className="text-sm font-semibold text-cyan-400">
              2026 - Present
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Bachelor of Science in Computer Science
            </h3>

            <p className="mt-2 text-lg text-slate-300">
              Mabini Colleges Inc.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              Currently studying programming, computer science fundamentals,
              problem-solving, and modern technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            If you want to connect with me, you can reach me through email or
            phone.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jzedelangelovargas@gmail.com"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Email Me
            </a>

            <a
              href="tel:09630838160"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Call Me
            </a>
          </div>

          <div className="mt-8 space-y-2 text-sm text-slate-500">
            <p>jzedelangelovargas@gmail.com</p>
            <p>09630838160</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Jzedel Vargas. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
