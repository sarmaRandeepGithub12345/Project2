import Navbar from "../components/businessComp/Navbar";
import Main from "../components/businessComp/Main";

function App() {
  return (
    <>
      <div className="bg-gray-50  w-full h-[100vh] overflow-y-auto">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
