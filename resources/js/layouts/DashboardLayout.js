import React from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function DashboardLayout({ children }) {
  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = React.useState(localStorageIsSettingsVisible)

  const toggleSettings = () => {
    setShowSettings(!showSettings)
    localStorage.setItem('settingsVisible', JSON.stringify(!showSettings))
  }

  return (
    <React.Fragment>
      <Sidebar />

      <main className="content">
        <Navbar />
        {children}
        <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
      </main>
    </React.Fragment>
  )
}
