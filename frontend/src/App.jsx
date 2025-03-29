import React from 'react'
import LandingPage from './Pages/Landingpage'
import HistoryOopsPage from './Pages/HistoryOopsPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'








const App = () => {
  return (
    <div className="min-h-screen bg-background p-3.5">
      <Navbar />
      <LandingPage />
      <HistoryOopsPage />
      <Footer />


    </div>
  )
}

export default App