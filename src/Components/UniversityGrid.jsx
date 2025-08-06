const UniversityGrid = () => {
    return (
        <div class="university-grid">
        <div class="university-card">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" alt="University of Cologne" class="university-image" />
          <div class="university-content">
            <h3>University of Cologne</h3>
            <p>MSc in Physics (Cologne)</p>
            <button class="save-btn">Save</button>
          </div>
        </div>

        <div class="university-card">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop" alt="University of Hamburg" class="university-image" />
          <div class="university-content">
            <h3>University of Hamburg</h3>
            <p>Master of Science in Economics</p>
            <button class="save-btn">Save</button>
          </div>
        </div>

        <div class="university-card">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop" alt="TU Bergakademie Freiberg" class="university-image" />
          <div class="university-content">
            <h3>TU Bergakademie Freiberg</h3>
            <p>Applied Geoscience</p>
            <button class="save-btn">Save</button>
          </div>
        </div>
      </div>
    )
}

export default UniversityGrid;