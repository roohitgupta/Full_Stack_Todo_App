import { Link } from "react-router-dom"

import "./Navbar.css"


const Navbar = () => {
    const nav = [ 
        { title: "signUp", to: "#signup" },
        { title: "login", to: "#login" },
        { title: "tasklist", to: "#task" },

    ];

    return (
        <div className="mainNavbar">

            {nav.map((e, i) => (
                <a key={i} href={e.to} style={{ margin: "5px" }} ><button className="LinkBtn"> {e.title}</button></a>
                    )
                )
            }

        </div>);
};

export default Navbar;