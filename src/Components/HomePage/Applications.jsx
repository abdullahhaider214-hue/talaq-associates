import './Applications.css';


function Applications() {
  const applications = [
    'Residential Buildings',
    'Commercial Complexes',
    'Industrial Buildings',
    'Boundary Walls',
    'Infill Walls & Partitions',
    'Roof Insulation & Screed',
    'Floor Levelling',
    'Trenches & Backfilling',
  ];

  return (
    <section className="applications-section">
      <div className="container">

        <div className="applications-heading">

          <h2>
            APPLICATIONS
          </h2>
        </div>

        <div className="applications-grid">
          {applications.map((application, index) => (
            <div
              className="application-item"
              key={index}
            >
              <span className="application-number">
                0{index + 1}
              </span>

              <span className="application-name">
                {application}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Applications;