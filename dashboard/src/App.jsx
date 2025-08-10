import Navbar from './components/Navbar.jsx'
import MetricCard from './components/MetricCard.jsx'
import metrics from './data/metrics.json'

export default function App() {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji',
      background: '#f8fafc',
      minHeight: '100vh'
    }}>
      <Navbar />
      <main style={{ maxWidth: 1040, margin: '24px auto', padding: '0 16px' }}>
        <h1 style={{ margin: '0 0 12px 0' }}>Hello, Dashboard 👋</h1>
        <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: 16 }}>
          KPI overview — quick read on product health.
        </p>

        {/* KPI GRID */}
        <section style={gridStyles.grid}>
          {metrics.map(m => (
            <MetricCard
              key={m.id}
              label={m.label}
              value={m.value}
              unit={m.unit}
              changePct={m.changePct}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

const gridStyles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fill, minmax(220px, 1fr) )',
    gap: 16
  }
}

