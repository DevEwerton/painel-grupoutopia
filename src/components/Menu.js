import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = props => 
{
    const [leftMenu, setLeftMenu] = useState(0);
    const [isOpened, setOpened] = useState(true);
    const [screenActive, setScreenActive] = useState("a");

    function timeout(number) {
        return new Promise( res => setTimeout(res, number) );
    }

    async function toggleMenu () 
    {
        if (isOpened)
        {
            await setOpened(false);
            for (let i = 0; i <= 252; i++) {
                await timeout(0.05); //for 1 sec delay
                await setLeftMenu(-i);                    
                
            }
        }
        else
        {
            await setOpened(true);
            for (let i = -250; i <= 0; i++) {
                await timeout(0.05); //for 1 sec delay
                await setLeftMenu(i);                    
            }
        }   
    }

    return (
        <div className="menu" style={{marginLeft: `${leftMenu}px`,}}>
            <button
                className="buttonToggle"
                onClick={() => toggleMenu()}
            >
                {isOpened 
                    ? <i className="fas fa-arrow-circle-left btnToggleClose"></i>
                    :<i className="fas fa-arrow-circle-right btnToggleOpen"></i>                
                }
            </button>
            <nav>
                <ul>
                    <li>
                        <Link 
                            to="/" className={(screenActive === "a" ? "active" : null)} 
                            onClick={() => setScreenActive("a")}
                        >
                            <i className="far fa-window-restore iconMenu"></i>
                            <span>Tela A</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/screenB" className={(screenActive === "b" ? "active" : null)}
                            onClick={() => setScreenActive("b")}
                        >
                            <i className="far fa-window-restore iconMenu"></i>
                            <span>Tela B</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/screenC" className={(screenActive === "c" ? "active" : null)}
                            onClick={() => setScreenActive("c")}
                        >
                            <i className="far fa-window-restore iconMenu"></i>
                            <span>Tela C</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;