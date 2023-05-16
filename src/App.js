import "./App.css";
import Nav from "./components/nav";
import Section from "./components/topSection";
import Main from "./components/main";
import Projects from "./components/projects";
import ContactUs from "./components/contactUs";

function App() {
    return (
        <div className=" bg-slate-900 text-white ">
            <div className=" bg-slate-900 m-auto max-w-screen-xl">
                <Nav />
                <Section />
                <Main />
                <Projects />
                <ContactUs />

               
            </div>
        </div>
    );
}

export default App;
