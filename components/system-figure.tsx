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
          {trace ? "TRACELAB / INGESTION PATH" : "RECALL / EVIDENCE PATH"}
        </span>
        <span>Architecture sketch</span>
      </div>
      <ol className="system-steps">
        {steps.map((s, i) => (
          <li key={s}>
            <span className="node-number">0{i + 1}</span>
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
      <div className="figure-bottom">
        <span className="status-dot" />
        {trace
          ? "202 Accepted ≠ persisted"
          : "Every answer leads back to a source."}
      </div>
    </figure>
  );
}
