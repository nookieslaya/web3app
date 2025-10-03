
import {Navbar, Services,Footer,Transactions,Loader,Welcome} from "./components/index.js";

import './App.css'

function App() {


  return (
    <>
      <div className="min-h-screen ">
          <div className="gradient-bg-welcome">
              <Navbar/>
              <Welcome/>
              </div>
          <Services/>
          <Transactions/>
          <Footer/>


      </div>

    </>
  )
}

export default App
