import logo from "../assets/logo-text.png"
import ham from "../assets/hamburger.png"
const Nav = () => {
    return (

        <div className=" p-5 sticky top-0 z-50 border-b-[1px] border-b-[#77797e]  bg-white ">
            <nav className="flex gap-4 justify-between container mx-auto">
                <div>
                    <img src={logo}></img>
                </div>
                <div >
                    <ul className="hidden md:flex gap-4">
                        <li className="text-pink-600">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="hidden md:flex gap-4">
                    <button className="rounded-2xl px-3 hover:bg-amber-500">Sign in</button>
                    <button className="px-3 bg-pink-600 rounded-2xl hover:bg-pink-300">Sign up</button>
                </div>
                <img className="block h-4 w-4 md:hidden" src={ham}></img>
            </nav>
        </div>


        
    );
};

export default Nav;