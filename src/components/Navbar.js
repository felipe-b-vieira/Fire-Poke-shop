import React from 'react';
import { Link } from 'react-router-dom'
import '../tailwind.output.css';
import logo from '../images/fogologo.png'
 const Navbar = ()=>{
     //Navbar do site. Na ordem apresentada é: Logo, barra de pesquisa(Não está ativa) e menu
    return(
            <nav className="flex items-center bg-red-700 p-2">
                <div className="flex">
                    <img src={logo} alt="Fogo" className="h-12 mr-6 ml-6 md:mr-12 md:ml-12"></img>
                </div>

                <div className="hidden md:flex flex-1 mr-3">
                    <form className="w-full" method="GET">
                        <div className="relative text-black">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </span>
                            <input type="search" name="busca" className="w-full py-2 placeholder-black text-base bg-red-200 pl-10 focus:outline-none focus:bg-white" placeholder="Pesquisar..." autoComplete="off"></input>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mr-3">
                    <nav className="flex-grow flex justify-end flex-row">
                        <Link to="/"><div className="px-4 py-2 mt-2 mr-2 text-sm font-semibold bg-red-200 rounded-sm md:mt-0 md:ml-4 hover:text-red-700 hover:bg-white focus:outline-none focus:shadow-outline">Catálogo</div></Link>
                        <Link to="/cart"><div className="px-4 py-2 mt-2 text-sm font-semibold bg-red-200 rounded-sm md:mt-0 md:ml-4 hover:text-red-700 hover:bg-white focus:outline-none focus:shadow-outline">Carrinho</div></Link>
                    </nav>
                </div>
            </nav>  
    )
}

export default Navbar;