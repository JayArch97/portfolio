import { Link } from "react-router-dom";


export default function NavBar(){

    return(
        <nav className="flex justify-center space-x-5 ">
            <ul className="flex space-x-5 hover:cursor-pointer mt-3 font-honk text-3xl ">
                <Link to = '/home'>
                <li>Home</li>
                </Link>
                <Link to = '/about'>
                <li>About</li>
                </Link>
                <Link to = '/contact'>
                <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}


