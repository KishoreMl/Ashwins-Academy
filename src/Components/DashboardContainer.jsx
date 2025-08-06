import NewVisitors from './NewVisitors';
import DescriptionCard from './DescriptionCard';
import TopUniversities from './TopUniversities';
import SuccessfullStudents from './SuccessfullStudents';

const DashboardContainer = () => {
    return (
        <div class="dashboard-analytics">
            <div class="container">
                <div class="dashboard-grid">
                    <NewVisitors />
                    <DescriptionCard />
                    <TopUniversities />
                    <SuccessfullStudents />        
                </div>
            </div>
        </div>
    )
}

export default DashboardContainer;