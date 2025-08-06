import NewVisitors from './NewVisitors';
import EnrolledStudents from './EnrolledStudents';
import TopUniversities from './TopUniversities';
import SuccessfullStudents from './SuccessfullStudents';

const DashboardContainer = () => {
    return (
        <div class="dashboard-analytics">
            <div class="container">
                <div class="dashboard-grid">
                    <NewVisitors />
                    <EnrolledStudents />
                    <TopUniversities />
                    <SuccessfullStudents />        
                </div>
            </div>
        </div>
    )
}

export default DashboardContainer;