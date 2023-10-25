import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <main className="bg-pokevista bg-contain h-[100vh]">
      <NavBar/>
      <div className="flex justify-center items-center w-full p-20">
      <Outlet/>
      </div>
    </main>
  );
}

export default App;