export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f9fafb',
      color: '#1f2937',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#1e3a8a' }}>🚀 Welcome to My DevOps App</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        This Next.js app is containerized with Docker, deployed on Kubernetes, <br />
        and CI/CD is automated via GitHub Actions.
      </p>

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#f59e0b' }}>Project Features:</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px' }}>
          <li>✅ Multi-stage Docker build (lightweight & production-ready)</li>
          <li>✅ Kubernetes Deployment with replicas & health checks</li>
          <li>✅ CI/CD workflow with GitHub Actions</li>
          <li>✅ GHCR Container Registry image push</li>
        </ul>
      </div>

      <footer style={{ marginTop: '60px', fontSize: '14px', color: '#6b7280' }}>
        Made with ❤️ by [Syed Nasir]
      </footer>
    </div>
  )
}
