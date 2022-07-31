import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaUser } from 'react-icons/fa';

function Header() {
  const user = false;

  return (
    <nav className="bg-cyan-600 drop-shadow-xl border-b-4 border-black">
      <div className="container mx-auto p-10 flex justify-between items-center">
        <div>
          <Link to="/" className="text-4xl font-bold hover:text-gray-700 overline">
            ThoughtScape
          </Link>
        </div>
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-5">
          {!!user ? (
            <button className="header-btn">
              <FaSignOutAlt />
              <span>sign out</span>
            </button>
          ) : (
            <>
              <button className="header-btn">
                <FaSignInAlt />
                <span>sign in</span>
              </button>
              <button className="header-btn">
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
