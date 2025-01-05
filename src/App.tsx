
import './App.css';
import { Routes, Route } from "react-router-dom";
import Cap1 from './assets/organisms/Cap1';
import Home from './assets/organisms/Home';
import Cap2 from './assets/organisms/Cap2';
import Cap3 from './assets/organisms/Cap3';
import Cap4 from './assets/organisms/Cap4';
import Cap5 from './assets/organisms/Cap5';
import Cap6 from './assets/organisms/Cap6';
import Cap7 from './assets/organisms/Cap7';
import Cap8 from './assets/organisms/Cap8';
import Cap9 from './assets/organisms/Cap9';

function App() {
  return (
    <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        </head>
        {/* Define Routes */}
        <Routes>
          <Route path="/Amor" element={<Home />} />
          <Route path="/Cap1" element={<Cap1 />} />
          <Route path="/Cap2" element={<Cap2 />} />
          <Route path="/Cap3" element={<Cap3 />} />
          <Route path="/Cap4" element={<Cap4 />} />
          <Route path="/Cap5" element={<Cap5 />} />
          <Route path="/Cap6" element={<Cap6 />} />
          <Route path="/Cap7" element={<Cap7 />} />
          <Route path="/Cap8" element={<Cap8 />} />
          <Route path="/Cap9" element={<Cap9 />} />
        </Routes>
    </>
  )
}

export default App
