import { useRef, useEffect, useState } from 'react'
import './FrontPage.css'
import Especialidades from "../components/Especialidades"
import NavBar from '../components/NavBar'
import Promociones from '../components/Promociones'
import Agregados from '../components/Agregados'
import Extras from '../components/Extras'
import Contacto from '../components/Contacto'

const FrontPage = () => {
  return (
    <div className='cuerpo'>
      <NavBar 
        handleClickPromociones={handleClickPromociones} 
        handleClickEspecialidades={handleClickEspecialidades} 
        handleClickAgregados={handleClickAgregados}
        handleClickExtras={handleClickExtras} 
        handleClickContacto={handleClickContacto}
        />
      <Promociones ref={refPromociones} titulo={"Promociones!"} />
      <Especialidades ref={refEspecialidades} titulo={"Especialidades"} />
      <Agregados ref={refAgregados} titulo={"Agregados"} />
      <Extras ref={refExtras} titulo={"Extras"}/>
      <Contacto ref={refContacto} titulo={"Contacto"}/>
      <button id='arriba' onClick={volverArriba}>UP</button>
      <div className="footer"><span className='footer'></span></div>
    </div>
  );
}

export default FrontPage
