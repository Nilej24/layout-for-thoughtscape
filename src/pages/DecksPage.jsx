import { MdMenuBook } from 'react-icons/md';

function Deck({ name }) {
  return (
    <li>
      <label className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-100">
        <input type="checkbox" className="w-6 h-6" />
        <span>{name}</span>
      </label>
    </li>
  );
}

function DecksPage() {
  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center">
        Your Decks
      </h1>
      <button className="rounded-full drop-shadow-lg flex items-center space-x-2 px-5 py-3 text-xl font-semibold bg-red-500 hover:bg-red-600">
        <span className="text-3xl">
          <MdMenuBook />
        </span>
        <span>study selected decks</span>
      </button>
      <ul className="mt-3">
        <li>
          <label className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-100">
            <input type="checkbox" className="w-6 h-6" />
            <span>all decks</span>
          </label>
        </li>
        <Deck name="chem" />
      </ul>
    </section>
  );
}

export default DecksPage;
