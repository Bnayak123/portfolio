
import styles from "./App.module.css";
import Hero from "./componets/Hero/Hero";
import Navbar from "./componets/Navbar/Navbar";
import About from './componets/About/About';

function App() {
 
  return (
    <div className={styles.App}> 
     <Navbar/>
     <Hero/>
     <About/>
    </div>
  )
}

export default App
