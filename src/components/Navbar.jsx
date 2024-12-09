export default function Navbar() {
    return (
        <div>

            <ul className = "nav flex-row" id= "navid">
                <li className= "nav-color">
                    <a className="nav-link" href="#">Womens</a>
                </li>
                <li className="nav-color">
                    <a className="nav-link" href="#">Mens</a>
                </li>
                <li className="nav-color">
                    <a className="nav-link" href="#">On the Street</a>
                </li>
                <li className="nav-color">
                    <a className="nav-link" href="#">The CatWalk</a>
                </li>
                <li className="nav-color">
                    <a className="nav-link " href="#">AdWatch</a>
                </li>
                <li className="nav-color">
                    <a className="nav-link" href="#">About</a>
                </li>
            </ul>
        </div>
    );
}
