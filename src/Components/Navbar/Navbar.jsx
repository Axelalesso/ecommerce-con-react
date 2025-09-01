import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
   const isActiveCallback = ({isActive})=>{
      if(isActive){
         return 'link link-seleccionado'
      }
      else{
         return 'Link'
      }
   }
   return (
   <header>
      <nav>
         <div className="nav">
         <h2 className="logo">ZonaFit</h2>
         {/*
         <Link to="/">Inicio</Link>
         <Link to="/contact">Contacto</Link> */}

      <NavLink
            to={'/'}
            className={
               isActiveCallback
            }
            >
               Inicio
         </NavLink>
         <NavLink
            to={'/contact'}
            className={
               isActiveCallback
            }
            >
               Contacto
         </NavLink>
         </div>
      </nav>
   </header>
   );
};

export default Navbar;
