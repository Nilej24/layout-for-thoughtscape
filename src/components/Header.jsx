import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaUser } from 'react-icons/fa';

function Header() {
  const user = false;

  return (
    <nav className="bg-cyan-600">
      <div className="container mx-auto p-10 flex justify-between items-center">
        <div>
          <Link to="/" className="text-3xl font-bold hover:text-gray-700">
            ThoughtScape
          </Link>
        </div>
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5">
          {!!user ? (
            <button className="flex items-center space-x-2 font-bold bg-red-500 px-6 py-3 rounded-lg drop-shadow-md hover:bg-red-600">
              <FaSignOutAlt />
              <span>sign out</span>
            </button>
          ) : (
            <>
              <button className="flex items-center space-x-2 font-bold bg-red-500 px-6 py-3 rounded-lg drop-shadow-md hover:bg-red-600">
                <FaSignInAlt />
                <span>sign in</span>
              </button>
              <button className="flex items-center space-x-2 font-bold bg-red-500 px-6 py-3 rounded-lg drop-shadow-md hover:bg-red-600">
                <FaUser />
                <span>register</span>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
