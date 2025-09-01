import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './ContactScreen.css'


const ContactScreen = () => {
  return (
      <div>
          <Navbar/>
          <h3 className='titulo-contact'>Registrate para tener los mejores descuentos</h3>
          
          <div className='inicio'>
            <span className='titulo2' >Iniciar Sesion</span>
              <form>
                <span className='estilos_input'>Email:</span><br></br> 
                    <input type='text' placeholder='usuario@email.com'></input> <br></br> 
                <span className='estilos_input' >contraseña:</span> <br></br> 
                  <input type='password'></input> <br></br> 
                <button className='boton-contact' type='submit'>Inicio</button>    
              </form>
          </div>
      
        <div className='registro'>
          <span className='titulo2'>Registrarse</span>
            <form>
              <span className='estilos_input'>Nombre:</span> <br></br> 
                <input type='text'></input> <br></br> 
              <span className='estilos_input'>Apellido :</span> <br></br> 
                  <input type='text'></input> <br></br> 
              <span className='estilos_input'>Email:</span>  <br></br> 
                  <input  type='text' placeholder='usuario@email.com'></input> <br></br> 
              <span className='estilos_input' >contraseña:</span> <br></br> 
                  <input  type='password'></input> <br></br> 
              <button className='boton-contact' type='submit'>Registro</button>    
            </form>
        </div>
      </div>
    )      
  }      
export default ContactScreen