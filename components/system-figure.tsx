export function SystemFigure({
  kind = "tracelab",
}: {
  kind?: "tracelab" | "recall";
}) {
  const trace = kind === "tracelab";
  const steps = trace
    ? ["FastAPI", "Redis queue", "Worker", "PostgreSQL"]
    : ["PDFs", "Hybrid search", "Reranker", "Ollama"];
  return (
    <figure className={`system-figure ${kind}`}>
      <div className="figure-top">
        <span>
          {trace ? "How a trace gets stored" : "From a PDF to an answer"}
        </span>
        <span>Architecture sketch</span>
      </div>
      <ol className="system-steps">
        {steps.map((s, i) => (
          <li key={s}>
            <span className="node-number">{i + 1}.</span>
            <strong>{s}</strong>
            <small>
              {
                (trace
                  ? [
                      "Accept request",
                      "Enqueue payload",
                      "Consume & write",
                      "Persist trace",
                    ]
                  : [
                      "Parse & embed",
                      "Semantic + BM25",
                      "Rank evidence",
                      "Grounded answer",
                    ])[i]
              }
            </small>
          </li>
        ))}
      </ol>
      <figcaption className="figure-bottom">
        <span className="status-dot" />
        {trace
          ? "202 Accepted ≠ persisted"
          : "Local RAG pipeline · citations link to source pages"}
      </figcaption>
    </figure>
  );
}

export function TraceArchitecture() {
  const steps = [
    { name: "FastAPI", detail: "Accept the trace request", phase: "Request path" },
    { name: "Redis queue", detail: "Queue the trace payload", phase: null },
    { name: "Worker", detail: "Consume the queued trace", phase: "Background processing" },
    { name: "PostgreSQL", detail: "Write the trace to the database", phase: null },
  ];
  return (
    <figure className="trace-architecture" aria-labelledby="trace-architecture-title">
      <figcaption id="trace-architecture-title">How TraceLab works</figcaption>
      <ol>
        {steps.map((step, index) => (
          <li key={step.name}>
            {step.phase ? <span className="trace-phase">{step.phase}</span> : null}
            <div className="trace-step">
              <span className="trace-index" aria-hidden="true">0{index + 1}</span>
              <strong>{step.name}</strong>
              <span>{step.detail}</span>
            </div>
          </li>
        ))}
      </ol>
      <p>API responds 202 after enqueue.</p>
    </figure>
  );
}
