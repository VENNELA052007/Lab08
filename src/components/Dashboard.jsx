function Dashboard({ student }) {
  return (
    <main className="content-page">
      <header className="page-heading">
        <p className="eyebrow">OVERVIEW</p>
        <h1>Dashboard</h1>
        <p className="muted">Welcome, {student.name}. Here are your student details.</p>
      </header>

      <section className="details-grid" aria-label="Student details">
        <article className="detail-card">
          <span className="detail-icon" aria-hidden="true">01</span>
          <p className="detail-label">Student name</p>
          <h2>{student.name}</h2>
        </article>
        <article className="detail-card">
          <span className="detail-icon" aria-hidden="true">02</span>
          <p className="detail-label">Student ID</p>
          <h2>{student.id}</h2>
        </article>
        <article className="detail-card">
          <span className="detail-icon" aria-hidden="true">03</span>
          <p className="detail-label">Branch</p>
          <h2>{student.branch}</h2>
        </article>
      </section>
    </main>
  )
}

export default Dashboard
