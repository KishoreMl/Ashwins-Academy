import { youtubeChannel } from '../../utils/constants';

const handleSecondaryButtonClick = () => {
    window.open(youtubeChannel, "_blank");
};

const MainPage = (props) => {
    return (
        <main class="hero">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">
                        All-In-One Platform For<br/>
                        Pursuing Your Career in Abroad
                    </h1>
                    
                    <p class="hero-subtitle">
                        Kickstart your Abroad study adventure with us! Enjoy free support, our premium<br/>
                        services, and insightful resources - all just for you.
                    </p>
                    
                    <div class="hero-buttons">
                        <button class="primary-button" onClick={() => props.onFreeProfileEvaluationClick("Profile Evaluation", "profile")}>Free Profile Evaluation</button>
                        <button class="secondary-button" onClick={handleSecondaryButtonClick}>
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainPage;