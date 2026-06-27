import {
  Mail,
  Linkedin,
  Github,
  Download,
  MapPin,
  Database,
  Cloud,
  Code2,
  GitBranch,
  GraduationCap,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

const RESUME_URL =
  "https://customer-assets.emergentagent.com/job_fcff94f1-b0dc-4d80-b80f-7f8c3a62a380/artifacts/56mkiv6f_Alok_Awasthi_DataEngineer_2.pdf";

const METRICS = [
  {
    tag: "execution",
    value: "30-35",
    unit: "%",
    label: "Execution time reduction across distributed ETL jobs",
  },
  {
    tag: "query perf",
    value: "40-60",
    unit: "%",
    label: "Snowflake & Delta Lake query improvement",
  },
  {
    tag: "automation",
    value: "8-10",
    unit: "hrs/wk",
    label: "Manual ops hours saved every week",
  },
  {
    tag: "reliability",
    value: "100",
    unit: "%",
    label: "SLA adherence on reporting pipelines",
  },
];

const SKILLS = [
  {
    title: "Data Engineering",
    icon: <Database size={14} strokeWidth={2} />,
    comment: "// pipelines, warehousing & modeling",
    items: [
      { name: "PySpark", accent: true },
      { name: "ETL / ELT Pipelines" },
      { name: "Data Warehousing" },
      { name: "Dimensional Modeling" },
      { name: "Data Quality" },
      { name: "Medallion Architecture" },
    ],
  },
  {
    title: "Cloud & Warehouses",
    icon: <Cloud size={14} strokeWidth={2} />,
    comment: "// where the data lives",
    items: [
      { name: "Snowflake", accent: true },
      { name: "Databricks", accent: true },
      { name: "Azure" },
      { name: "Delta Lake" },
      { name: "Unity Catalog" },
    ],
  },
  {
    title: "Languages & Orchestration",
    icon: <Code2 size={14} strokeWidth={2} />,
    comment: "// code & schedulers",
    items: [
      { name: "Python" },
      { name: "SQL" },
      { name: "Shell Scripting" },
      { name: "Apache Airflow" },
      { name: "dbt" },
    ],
  },
  {
    title: "DevOps & Reporting",
    icon: <GitBranch size={14} strokeWidth={2} />,
    comment: "// shipping & insights",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "BI & Analytics" },
      { name: "Performance Tuning" },
    ],
  },
];

const EXPERIENCE_LINES = [
  { type: "cm", text: "// Amdocs - Data Engineer · Gurugram, India" },
  { type: "cm", text: "// tenure: aug 2023 -> present" },
  { type: "blank" },
  {
    type: "bullet",
    parts: [
      { t: "• Built ETL pipelines on " },
      { t: "Databricks", cls: "hl" },
      { t: " + " },
      { t: "PySpark", cls: "hl" },
      { t: " processing " },
      { t: "5-10 TB/day", cls: "hl-y" },
      { t: " for downstream consumers." },
    ],
  },
  {
    type: "bullet",
    parts: [
      { t: "• Rolled out " },
      { t: "Unity Catalog", cls: "hl" },
      { t: " for centralized governance, fine-grained access, lineage & secure sharing." },
    ],
  },
  {
    type: "bullet",
    parts: [
      { t: "• Built " },
      { t: "Bronze · Silver · Gold", cls: "hl-g" },
      { t: " layers via Medallion architecture for reliable, query-ready datasets." },
    ],
  },
  {
    type: "bullet",
    parts: [
      { t: "• Tuned distributed workloads -> " },
      { t: "30-35% faster", cls: "hl" },
      { t: " end-to-end execution." },
    ],
  },
  {
    type: "bullet",
    parts: [
      { t: "• Optimized " },
      { t: "Snowflake", cls: "hl" },
      { t: " + " },
      { t: "Delta Lake", cls: "hl" },
      { t: " queries -> " },
      { t: "40-60% improvement", cls: "hl" },
      { t: " for analytics & reporting." },
    ],
  },
  {
    type: "bullet",
    parts: [
      { t: "• Automated ingestion & scheduling - saved " },
      { t: "8-10 hours/week", cls: "hl-y" },
      { t: " of manual operations." },
    ],
  },
  {
    type: "bullet",
    parts: [
      { t: "• Partnered with analytics & business teams - held " },
      { t: "100% SLA", cls: "hl-g" },
      { t: " across reporting workloads." },
    ],
  },
];

const COURSES = [
  "DBMS",
  "Data Structures",
  "Algorithms",
  "Cloud Computing",
  "Big Data Analytics",
];

export default function Portfolio() {
  return (
    <div className="portfolio" data-testid="portfolio-root">
      {/* Top bar */}
      <header className="topbar" data-testid="portfolio-topbar">
        <div className="brand mono">
          alok-awasthi <span>· data engineer</span>
        </div>
        <div className="status mono" data-testid="status-pill">
          <span className="dot" />
          <span>open to data roles</span>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" data-testid="hero-section">
        <div>
          <div className="eyebrow mono">
            <span className="e-line" />
            portfolio · v1.0
          </div>

          <h1 data-testid="hero-name">
            Alok Awasthi<span className="accent">.</span>
          </h1>

          <p className="lead">
            <span className="kw">Data Engineer</span> with 3 years of experience
            building scalable ETL pipelines and cloud-native data platforms - focused
            on performance, reliability and SLA-driven delivery on{' '}
            <span className="kw">Snowflake</span>,{' '}
            <span className="kw">Databricks</span> and{' '}
            <span className="kw">PySpark</span>.
          </p>

          <div className="cert-badge" data-testid="snowpro-badge">
            <span className="ring" aria-hidden />
            <span className="cb-text mono">
              SnowPro Core - Snowflake
              <small>certified · jun 2025</small>
            </span>
          </div>

          <div className="contacts" data-testid="hero-contacts">
            <a
              className="contact-link primary"
              href="mailto:alokawasthi340@gmail.com"
              data-testid="contact-email"
            >
              <Mail size={14} /> alokawasthi340@gmail.com
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/alok-awasthi-04072321b"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-linkedin"
            >
              <Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} />
            </a>
            <a
              className="contact-link"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-github"
            >
              <Github size={14} /> GitHub <ArrowUpRight size={12} />
            </a>
            <a
              className="contact-link"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="download-resume"
            >
              <Download size={14} /> Resume.pdf
            </a>
          </div>
        </div>

        <aside className="facts" data-testid="hero-facts">
          <div className="facts-head">
            <span>// quick facts</span>
            <span>v1.0</span>
          </div>
          <div className="row">
            <span className="k">role</span>
            <span className="v">Data Engineer</span>
          </div>
          <div className="row">
            <span className="k">years</span>
            <span className="v accent">3 yrs</span>
          </div>
          <div className="row">
            <span className="k">based_in</span>
            <span className="v">Gurugram, IN</span>
          </div>
          <div className="row">
            <span className="k">stack</span>
            <span className="v accent">Snowflake · Databricks</span>
          </div>
          <div className="row">
            <span className="k">scale</span>
            <span className="v">5-10 TB / day</span>
          </div>
          <div className="row">
            <span className="k">sla</span>
            <span className="v accent">100%</span>
          </div>
        </aside>
      </section>

      <section className="section" data-testid="metrics-section">
        <div className="section-head">
          <span className="idx mono">01 - IMPACT</span>
          <h2>Measurable wins</h2>
          <span className="rule" />
        </div>
        <div className="metrics">
          {METRICS.map((m, i) => (
            <div key={i} className="metric" data-testid={`metric-card-${i}`}>
              <div className="m-tag mono">{m.tag}</div>
              <div className="m-value">
                {m.value}
                <span className="unit">{m.unit}</span>
              </div>
              <div className="m-label">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" data-testid="experience-section">
        <div className="section-head">
          <span className="idx mono">02 - EXPERIENCE</span>
          <h2>Where I've shipped</h2>
          <span className="rule" />
        </div>

        <article className="code-card" data-testid="experience-card-amdocs">
          <header className="code-head">
            <div className="ch-left">
              <div className="role-title">Data Engineer</div>
              <div className="company mono">@ Amdocs</div>
              <div className="dates mono">
                <Calendar size={11} style={{ marginRight: 6, verticalAlign: "middle" }} />
                Aug 2023 - Present
              </div>
            </div>
            <div className="dates mono">
              <MapPin size={11} style={{ marginRight: 6, verticalAlign: "middle" }} />
              Gurugram, IN
            </div>
          </header>

          <div className="code-body">
            {EXPERIENCE_LINES.map((line, i) => {
              if (line.type === "blank") {
                return (
                  <div className="ln" key={i}>
                    <span className="lno">{i + 1}</span>
                    <span>&nbsp;</span>
                  </div>
                );
              }
              if (line.type === "cm") {
                return (
                  <div className="ln" key={i}>
                    <span className="lno">{i + 1}</span>
                    <span className="cm-line">{line.text}</span>
                  </div>
                );
              }
              return (
                <div className="ln" key={i}>
                  <span className="lno">{i + 1}</span>
                  <span className="bullet-text">
                    {line.parts.map((p, j) =>
                      p.cls ? (
                        <span key={j} className={p.cls}>
                          {p.t}
                        </span>
                      ) : (
                        <span key={j}>{p.t}</span>
                      )
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      <section className="section" data-testid="skills-section">
        <div className="section-head">
          <span className="idx mono">03 - STACK</span>
          <h2>Technical toolkit</h2>
          <span className="rule" />
        </div>

        <div className="skills-grid">
          {SKILLS.map((g, i) => (
            <div key={i} className="skill-card" data-testid={`skill-card-${i}`}>
              <div className="sc-head">
                <span className="sc-icon">{g.icon}</span>
                <div className="sc-title">{g.title}</div>
              </div>
              <div className="sc-cmt mono">{g.comment}</div>
              <div className="chips">
                {g.items.map((it, j) => (
                  <span
                    key={j}
                    className={`chip${it.accent ? " accent" : ""}`}
                    data-testid={`chip-${it.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" data-testid="education-section">
        <div className="section-head">
          <span className="idx mono">04 - EDUCATION</span>
          <h2>Background</h2>
          <span className="rule" />
        </div>

        <div className="edu-card" data-testid="education-card">
          <div>
            <div className="e-school">
              <span className="cap">
                <GraduationCap size={16} />
              </span>
              Bharati Vidyapeeth College of Engineering
            </div>
            <div className="e-deg">B.Tech · Information Technology</div>
            <div className="e-meta">
              <span>
                <Calendar size={11} style={{ marginRight: 6, verticalAlign: "middle" }} />
                Jul 2019 - Jun 2023
              </span>
              <span>
                GPA <span className="gpa-val">9.04 / 10</span>
              </span>
            </div>
          </div>

          <div>
            <div className="e-course-head mono">// relevant coursework</div>
            <div className="chips">
              {COURSES.map((c, i) => (
                <span className="chip" key={i}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer mono" data-testid="footer">
        <span>// designed & shipped by alok awasthi · 2025</span>
        <a href="mailto:alokawasthi340@gmail.com">say hi →</a>
      </footer>
    </div>
  );
}
