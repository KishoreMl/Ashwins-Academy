import Abi from '../assets/Students/Abi.jpeg';
import Ashwin from '../assets/Students/Ashwin.jpeg';
import Dee from '../assets/Students/Dee.jpeg';
import Prav from '../assets/Students/Prav.jpeg';


const SuccessfullStudents = () => {

    return (
        <div class="analytics-card students-card">
              <h3>Successful Students</h3>
              <div class="students-list">
                <div class="student-item">
                  <div class="student-avatar">
                    <img src={Ashwin} alt="Ashwin" />
                  </div>
                  <div class="student-info">
                    <span class="student-name">Ashwin Chinnambalam</span>
                    <p class="college-name">TU Dresden</p>
                  </div>
                </div>

                <div class="student-item">
                  <div class="student-avatar">
                    <img src={Dee} alt="Deetchith" />
                  </div>
                  <div class="student-info">
                    <span class="student-name">Deetchith Kanna Ramadevan</span>
                    <p class="college-name">TU Chemnitz</p>
                  </div>
                </div>

                <div class="student-item">
                  <div class="student-avatar">
                    <img src={Abi} alt="Abhiee" />
                  </div>
                  <div class="student-info">
                    <span class="student-name">Abhiee Priethiev Senthil Kumar</span>
                    <p class="college-name">TU Chemnitz</p>
                  </div>
                </div>

                <div class="student-item">
                  <div class="student-avatar">
                    <img src={Prav} alt="Praveen" />
                  </div>
                  <div class="student-info">
                    <span class="student-name">Praveen Velmurugan</span>
                    <p class="college-name">Bauhaus University Weimar</p>
                  </div>
                </div>
              </div>
            </div>
        
    )
}

export default SuccessfullStudents;