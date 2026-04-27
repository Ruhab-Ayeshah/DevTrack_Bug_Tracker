import { useState } from 'react'; 
import { Menu } from 'lucide-react'; 
import {Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Sign_in from './pages/Sign_in'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Sidebar from './components/Sidebar'


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<Sign_in />} />
      <Route path="/register" element={<Register />} />
      <Route 
        path="/dashboard" 
          element={
    /* CHANGE THE CLASS BELOW */
           <div className="flex min-h-screen bg-[#0f1415]"> 
             <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
                <div className="flex-1 flex flex-col min-w-0">
        {/* Your Top Bar/Header */}
                  <header className="h-16 bg-[#171c1d]/80 backdrop-blur-md border-b border-[#dfe3e4]/5 flex items-center px-4 lg:hidden">
                    <button onClick={toggleSidebar} className="text-[#78e5ef] p-2">
                       <Menu size={24} />
                    </button>
                  </header>
                <main className="flex-1 lg:ml-64 p-8">
                  <Dashboard />
                </main>
              </div>
            </div>
          } 
        />
      </Routes>
  

  )
}

export default App


