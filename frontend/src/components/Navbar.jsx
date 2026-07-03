import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <Link className = "navbar-brand" to = "/">
                Team Management
            </Link>

            <div className = "navbar-nav">
                <Link className = "nav-link" to = "/">
                    Players
                </Link>
                <Link className = "nav-link" to = "/add">
                    Add Player
                </Link>
                <Link className = "nav-link" to = "/update">
                    Update Player
                </Link>
                <Link className = "nav-link" to = "/team">
                    View Team
                </Link>
                <Link className = "nav-link" to = "/delete">
                    Delete Player
                </Link>
            </div>
        </nav>
    );
}