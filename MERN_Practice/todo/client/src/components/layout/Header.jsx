
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

 return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-text-primary">
              Smart Dashboard
            </h1>
            <p className="text-text-secondary text-sm">Welcome back, {user?.name}!</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-text-primary font-medium">{user?.name}</p>
              <p className="text-text-secondary text-sm">{user?.email}</p>
            </div>
            <button
              onClick={logout}
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 font-medium border border-primary/20"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;