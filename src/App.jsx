import './App.css';
import Header from './Components/Header';
import BlogSection from './Components/BlogSection';
import ChatWidget from './Components/ChatWidget';
import MainPage from './Components/MainPage';
import DashboardContainer from './Components/DashboardContainer';

function App() {
  return (
    <div class="App">
      <Header />
      {/* Hero Section */}
      <MainPage />
      {/* Dashboard Analytics Section */}
      <DashboardContainer />
      {/* Blog Sections */}
      <section class="content-sections">
          <BlogSection />
      </section>
      <ChatWidget />
    </div>
  );
}

export default App;