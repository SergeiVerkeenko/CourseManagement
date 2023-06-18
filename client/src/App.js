import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePages/HomePage";
import AdministrationPages from "./Pages/AdministrationPage/AdministrationPages";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/admin' element={<AdministrationPages />} />

    </Routes>
  )
}

export default App;
