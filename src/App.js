import React from 'react';
import Footer from './Components/Footer/Footer.component';
import TopBar from './Components/TopBar/TopBar.component';
import ContactUsPage from './Pages/ContactUs/ContactUs.component';
import LandingPage from './Pages/LandingPage/LandingPage.component';
import MissionPage from './Pages/MissionPage/Mission.component';
import NewsPage from './Pages/NewsPage/News.component';

const App = () => {
  return (
    <div>
      <TopBar />
      <LandingPage />
      <MissionPage />
      <NewsPage />
      <ContactUsPage />
      <Footer />
    </div>
  )
}

export default App;