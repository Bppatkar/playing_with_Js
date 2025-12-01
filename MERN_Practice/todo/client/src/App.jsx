import { Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Header from './components/layout/Header.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Footer from './components/layout/Footer.jsx';
import Navigation from './components/layout/Navigation.jsx';
import NewsPage from './pages/NewsPage.jsx';
import CricketPage from './pages/CricketPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-black text-white flex flex-col">
              <Header />
              <Navigation />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/todos" element={<TodoPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/cricket" element={<CricketPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
