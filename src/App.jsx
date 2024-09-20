import "./app.scss";
import Navbar from "./Components/navbar/Navbar";
import Test from "./test";
const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
    </section>
    <section id="Products">Products1</section>
    <section>Products2</section>
    <section id="Services">Services</section>
    <section id="Portfolio">Portfolio</section>
    <section id="Contacts">Contact</section>
    
  </div>;
};

export default App;
