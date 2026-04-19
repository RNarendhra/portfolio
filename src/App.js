const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    title: 'AI / ML',
    items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'NLP', 'LangChain'],
  },
  {
    title: 'Computer Vision',
    items: ['OpenCV', 'YOLO', 'Detectron2'],
  },
  {
    title: 'Deployment',
    items: ['FastAPI', 'Flask', 'REST APIs', 'ML Pipelines', 'Model Versioning'],
  },
];

const projects = [
  {
    title: 'MCQ Generator',
    period: 'LLM-based application',
    stack: 'Python, Gemini API, LangChain, FastAPI, Pandas',
    description:
      'Built an end-to-end question generation workflow that turns text, PDFs, and URLs into structured MCQs.',
    highlights: [
      'Generated Easy, Medium, and Hard questions with answers and explanations.',
      'Added topic tagging, variable question counts, and CSV / JSON exports.',
      'Deployed the pipeline through FastAPI for real-time API access.',
    ],
  },
  {
    title: 'Customer Churn Prediction Model',
    period: 'Classification project',
    stack: 'Python, Pandas, NumPy, Scikit-learn, Matplotlib, SMOTE',
    description:
      'Created a churn prediction system using multiple tree-based and linear models to improve retention insights.',
    highlights: [
      'Handled missing values, encoding, scaling, and class imbalance correction.',
      'Compared models with Precision, Recall, F1-score, and ROC-AUC.',
      'Reached roughly 85 to 90 percent accuracy across evaluated classifiers.',
    ],
  },
  {
    title: 'Sentiment Analysis on Text Data',
    period: 'NLP pipeline',
    stack: 'Python, NLTK, TF-IDF, Scikit-learn',
    description:
      'Designed a sentiment classifier for positive, negative, and neutral text using traditional NLP pipelines.',
    highlights: [
      'Applied tokenization, stopword removal, and lemmatization.',
      'Used TF-IDF vectorization with optimized machine learning classifiers.',
      'Improved classification quality through feature engineering and evaluation.',
    ],
  },
  {
    title: 'Vehicle Number Plate Detection',
    period: 'Computer vision project',
    stack: 'YOLOv4, OpenCV, Object Detection',
    description:
      'Built a real-time number plate detection workflow for traffic monitoring use cases.',
    highlights: [
      'Used YOLOv4 for fast and accurate detection.',
      'Focused on real-time performance and robust visual recognition.',
    ],
  },
];

const experience = [
  {
    role: 'Machine Learning Intern',
    company: 'TEKROI Pvt Ltd',
    date: 'Sep 2024 - Nov 2024',
    location: 'Hyderabad, Telangana',
    points: [
      'Developed classification and regression models with Scikit-learn, TensorFlow, and PyTorch.',
      'Improved data pipelines through preprocessing, feature engineering, and model evaluation.',
      'Designed end-to-end ML workflows with API-based model serving using FastAPI and Flask.',
      'Applied MLOps practices including versioning, reproducibility, and deployment planning.',
    ],
  },
];

const quickFacts = [
  'B.Tech in CSE (AI & ML), CMR Technical Campus',
  'Graduated 2025 with 7.65 GPA',
  'Based in Hyderabad, Telangana',
  'Languages: English, Telugu, Hindi',
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <main className="relative">
        <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to AI/ML engineering opportunities
              </div>
              <p className="mt-8 text-sm uppercase tracking-[0.42em] text-slate-400">
                Narendhra R
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                AI/ML Engineer building practical machine learning and LLM systems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I specialize in machine learning, deep learning, and production-ready API
                deployments with FastAPI. My work spans NLP, computer vision, and
                scalable ML pipelines designed for real-world use.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:rnarendhra5@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Contact Me
                </a>
                <a
                  href="tel:+919494226544"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/10"
                >
                  +91 94942 26544
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {quickFacts.map((fact) => (
                  <div
                    key={fact}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                  >
                    <p className="text-sm leading-6 text-slate-300">{fact}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 p-[1px]">
                <div className="rounded-3xl bg-slate-950/95 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                    Focus Areas
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {['Machine Learning', 'Deep Learning', 'LLM Apps', 'FastAPI', 'NLP'].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                  <p className="mt-6 text-sm leading-7 text-slate-400">
                    Hyderabad, Telangana · Available for software, AI, and ML-focused roles
                    with strong delivery ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <SectionTitle
            eyebrow="About"
            title="Applied ML with an engineering mindset."
            description="My background is centered on building useful AI systems, not just training models in isolation. I enjoy turning messy data and model logic into clean, testable APIs and deployment-ready workflows."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-lg leading-8 text-slate-200">
                From LLM-powered MCQ generation to churn prediction and computer vision,
                I focus on projects where machine learning produces a measurable output and
                a clear user workflow.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Education</p>
                <p className="mt-4 text-xl font-semibold text-white">
                  CMR Technical Campus
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  B.Tech in Computer Science and Engineering (AI &amp; ML)
                </p>
                <p className="mt-3 text-sm text-slate-400">2021 - 2025 · GPA 7.65</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Interests</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Cricket, chess, reading books, and movies. I value analytical thinking,
                  steady iteration, and practical problem-solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <SectionTitle
            eyebrow="Skills"
            title="Tools I use to ship ML work."
            description="A mix of model development, backend deployment, and hands-on data tooling."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work across LLMs, NLP, and computer vision."
            description="Portfolio pieces pulled directly from the resume and shaped into product-oriented case studies."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 transition hover:border-cyan-300/40 hover:bg-slate-900"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">
                      {project.period}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
                    {project.stack}
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 text-slate-300">{project.description}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <SectionTitle
            eyebrow="Experience"
            title="Industry exposure in applied machine learning."
            description="Hands-on internship work focused on model quality, deployment readiness, and reliable ML delivery."
          />
          <div className="mt-12 space-y-6">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                      {item.company}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.location}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-300">
                    {item.date}
                  </div>
                </div>
                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-300"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-900 p-8 sm:p-12">
            <SectionTitle
              eyebrow="Contact"
              title="Let’s build something useful."
              description="If you are hiring for AI, ML, or backend engineering work, I’m available to discuss internships, full-time roles, and project collaboration."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href="mailto:rnarendhra5@gmail.com"
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-cyan-300/50"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">rnarendhra5@gmail.com</p>
              </a>
              <a
                href="tel:+919494226544"
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-cyan-300/50"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Phone</p>
                <p className="mt-3 text-lg font-semibold text-white">+91 9494226544</p>
              </a>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Location</p>
                <p className="mt-3 text-lg font-semibold text-white">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
