export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fef3c7', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#1c1917', marginBottom: '1rem' }}>
        Hana the Hyena
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#44403c', marginTop: '1rem' }}>
        Welcome to Hana's website. This is a placeholder home page.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/play" 
          style={{ 
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#d97706',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '9999px',
            fontWeight: '600'
          }}
        >
          Go to Play & Activities →
        </a>
      </div>
    </main>
  );
}
