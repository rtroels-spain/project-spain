export default function MetricCard({ label, value, unit, changePct }) {
  const isUp = changePct >= 0;
  const formatted =
    unit === "$"
      ? `$${Number(value).toLocaleString()}`
      : unit === "%"
      ? `${value}%`
      : Number(value).toLocaleString();

  return (
    <div style={styles.card}>
      <div style={styles.label}>{label}</div>
      <div style={styles.valueRow}>
        <div style={styles.value}>{formatted}</div>
        <div style={{ ...styles.change, color: isUp ? "#16a34a" : "#dc2626" }}>
          {isUp ? "▲" : "▼"} {Math.abs(changePct)}%
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "16px 18px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  },
  label: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 8,
    letterSpacing: 0.2,
    textTransform: "uppercase",
  },
  valueRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 12,
  },
  value: { fontSize: 28, fontWeight: 700, color: "#0f172a" },
  change: { fontSize: 13, fontWeight: 600 },
};
