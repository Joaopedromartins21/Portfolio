import Marquee from "react-fast-marquee";
import css from "../../assets/logo-css3.svg"
import html from "../../assets/logo-html5.svg"
import react from "../../assets/logo-react.svg"
import js from "../../assets/logo-nodejs.svg"

export function Tech(){
    return (
        <div className="sm:w-full">
            <Marquee speed={70} pauseOnHover >
                <div className="flex flex-row items-center gap-2 sm:gap-20 w-8 sm:w-16">
                    <img src={css} alt="CSS" title="CSS"/>
                    <img src={html} alt="HTML" title="HTML"/>
                    <img src={js} alt="JS" title="JS"/>
                    <img src={react} alt="React"  title="React"/>
                    <img src={html} alt="HTML" title="HTML"/>
                    <img src={js} alt="JS" title="JS"/>
                    <img src={react} alt="React"  title="React"/>
                    
                </div>   
            </Marquee>
        </div>
    )
}