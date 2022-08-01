import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaSignInAlt, FaUser } from 'react-icons/fa';

function HeaderButton({ iconElement, text }) {
  return (
    <button className="flex items-center space-x-2 font-extrabold border-2 border-black px-6 py-3 rounded bg-red-500 hover:bg-red-600">
      {iconElement}
      <span>{text}</span>
    </button>
  );
}

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
            <HeaderButton iconElement={<FaSignOutAlt />} text='sign out' />
          ) : (
            <>
              <HeaderButton iconElement={<FaSignInAlt />} text='sign in' />
              <HeaderButton iconElement={<FaUser />} text='register' />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
