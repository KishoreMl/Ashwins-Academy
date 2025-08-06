import './App.css';
import Header from './Components/Header';
import BlogSection from './Components/BlogSection';
import ChatWidget from './Components/ChatWidget';
import UniversityGrid from './Components/UniversityGrid';
import MainPage from './Components/MainPage';
import SearchFilter from './Components/SearchFilter';
import DashboardContainer from './Components/DashboardContainer';

function App() {
  return (
    <div class="App">
      <Header />

      {/* Hero Section */}
      <MainPage />

      {/* Dashboard Analytics Section */}
      <DashboardContainer />

      {/* Content Sections */}
      <section class="content-sections">
          <BlogSection />
      </section>

      {/* University Search Section */}
      <section class="university-search">
        <div class="container">
          <SearchFilter />
          <UniversityGrid />
        </div>
      </section>

      <ChatWidget />
    </div>
  );
}

export default App;