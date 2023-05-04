import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const Navigation = () => {
    // const { red, showDropdown, setShowDropdown } = useShowDropdown();
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuToggle = () => setIsOpen(!isOpen);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return ( 
        <>
        <p onClick={handleMenuToggle} className="md:hidden cursor-pointer">Menu</p>
        <nav className={`
        ${isOpen ? "flex" : "hidden"}
            py-4 flex flex-col gap-5 items-center
            absolute top-full left-0 w-screen
            bg-slate-200/75
            backdrop-blur-[2px]
            md:bg-transparent
            md:static md:w-auto md:py-0
            md:flex md:flex-row
        `}>
         <ul className="flex justify-around p-5 border-b-2">
              <li><Link href={`/`}>Home</Link></li>
              <li><Link href={`/blog`}>Blog</Link></li>
              <li><Link href={`/contact`}>Contact</Link></li>
              <li><Link href={`/`} className="font-bold uppercase">Swanky</Link></li>
              <li><Link href={`/contact`}>Contact</Link></li>
              <li><Link href={`/blog`}>Blog</Link></li>
              <li><Link href={`/`}>Home</Link></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navigation;