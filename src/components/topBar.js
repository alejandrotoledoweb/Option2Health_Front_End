import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {

  return (
    <nav className="border rounded  border-gray-200 bg-white flex flex-wrap items-center justify-start">

      <button className="lg:hidden rounded px-2 py-2 focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600 hover:text-white mx-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div>
        <form className="my-2 flex flex-wrap items-center content-center">
          <input class="border border-gray-300 rounded bg-gray-200 w-60 px-3 py-2 mx-4 my-1" type="search" placeholder="Search" aria-label="Search" />
          <button className="border rounded border-indigo-400 text-indigo-400 my-1 py-1.5 px-3 mx-4 focus:bg-indigo-600 focus:outline-none hover:bg-indigo-600 hover:text-white" type="submit">Search</button>
        </form>
      </div>

      <p className="text-indigo-400 py-2 mx-2">
        <Link to="/login">
          ¿Listo para tomar el control de tu salud y de los demás? INGRESA AQUÍ
        </Link>
      </p>
    </nav> 
  )
};

export default TopBar;