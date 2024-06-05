import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { SelectedPage } from "./Shared/Types";
import Home from "./Components/Home/Home"
import Benefits from "./Components/Benefits/Index";
import OurClasses from "./Components/OurClasses/OurClasses";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            } else if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);   
    return (
        <>
            <div className="app bg-gray-20 ">
                <Navbar
                    isTopOfPage={isTopOfPage}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Home setSelectedPage={setSelectedPage}/>
                <Benefits setSelectedPage={setSelectedPage}/>
                <OurClasses setSelectedPage={setSelectedPage}/>
            </div>
        </>
    );
}

export default App;

// packages : npm i framer-motion react-anchor-link-smooth-scroll@1.0.12 @heroicons/react
//  framer-motion = for animetion
//  react-anchor-link-smooth-scroll@1.0.12 = for clicking in the nevbar and take it to other places
//  @heroicons/react = for icons

//dependencies : npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node

// @types/react-anchor-link-smooth-scroll@1.0.2 = for typeScript indentify the types of code are exist in this package

// @types/node = for package modules
