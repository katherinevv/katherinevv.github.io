import "./Research.css";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  Image,
  Landmark,
  Monitor,
  Network,
  ScanFace,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

import BearThinking from "../../assets/images/Mascot/bear-thinking.png";

const RESEARCH_ITEMS = [
  {
    id: "poverty-clustering",
    type: "publication",

    eyebrow: "Published Research",
    institution: "IEEE ICITDA 2024",
    status: "Scopus Indexed",

    title:
      "Comparing K-Means and DBSCAN Algorithms for Clustering Poverty Levels in Papua Islands",

    shortDescription:
      "A comparative clustering study using K-Means and DBSCAN to analyze poverty patterns across 42 districts/cities in Papua and West Papua using BPS 2023 data.",

    authorship: [
      "First Author",
      "Presenter",
    ],

    tags: [
      "Data Mining",
      "Clustering",
      "Machine Learning",
    ],

    pipeline: [
      "BPS 2023",
      "Standardization",
      "K-Means / DBSCAN",
      "Silhouette Index",
    ],

    metric: {
      value: "0.6359",
      label: "Best Silhouette Index (K-Means)",
    },

    abstract:
      "Poverty has become one of the main challenges in Indonesia, especially in the eastern regions. According to data from the Central Bureau of Statistics (BPS), Papua Island currently ranks as the poorest province. As of 2018, the poverty rate in Papua was 27.6%, and as of March 2023, it was 26.03%. The government has made various efforts to address the issue of poverty in Papua, one of which is providing financial assistance in the form of BLT (Direct Cash Assistance). However, to achieve sustainable development, more effective and targeted strategies are needed. The government's efforts to address poverty in Papua must be supported by accurate and efficient data analysis. This study involves clustering data on impoverished populations from 42 districts/cities in Papua and West Papua, obtained from the Central Bureau of Statistics (BPS) website in 2023. The study aims to compare the clustering results using the K-Means and DBSCAN algorithms. The performance of these algorithms is determined by the highest Silhouette Index (SI) value. After the data underwent a standardization process, the clustering results using the K-Means algorithm achieved the best SI value of 0.6359 with K=4. Meanwhile, the clustering results using the DBSCAN algorithm achieved the best SI value of 0.3678 with eps 1.8 and MinPts 8. The SI value of the K-Means algorithm is higher than that of the DBSCAN algorithm, indicating that clustering using the K-Means algorithm is superior to DBSCAN.",

    researchFlow: {
      start: "Start",
      steps: [
        "Data Collection",
        "Data Preprocessing",
        "Algorithm Selection",
      ],
      branches: [
        "K-Means",
        "DBSCAN",
      ],
      finalSteps: [
        "Validity Testing (SI)",
        "Results and Analysis",
      ],
      end: "Stop",
    },

    comparisonResults: [
      {
        method: "K-Means",
        score: "0.6359",
        note: "Best Silhouette Index",
        parameters: "K = 4",
        highlight: true,
      },
      {
        method: "DBSCAN",
        score: "0.3678",
        note: "Silhouette Index",
        parameters: "eps = 1.8 · MinPts = 8",
        highlight: false,
      },
    ],

    keyFinding:
      "K-Means achieved a higher Silhouette Index than DBSCAN, indicating better clustering performance for the poverty dataset analyzed across Papua and West Papua.",

    detailSections: [
      {
        heading: "Research Focus",
        content:
          "This study explores poverty-level patterns across 42 districts/cities in Papua and West Papua using socio-economic data from BPS 2023, with the goal of comparing the clustering performance of K-Means and DBSCAN.",
      },
      {
        heading: "Why It Matters",
        content:
          "More accurate grouping of poverty conditions can help support better-targeted analysis and decision-making for sustainable poverty reduction strategies.",
      },
    ],

    doiUrl:
      "https://doi.org/10.1109/ICITDA64560.2024.10810077",
  },

  {
    id: "face-recognition-thesis",
    type: "thesis",

    eyebrow: "Undergraduate Thesis",
    institution: "BINUS University",
    status: "Internal Repository",

    title:
      "Development of a Face Recognition Model with Anti-Spoofing to Support Human Identification",

    shortDescription:
      "An AI-based face recognition system integrating identity recognition and liveness detection to support more secure biometric identification.",

    authorship: [
      "Undergraduate Research",
      "Artificial Intelligence",
    ],

    tags: [
      "Computer Vision",
      "Face Recognition",
      "Anti-Spoofing",
    ],

    pipeline: [
      "445 Images / 30 Subjects",
      "MTCNN",
      "FaceNet",
      "SVM",
      "5-Fold Stratified CV",
    ],

    pipelineExtra:
      "Face Anti-Spoofing (FAS) [MiniFASNet + Fourier Transformation]",

    metric: {
      value: "98.85%",
      label: "Average Accuracy",
    },

    abstract:
      "This research aims to develop an Artificial Intelligence–based face recognition system integrated with a liveness detection mechanism to enhance the security of biometric identification systems. The system is designed to accurately recognize individual identities under various facial image conditions, including variations in lighting, capture angles, and image quality. The processing stages include face detection using the Multi-task Cascaded Convolutional Neural Network (MTCNN), facial feature extraction using FaceNet, and identity classification using Support Vector Machine (SVM). To prevent spoofing attacks, a liveness detection mechanism is implemented to distinguish between real and fake faces. System performance is evaluated using a public dataset consisting of 445 facial images from 30 subjects with 5-Fold Stratified Cross-Validation. The experimental results show that the proposed system achieves an average accuracy of 98.85%, indicating high performance and model stability. Furthermore, functional demonstrations confirm that the liveness detection mechanism is effective in detecting spoof attacks using printed images and digital display screens (replay attacks).",

    detailSections: [
      {
        heading: "Research Focus",
        content:
          "This research develops an AI-based face recognition system integrated with liveness detection to strengthen the security of biometric human identification.",
      },
      {
        heading: "Why It Matters",
        content:
          "Integrating liveness detection with face recognition helps strengthen biometric security by reducing the risk of spoofing attempts using printed facial images or digital display screens.",
      },
    ],

    researchFlow: {
      start: "Start",
      steps: [
        {
          label: "Dataset",
          detail: "445 Images · 30 Subjects",
        },
        {
          label: "Preprocessing",
          detail: "MTCNN",
        },
        {
          label: "Feature Extraction",
          detail: "FaceNet",
        },
        {
          label: "Classification",
          detail: "SVM",
        },
        {
          label: "Model Testing",
          detail: "5-Fold Stratified CV",
        },
        {
          label: "Liveness Detection",
          detail: "FAS · MiniFASNet + Fourier Transformation",
        },
      ],
      end: "End",
    },

    crossValidationSummary: {
      score: "98.85%",
      label: "Average Accuracy",
      parameters: "5-Fold Stratified Cross-Validation",
    },

    crossValidationResults: [
      { fold: "Fold 1", accuracy: "100.00%" },
      { fold: "Fold 2", accuracy: "96.55%" },
      { fold: "Fold 3", accuracy: "98.85%" },
      { fold: "Fold 4", accuracy: "100.00%" },
      { fold: "Fold 5", accuracy: "98.84%" },
    ],

    antiSpoofingResult: {
      label: "Face Anti-Spoofing (FAS)",
      note: "Liveness Detection Scenarios",
      scenarios: [
        {
          type: "print",
          label: "Printed Image Attack",
          status: "Detected",
          description: "Printed-face spoof attempt identified",
        },
        {
          type: "screen",
          label: "Replay Attack",
          status: "Detected",
          description: "Digital display replay attempt identified",
        },
      ],
    },

    keyFinding:
      "Across 5-Fold Stratified Cross-Validation, the face recognition model achieved an average accuracy of 98.85%, with fold accuracies ranging from 96.55% to 100.00%. Functional demonstrations also showed that the FAS liveness detection mechanism using MiniFASNet with Fourier Transformation could detect spoofing attempts from printed images and digital display screens (replay attacks).",

    doiUrl: null,
  },
];

const THESIS_DOTS = [
  { x: "50%", y: "16%", size: "4px" },
  { x: "41%", y: "19%", size: "4px" },
  { x: "59%", y: "19%", size: "4px" },
  { x: "34%", y: "26%", size: "4px" },
  { x: "66%", y: "26%", size: "4px" },
  { x: "28%", y: "36%", size: "4px" },
  { x: "72%", y: "36%", size: "4px" },
  { x: "24%", y: "48%", size: "4px" },
  { x: "76%", y: "48%", size: "4px" },
  { x: "26%", y: "61%", size: "4px" },
  { x: "74%", y: "61%", size: "4px" },
  { x: "31%", y: "73%", size: "4px" },
  { x: "69%", y: "73%", size: "4px" },
  { x: "40%", y: "82%", size: "4px" },
  { x: "50%", y: "85%", size: "4px" },
  { x: "60%", y: "82%", size: "4px" },
  { x: "40%", y: "38%", size: "5px" },
  { x: "46%", y: "37%", size: "4px" },
  { x: "54%", y: "37%", size: "4px" },
  { x: "60%", y: "38%", size: "5px" },
  { x: "50%", y: "48%", size: "4px" },
  { x: "48%", y: "56%", size: "4px" },
  { x: "52%", y: "56%", size: "4px" },
  { x: "42%", y: "66%", size: "4px" },
  { x: "47%", y: "69%", size: "4px" },
  { x: "53%", y: "69%", size: "4px" },
  { x: "58%", y: "66%", size: "4px" },
  { x: "21%", y: "48%", size: "3px" },
  { x: "79%", y: "48%", size: "3px" },
  { x: "50%", y: "26%", size: "3px" },
];

function ResearchVisual({ type }) {
  if (type === "publication") {
    return (
      <div className="research-visual research-visual-publication" aria-hidden="true">
        <div className="research-cluster research-cluster-a">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={`a-${index}`}
              style={{
                "--i": index,
                "--radius": `${28 + (index % 4) * 10}px`,
                "--node-opacity": 0.36 + (index % 5) * 0.11,
              }}
            />
          ))}
        </div>
        <div className="research-cluster research-cluster-b">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={`a-${index}`}
              style={{
                "--i": index,
                "--radius": `${28 + (index % 4) * 10}px`,
                "--node-opacity": 0.36 + (index % 5) * 0.11,
              }}
            />
          ))}
        </div>
        <div className="research-cluster research-cluster-c">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={`a-${index}`}
              style={{
                "--i": index,
                "--radius": `${28 + (index % 4) * 10}px`,
                "--node-opacity": 0.36 + (index % 5) * 0.11,
              }}
            />
          ))}
        </div>

        <svg className="research-mini-chart" viewBox="0 0 260 150" role="presentation">
          <defs>
            <linearGradient id="researchLine" x1="0" x2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
          </defs>
          <g className="research-chart-bars">
            {[54, 82, 68, 112, 94, 128, 116].map((height, index) => (
              <rect
                key={index}
                x={18 + index * 32}
                y={132 - height}
                width="14"
                height={height}
                rx="4"
              />
            ))}
          </g>
          <polyline
            className="research-chart-line"
            points="18,105 50,92 82,98 114,70 146,78 178,50 210,36 242,16"
            fill="none"
            stroke="url(#researchLine)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {["18,105", "50,92", "82,98", "114,70", "146,78", "178,50", "210,36", "242,16"].map(
            (point) => {
              const [cx, cy] = point.split(",");
              return <circle key={point} cx={cx} cy={cy} r="4" className="research-chart-point" />;
            }
          )}
        </svg>
      </div>
    );
  }

  return (
    <div className="research-visual research-visual-thesis" aria-hidden="true">
      <div className="research-face-frame research-face-frame-left">
        <svg viewBox="0 0 160 190" role="presentation">
          <path d="M80 20C48 20 30 45 30 78c0 18 5 36 14 50 7 11 17 20 24 25 6 4 10 6 12 6s6-2 12-6c7-5 17-14 24-25 9-14 14-32 14-50 0-33-18-58-50-58Z" />
          <path d="M58 78c7-5 14-5 21 0M101 78c-7-5-14-5-21 0M80 79v27M67 120c8 6 18 6 26 0" />
          <path d="M45 48c10-12 23-18 35-18s25 6 35 18M38 92c10 1 18 4 24 8M122 92c-10 1-18 4-24 8" />
        </svg>
        <span className="research-scan-line" />
      </div>

      <div className="research-face-flow-arrow">→</div>

      <div className="research-face-frame research-face-frame-mid">
        <svg viewBox="0 0 160 190" role="presentation">
          <path d="M47 25 82 18l32 16 18 34-8 48-25 42-37-3-23-30-10-48Z" />
          <path d="m47 25 32 31 35-22M79 56l45 60M79 56 39 88m84 28-61 39M38 88l24 67M79 56l-17 99" />
        </svg>
      </div>

      <div className="research-face-flow-arrow">→</div>

      <div className="research-face-frame research-face-frame-right">
        <div className="research-dot-face">
          {THESIS_DOTS.map((dot, index) => (
            <span
              key={`${dot.x}-${dot.y}-${index}`}
              style={{
                "--x": dot.x,
                "--y": dot.y,
                "--size": dot.size,
                "--delay": `${index * -70}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="research-wave-field">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} style={{ "--wave": index }} />
        ))}
      </div>
    </div>
  );
}

function ResearchIcon({ tag }) {
  const normalized = tag.toLowerCase();

  if (normalized.includes("data")) {
    return <Database size={15} />;
  }

  if (normalized.includes("cluster")) {
    return <Network size={15} />;
  }

  if (normalized.includes("machine learning")) {
    return <BrainCircuit size={15} />;
  }

  if (normalized.includes("computer vision")) {
    return <Eye size={15} />;
  }

  if (normalized.includes("face recognition")) {
    return <ScanFace size={15} />;
  }

  if (normalized.includes("spoof")) {
    return <ShieldCheck size={15} />;
  }

  return <FileText size={15} />;
}

function ResearchCard({ item, index, onOpen }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.18, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const isPublication = item.type === "publication";

  return (
    <article
      ref={cardRef}
      className={`research-card research-card-${item.type} ${visible ? "is-visible" : ""}`}
      style={{ "--reveal-delay": `${index * 120}ms` }}
    >
      <span className="research-card-edge-glow" aria-hidden="true" />
      <span className="research-card-grid" aria-hidden="true" />

      <div className="research-card-main">
        <div className="research-card-meta">
          <span className="research-type-badge">
            {isPublication ? <FileText size={16} /> : <GraduationCap size={17} />}
            {item.eyebrow}
          </span>

          <span className="research-card-institution">{item.institution}</span>
          <span className="research-meta-dot" aria-hidden="true">•</span>
          <span className="research-card-status">{item.status}</span>
        </div>

        <div className="research-card-copy">
          <h3 className="research-card-title">{item.title}</h3>
          <p className="research-card-description">{item.shortDescription}</p>
        </div>

        {item.pipeline && (
          <div className="research-pipeline-wrap">
            <div className="research-pipeline" aria-label="Research pipeline">
              {item.pipeline.map((step, pipelineIndex) => (
                <div className="research-pipeline-fragment" key={step}>
                  <span className="research-pipeline-step"> {step} </span>

                  {pipelineIndex < item.pipeline.length - 1 && (
                    <span className="research-pipeline-arrow" aria-hidden="true"> → </span>
                  )}
                </div>
              ))}
            </div>

            {item.pipelineExtra && (
              <div className="research-pipeline-extra">
                <span className="research-pipeline-extra-plus" aria-hidden="true"> + </span>

                <ShieldCheck size={14} />

                <span>{item.pipelineExtra}</span>
              </div>
            )}
          </div>
        )}

        <div className="research-tag-list">
          {item.tags.map((tag) => (
            <span className="research-tag" key={tag}>
              <ResearchIcon tag={tag} />
              {tag}
            </span>
          ))}
        </div>

        <div className="research-authorship">
          {isPublication ? <UserRound size={17} /> : <Landmark size={17} />}
          {item.authorship.map((label, authorIndex) => (
            <span key={label}>
              {authorIndex > 0 && <span className="research-authorship-separator">•</span>}
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="research-card-showcase">
        <ResearchVisual type={item.type} />

        <div className="research-card-actions">
          <div className="research-metric">
            <strong>{item.metric.value}</strong>
            <span>{item.metric.label}</span>
          </div>

          <button
            type="button"
            className="research-abstract-button"
            onClick={() => onOpen(item)}
          >
            <span>Explore Research</span>
            <ArrowRight size={17} />
          </button>

          <span className="research-access-note">
            {isPublication ? "DOI available" : "Internal repository"}
          </span>
        </div>
      </div>
    </article>
  );
}

function ResearchModal({ item, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    modalRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previous?.focus?.();
    };
  }, [onClose]);

  if (!item) return null;

  const isPublication = item.type === "publication";
  const keyResults = item.comparisonResults ?? item.detailResults ?? [];

  return createPortal(
    <div
      className="research-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="research-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${item.id}-research-modal-title`}
        tabIndex={-1}
        ref={modalRef}
      >
        <div className="research-modal-topbar">
          <div>
            <span className="research-modal-kicker">{item.eyebrow}</span>
            <span className="research-modal-source">{item.institution}</span>
            {item.status && (
              <span className="research-modal-source">• {item.status}</span>
            )}
          </div>

          <button
            type="button"
            className="research-modal-close"
            onClick={onClose}
            aria-label="Close research details"
          >
            <X size={18} />
          </button>
        </div>

        <div className="research-modal-content">
          <h2 id={`${item.id}-research-modal-title`} className="research-modal-title">
            {item.title}
          </h2>

          {item.authorship?.length > 0 && (
            <div className="research-modal-meta-line">
              {item.authorship.map((label, index) => (
                <span key={label}>
                  {index > 0 && <span aria-hidden="true"> • </span>}
                  {label}
                </span>
              ))}
            </div>
          )}

          {item.abstract && (
            <div className="research-modal-section">
              <span className="research-modal-label">Abstract</span>
              <p>{item.abstract}</p>
            </div>
          )}

          {item.detailSections?.length > 0 && (
            <div className="research-modal-detail-grid">
              {item.detailSections.map((section) => (
                <div className="research-modal-detail-card" key={section.heading}>
                  <span className="research-modal-label">{section.heading}</span>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          )}

          {item.researchFlow && (
            <div className="research-modal-section">
              <span className="research-modal-label">Research Process</span>

              <div
                className={`research-modal-flow ${item.researchFlow.branches?.length > 0
                  ? "has-branches"
                  : "is-linear"
                  }`}
              >
                <span className="research-flow-terminal">
                  {item.researchFlow.start}
                </span>

                <span className="research-flow-arrow" aria-hidden="true">↓</span>

                {item.researchFlow.steps?.map((step, stepIndex) => {
                  const isStructuredStep = typeof step === "object" && step !== null;
                  const stepKey = isStructuredStep
                    ? `${step.label}-${step.detail}`
                    : `${step}-${stepIndex}`;

                  return (
                    <div className="research-flow-step" key={stepKey}>
                      {isStructuredStep ? (
                        <div className="research-flow-step-card">
                          <span className="research-flow-step-label">
                            {step.label}
                          </span>
                          <strong className="research-flow-step-detail">
                            {step.detail}
                          </strong>
                        </div>
                      ) : (
                        <span className="research-flow-step-simple">{step}</span>
                      )}

                      <span className="research-flow-arrow" aria-hidden="true">↓</span>
                    </div>
                  );
                })}

                {item.researchFlow.branches?.length > 0 && (
                  <>
                    <div className="research-flow-branches">
                      {item.researchFlow.branches.map((branch) => (
                        <span className="research-flow-branch" key={branch}>
                          {branch}
                        </span>
                      ))}
                    </div>
                    <span className="research-flow-arrow" aria-hidden="true">↓</span>
                  </>
                )}

                {item.researchFlow.finalSteps?.map((step) => (
                  <div className="research-flow-step" key={step}>
                    <span className="research-flow-step-simple">
                      {step}
                    </span>

                    <span className="research-flow-arrow" aria-hidden="true">
                      ↓
                    </span>
                  </div>
                ))}

                <span className="research-flow-terminal">
                  {item.researchFlow.end}
                </span>
              </div>
            </div>
          )}

          {!item.researchFlow && item.methods?.length > 0 && (
            <div className="research-modal-section">
              <span className="research-modal-label">Methods & Approach</span>
              <div className="research-modal-methods">
                {item.methods.map((method) => (
                  <span key={method}>{method}</span>
                ))}
              </div>
            </div>
          )}

          {item.crossValidationResults?.length > 0 && (
            <div className="research-modal-section">
              <span className="research-modal-label">Key Results</span>

              {item.crossValidationSummary && (
                <div className="research-cv-summary">
                  <div>
                    <span className="research-cv-summary-kicker">
                      Face Recognition Performance
                    </span>
                    <strong>{item.crossValidationSummary.score}</strong>
                    <span>{item.crossValidationSummary.label}</span>
                  </div>

                  <span className="research-cv-summary-method">
                    {item.crossValidationSummary.parameters}
                  </span>
                </div>
              )}

              <div className="research-fold-results" aria-label="Cross-validation fold results">
                {item.crossValidationResults.map((result) => (
                  <div className="research-fold-result" key={result.fold}>
                    <span>{result.fold}</span>
                    <strong>{result.accuracy}</strong>
                  </div>
                ))}
              </div>

              {item.antiSpoofingResult?.scenarios?.length > 0 && (
                <div className="research-fas-result">
                  <div className="research-fas-result-heading">
                    <div>
                      <span className="research-comparison-method">
                        {item.antiSpoofingResult.label}
                      </span>
                      <strong>Scenario Results</strong>
                    </div>
                    <span>{item.antiSpoofingResult.note}</span>
                  </div>

                  <div className="research-fas-scenarios">
                    {item.antiSpoofingResult.scenarios.map((scenario) => (
                      <div
                        className={`research-fas-scenario research-fas-scenario-${scenario.type}`}
                        key={scenario.type}
                      >
                        <div className="research-fas-visual" aria-hidden="true">
                          {scenario.type === "print" ? (
                            <div className="research-fas-print">
                              <Image size={32} />
                              <span className="research-fas-scan-line" />
                            </div>
                          ) : (
                            <div className="research-fas-screen">
                              <Monitor size={34} />
                              <span className="research-fas-scan-line" />
                              <span className="research-fas-screen-flicker" />
                            </div>
                          )}

                          <span className="research-fas-check">
                            <CheckCircle2 size={18} />
                          </span>
                        </div>

                        <div className="research-fas-scenario-copy">
                          <span>{scenario.label}</span>
                          <strong>
                            <CheckCircle2 size={16} />
                            {scenario.status}
                          </strong>
                          <p>{scenario.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {!item.crossValidationResults?.length && keyResults.length > 0 ? (
            <div className="research-modal-section">
              <span className="research-modal-label">Key Results</span>

              <div className="research-modal-comparison">
                {keyResults.map((result) => (
                  <div
                    key={result.method}
                    className={`research-comparison-card ${result.highlight ? "is-highlight" : ""
                      } ${result.compact ? "is-compact" : ""}`}
                  >
                    <span className="research-comparison-method">
                      {result.method}
                    </span>
                    <strong className="research-comparison-score">
                      {result.score}
                    </strong>
                    <span className="research-comparison-note">
                      {result.note}
                    </span>
                    <span className="research-comparison-parameters">
                      {result.parameters}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : !item.crossValidationResults?.length && item.metric ? (
            <div className="research-modal-section">
              <span className="research-modal-label">Key Result</span>
              <div className="research-modal-metric research-modal-metric-single">
                <strong>{item.metric.value}</strong>
                <span>{item.metric.label}</span>
              </div>
            </div>
          ) : null}

          {item.keyFinding && (
            <div className="research-modal-section">
              <span className="research-modal-label">Key Finding</span>
              <div className="research-modal-finding">
                <p>{item.keyFinding}</p>
              </div>
            </div>
          )}

          {isPublication ? (
            <div className="research-modal-section research-modal-publication-section">
              <span className="research-modal-label">Publication</span>

              <div className="research-modal-publication">
                <div className="research-modal-publication-copy">
                  <strong>{item.institution}</strong>
                  <span>{item.status}</span>
                  {item.authorship?.length > 0 && (
                    <span>{item.authorship.join(" · ")}</span>
                  )}
                </div>

                {item.doiUrl ? (
                  <a
                    href={item.doiUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="research-modal-primary-action"
                  >
                    Open DOI
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="research-modal-disabled-action">
                    DOI unavailable
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="research-modal-section research-modal-publication-section">
              <span className="research-modal-label">Availability</span>
              <div className="research-modal-publication">
                <div className="research-modal-publication-copy">
                  <strong>{item.institution}</strong>
                  <span>
                    This undergraduate thesis is archived in the university's
                    internal repository and is not publicly distributed.
                  </span>
                </div>

                <span className="research-modal-disabled-action">
                  Internal repository only
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Research() {
  const [activeResearch, setActiveResearch] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeResearch ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeResearch]);

  return (
    <section className="research" id="research">
      <div className="research-ambient" aria-hidden="true">
        <span className="research-ambient-orb research-ambient-orb-one" />
        <span className="research-ambient-orb research-ambient-orb-two" />
        <span className="research-ambient-grid" />
      </div>

      <div className="research-container">
        <div className="research-header-shell">
          <div id="research-bear-flight-target" className="research-thinking-bear" aria-hidden="true">
            <span className="research-thinking-glow" />

            <div className="research-thinking-bear-float">
              <img
                src={BearThinking}
                alt=""
                className="research-thinking-bear-image"
              />
            </div>

            <div className="research-thought-trail">
              <span className="research-thought-dot research-thought-dot-1" />
              <span className="research-thought-dot research-thought-dot-2" />
              <span className="research-thought-cloud">
                <span>?</span>
              </span>
            </div>

            <div className="research-bear-orbit">
              <span className="research-orbit-ring" />

              <span className="research-orbit-chip research-orbit-chip-ai">
                <BrainCircuit size={15} />
              </span>

              <span className="research-orbit-chip research-orbit-chip-face">
                <ScanFace size={15} />
              </span>

              <span className="research-orbit-chip research-orbit-chip-stats">
                <BarChart3 size={15} />
              </span>
            </div>
          </div>

          <div className="research-header-constellation" aria-hidden="true">
            <span className="research-constellation-glow" />

            <svg viewBox="0 0 230 160" role="presentation">
              <path
                className="research-constellation-line"
                d="M28 118 L72 72 L116 96 L158 48 L204 68"
              />
              <path
                className="research-constellation-line research-constellation-line-secondary"
                d="M72 72 L102 32 L158 48"
              />

              <circle className="research-constellation-node" cx="28" cy="118" r="4" />
              <circle className="research-constellation-node" cx="72" cy="72" r="5" />
              <circle className="research-constellation-node" cx="102" cy="32" r="3.5" />
              <circle className="research-constellation-node" cx="116" cy="96" r="4" />
              <circle className="research-constellation-node" cx="158" cy="48" r="5" />
              <circle className="research-constellation-node" cx="204" cy="68" r="4" />
            </svg>

            <span className="research-constellation-chip research-constellation-chip-scan">
              <ScanFace size={16} />
            </span>

            <span className="research-constellation-chip research-constellation-chip-chart">
              <BarChart3 size={16} />
            </span>
          </div>

          <header className="research-header">
            <div className="research-eyebrow-row">
              <span className="research-eyebrow-line" aria-hidden="true" />
              <span className="research-eyebrow">Research & Publications</span>
              <span className="research-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="research-heading">Exploring Problems Beyond the Build</h2>

            <p className="research-subtitle">
              Researching at the intersection of data analysis, machine learning,
              and intelligent systems to create meaningful impact.
            </p>
          </header>
        </div>

        <div className="research-list">
          {RESEARCH_ITEMS.map((item, index) => (
            <ResearchCard
              key={item.id}
              item={item}
              index={index}
              onOpen={setActiveResearch}
            />
          ))}
        </div>
      </div>

      {activeResearch && (
        <ResearchModal
          item={activeResearch}
          onClose={() => setActiveResearch(null)}
        />
      )}
    </section>
  );
}