import Container from "./comonents/container"
import Hero from "./comonents/hero"
import Navbar from "./comonents/navbar";
import ThirdPart from "./comonents/ThirdPart";

function App() {

  return (
    <>
      <div className="main">
        <div className="page1">
          <Container className='flex flex-col border-l-1 border-r-1 border-gray-200'>
            <Navbar />
            <Hero />
            <ThirdPart />
          </Container>
        </div>
        <div className="page2  h-screen">
        </div>
      </div>
    </>

  )
}

export default App
