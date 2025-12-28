import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex h-screen ">
        
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white shadow-lg border-gray-800 border-l text-black p-6">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          <ul className="space-y-4 text-black ">
            <li className='border-b border-gray-500 pb-2'><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li className='border-b border-gray-500 pb-2'><Link to="/users" className="hover:text-gray-300">Users</Link></li>
            <li className='border-b border-gray-500 pb-2'><Link to="/tasks" className="hover:text-gray-300">Tasks</Link></li>
            <li className='border-b border-gray-500 pb-2'><Link to="/settings" className="hover:text-gray-300">Settings</Link></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
      

          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </section>
        </main>

      </div>
    </Router>
  );
}

export default App;

