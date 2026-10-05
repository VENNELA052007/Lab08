function Profile({ student }) {
  return (
    <main className="content-page">
      <header className="page-heading">
        <p className="eyebrow">YOUR ACCOUNT</p>
        <h1>Profile</h1>
        <p className="muted">Your registered student information.</p>
      </header>

      <section className="profile-card" aria-label="Student profile">
        <div className="avatar" aria-hidden="true">
          {student.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
        </div>
        <div className="profile-name">
          <p className="detail-label">Student</p>
          <h2>{student.name}</h2>
        </div>
        <dl className="profile-fields">
          <div>
            <dt>Student ID</dt>
            <dd>{student.id}</dd>
          </div>
          <div>
            <dt>Branch</dt>
            <dd>{student.branch}</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}

export default Profile
