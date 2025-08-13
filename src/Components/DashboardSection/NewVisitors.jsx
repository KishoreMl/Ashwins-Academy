const NewVisitors = () => {
    return (
        <div class="analytics-card visitors-card">
              <h3>New visitors</h3>
              <div class="circular-chart-container">
                <div class="circular-chart">
                  <div class="chart-center">
                    <div class="total-visitors">102,928</div>
                  </div>
                </div>
                <div class="chart-legend">
                  <div class="legend-item">
                    <span class="legend-color winter"></span>
                    <span class="legend-text">68,642 Winter</span>
                  </div>
                  <div class="legend-item">
                    <span class="legend-color summer"></span>
                    <span class="legend-text">34,286 Summer</span>
                  </div>
                </div>
              </div>
            </div>

    )
}

export default NewVisitors;