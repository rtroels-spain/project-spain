export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderBottom: '1px solid #e5e7eb',
      background: '#ffffff',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ fontWeight: 700 }}>Project Spain</div>
      <div style={{ fontSize: 14, color: '#6b7280' }}>Dashboard</div>
    </nav>
  );
}
