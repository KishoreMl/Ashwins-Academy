

const TopUniversities = () => {

    return (
        <div class="analytics-card universities-card">
              <h3>Top Universities</h3>
              <div class="universities-list">
                <div class="university-item">
                  <div class="university-logo">
                    <div class="logo-circle tum">TUM</div>
                  </div>
                  <div class="university-info">
                    <div class="university-name">Technical University of Munich</div>
                  </div>
                  <div class="university-rank">
                    <span class="rank-label">QS Rank</span>
                    <span class="rank-number">28</span>
                  </div>
                </div>

                <div class="university-item">
                  <div class="university-logo">
                    <div class="logo-circle tud">TU</div>
                  </div>
                  <div class="university-info">
                    <div class="university-name">RWTH Aachen Universty</div>
                  </div>
                  <div class="university-rank">
                    <span class="rank-number">105</span>
                  </div>
                </div>

                <div class="university-item">
                  <div class="university-logo">
                    <div class="logo-circle uom">🎓</div>
                  </div>
                  <div class="university-info">
                    <div class="university-name">TU Dresden</div>
                  </div>
                  <div class="university-rank">
                    <span class="rank-number">234</span>
                  </div>
                </div>

                <div class="university-item">
                  <div class="university-logo">
                    <div class="logo-circle fub">📘</div>
                  </div>
                  <div class="university-info">
                    <div class="university-name">University of Stuttgart</div>
                  </div>
                  <div class="university-rank">
                    <span class="rank-number">314</span>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default TopUniversities;