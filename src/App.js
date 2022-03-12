import React, {Component} from "react";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'
import Footer from "./components/Footer";

class App extends Component {
 encode = (data) => {
   return Object.keys(data).map(
     (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
   ).join("&");
 }

  constructor(props){
    super(props)
    this.state = {
      name: "Enter your name",
      email: "your-email@mail.com",
      message: "Enter a message"

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    data.set('name', data.get('name'));
    data.set('email', data.get('email'));
    data.set('message', data.get('message'));
   
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded"},
      body: this.encode({"form-name": "contact", data}),
      
      
    }).then(() => alert("Message sent!")).catch((error) => alert(error))
  }
  


  render() {
    return(
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact 
          name={this.state.name}
          email={this.state.email}
          message={this.state.message}
          handleSubmit={this.handleSubmit}
        />
        <Footer />
      </main>
    )
  }
}

export default App;
