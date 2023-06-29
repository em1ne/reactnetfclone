
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import MovieDetails from "./pages/MovieDetails";

import Header from './components/Header';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
     <Routes  >
      <Route path='/' element={<MainPages/>}/>
      <Route path="/movie/:movied" element={<MovieDetails/>}/>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
