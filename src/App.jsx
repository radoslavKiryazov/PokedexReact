import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <main className="bg-pokevista2 bg-contain h-[100vh]">
      <NavBar/>
      <div className="flex justify-center items-center w-full pt-10 ">
      <Outlet/>
      </div>
    </main>
  );
}

export default App;