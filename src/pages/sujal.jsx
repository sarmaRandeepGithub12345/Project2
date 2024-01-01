
// import './App.css';
import Nav from "../components/nav/nav"
import Container from "../components/container/container"
function App() {
  return (
    <div className={`bg-[#f1f6ff] overflow-y-auto w-[100%] h-[100vh] flex flex-col items-center`}>
      <Nav/>
      <Container/>
    </div>
  );
}

export default App;
