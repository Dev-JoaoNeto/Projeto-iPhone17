import { useState } from "react";


function NavBar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="flex justify-between items-center md:justify-center md:max-w-7xl mx-auto px-6 py-4  gap-8">
                <div className="hidden md:flex items-center gap-8 text-white">
                    <a href="#design" className="hover:text-gray-300">Designer</a>
                    <a href="#camera" className="hover:text-gray-300">Camera</a>
                    <a href="#performance" className="hover:text-gray-300">Performance</a>
                    <a href="#colors" className="hover:text-gray-300">Cores</a>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">Comprar</button>
                </div>

 
                <button onClick={() => setOpen(!open)} className="absolute md:hidden text-white focus:outline-none text-2xl"
                    aria-label="Abrir menu">
                    ☰
                </button>

            </div>

            {open && (
                <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md">
                    <a onClick={() => setOpen(false)} href="#design" className="block px-6 py-4 hover:text-gray-300">Designer</a>
                    <a onClick={() => setOpen(false)} href="#camera" className="block px-6 py-4 hover:text-gray-300">Camera</a>
                    <a onClick={() => setOpen(false)} href="#performance" className="block px-6 py-4 hover:text-gray-300">Performance</a>
                    <a onClick={() => setOpen(false)} href="#colors" className="block px-6 py-4 hover:text-gray-300">Cores</a>
                    <button onClick={() => setOpen(false)} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 mb-2 rounded-full">Comprar</button>
                </div>
            )}
        </nav>
    );
}

export default NavBar;