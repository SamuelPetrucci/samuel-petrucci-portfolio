import Image from "next/image";
import { TypeLine } from "@/components/TypeLine";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/data/content";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);
const marqueeSkills = [...skills, ...skills];

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--line)] bg-[rgba(243,246,244,0.78)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
            <Image
              src="/samuel.jpg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover ring-2 ring-signal/30"
            />
            Samuel Petrucci
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft sm:flex">
            <a href="#work" className="hover:text-signal">
              Work
            </a>
            <a href="#experience" className="hover:text-signal">
              Experience
            </a>
            <a href="#about" className="hover:text-signal">
              About
            </a>
            <a href="#contact" className="btn-primary !px-4 !py-2 text-sm">
              Contact
            </a>
          </nav>
          <a href="#contact" className="btn-primary !px-4 !py-2 text-sm sm:hidden">
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[100svh] overflow-hidden pt-24">
          <div className="mesh" aria-hidden />
          <div className="grid-fade absolute inset-0 opacity-70" aria-hidden />

          <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-6xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label animate-rise">
                {profile.role} · {profile.location}
              </p>

              <h1 className="animate-rise delay-1 mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.8rem,9vw,6.4rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-ink">
                Samuel
                <br />
                Petrucci
              </h1>

              <p className="animate-rise delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                {profile.tagline}
              </p>

              <p className="animate-rise delay-3 mt-4 font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">
                Currently building <TypeLine />
              </p>

              <div className="animate-rise delay-4 mt-9 flex flex-wrap gap-3">
                <a href="#work" className="btn-primary">
                  See selected work
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="animate-rise delay-2 relative mx-auto flex w-full max-w-[320px] items-center justify-center lg:max-w-none lg:justify-end">
              <div
                className="absolute h-[88%] w-[88%] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(24,184,148,0.35),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(217,119,58,0.22),transparent_50%)] blur-2xl"
                aria-hidden
              />
              <div className="photo-bubble relative aspect-square w-[min(78vw,300px)] overflow-hidden rounded-full border-[6px] border-white/80 shadow-[0_25px_60px_rgba(12,26,23,0.18)] ring-1 ring-[var(--line)] lg:w-[340px]">
                <Image
                  src="/samuel.jpg"
                  alt="Samuel Petrucci"
                  fill
                  priority
                  sizes="340px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative border-y border-[var(--line)] bg-white/40 py-5 backdrop-blur-sm">
            <div className="overflow-hidden">
              <div className="marquee-track items-center gap-8 px-4">
                {marqueeSkills.map((skill, i) => (
                  <span
                    key={`${skill.name}-${i}`}
                    className="flex items-center gap-8 whitespace-nowrap"
                  >
                    <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--line)] bg-white/70 px-3.5 py-2 text-sm font-medium text-ink-soft shadow-sm">
                      <span className="inline-flex items-center gap-1.5">
                        {skill.icons.map((icon) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={`${skill.name}-${icon.src}-${i}`}
                            src={icon.src}
                            alt={icon.alt}
                            width={20}
                            height={20}
                            className="h-5 w-5 object-contain"
                          />
                        ))}
                      </span>
                      <span className="tracking-[0.04em]">{skill.name}</span>
                    </span>
                    <span className="text-signal" aria-hidden>
                      ◆
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <p className="section-label">Selected work</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              Products, client delivery, and research that show how I ship.
            </h2>
          </div>

          <div className="mt-14 space-y-3">
            {featured.map((project, i) => (
              <article
                key={project.title}
                className="project-row rounded-2xl border border-[var(--line)] bg-white/55 px-5 py-6 backdrop-blur-sm sm:px-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.14em] text-signal uppercase">
                        0{i + 1} · {project.kind}
                      </span>
                    </div>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer" className="hover:text-signal">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink-soft">{project.blurb}</p>
                    <p className="mt-2 text-sm font-medium text-ink">{project.impact}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-paper-2/70 px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <p className="section-label">More projects</p>
            <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {rest.map((project) => (
                <div
                  key={project.title}
                  className="project-row grid gap-3 py-5 sm:grid-cols-[160px_1fr_auto] sm:items-baseline"
                >
                  <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.12em] text-signal uppercase">
                    {project.kind}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer" className="hover:text-signal">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-soft">
                      {project.blurb}
                    </p>
                  </div>
                  <p className="hidden text-xs text-ink-soft sm:block">
                    {project.stack.slice(0, 3).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-y border-[var(--line)] bg-white/40">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-label">Experience</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight">
                Builder, founder, and cloud-minded engineer.
              </h2>
              <p className="mt-4 max-w-md text-ink-soft">
                From tutoring and enterprise observability to founding{" "}
                <a
                  href={profile.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-signal underline-offset-2 hover:underline"
                >
                  {profile.company}
                </a>
                , I turn operational friction into software people actually use.
              </p>
              <div className="mt-8 space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="rounded-xl border border-[var(--line)] bg-paper px-4 py-3 text-sm font-medium"
                  >
                    {cert}
                  </div>
                ))}
                {education.map((ed) => (
                  <div key={ed.title} className="rounded-xl border border-[var(--line)] bg-paper px-4 py-3">
                    <p className="font-semibold">{ed.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">
                      {ed.org} · {ed.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ol className="space-y-8">
              {experience.map((job) => (
                <li key={job.org} className="relative border-l border-[var(--line)] pl-6">
                  <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-signal" />
                  <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.12em] text-ink-soft uppercase">
                    {job.period}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold">
                    {job.title}
                  </h3>
                  <p className="text-signal font-medium">{job.org}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-label">About</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
                Systems that save time, cut busywork, and actually get adopted.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-ink-soft">
              I care less about flashy demos and more about durable workflows — CRMs that teams open every day,
              automations that remove copy-paste, and AI features that sit on top of real business data. When I&apos;m
              not shipping, you&apos;ll find me hiking, riding, gaming, or digging into a new track.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden border-t border-[var(--line)] bg-[linear-gradient(135deg,#0c1a17_0%,#16352d_55%,#0f8f75_140%)] text-paper"
        >
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] text-signal-bright uppercase">
              Let&apos;s talk
            </p>
            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-6xl">
              Got an ops problem, a product idea, or a site that needs to convert?
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex rounded-full bg-paper px-5 py-3 font-semibold text-ink transition hover:bg-signal-bright hover:text-ink"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/25 px-5 py-3 font-semibold transition hover:border-signal-bright"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/25 px-5 py-3 font-semibold transition hover:border-signal-bright"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-paper px-5 py-6 text-sm text-ink-soft sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p>© 2026 {profile.name}</p>
          <p>Built with Next.js · Open to collaborations</p>
        </div>
      </footer>
    </>
  );
}

