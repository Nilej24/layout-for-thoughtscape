import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="p-6 text-3xl font-bold">content here btw</div>
    </BrowserRouter>
  );
}

export default App;
