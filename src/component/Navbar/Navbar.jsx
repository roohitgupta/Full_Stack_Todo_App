import { Link } from "react-router-dom"

import "./Navbar.css"


const Navbar = () => {
    const nav = [ 
        { title: "SignUp", to: "#home" },
        { title: "Login", to: "#about" },
        { title: "TaskList", to: "#userList" },

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