export default function ProjectCards() {
  return (
    <div className="project-grid-wrapper" id="projects">
        <div className="project-grid">

          <div className="project-card">
            <div className="project-card-placeholder">
              picture
            </div>
            <div className="project-card-text">
              <h2>PROJECT NAME</h2>
              <p>description here</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-placeholder">picture</div>
            <div className="project-card-text">
              <h2>PROJECT NAME</h2>
              <p>description here</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-placeholder">picture</div>
            <div className="project-card-text">
              <h2>PROJECT NAME</h2>
              <p>description here</p>
            </div>
          </div>

        </div>
      </div>
  );
}