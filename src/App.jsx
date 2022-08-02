import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>decks, yo</div>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
