import { useRef, useEffect, useState } from 'react'
import './FrontPage.css'
import Especialidades from "../components/Especialidades"
import NavBar from '../components/NavBar'
import Promociones from '../components/Promociones'
import Agregados from '../components/Agregados'
import Extras from '../components/Extras'
import Contacto from '../components/Contacto'

const componentes = [
  {componente: <Promociones ref={refPromociones} titulo={"Promociones!"} />},
  {componente: <Especialidades ref={refEspecialidades} titulo={"Especialidades"} />},
  {componente: <Agregados ref={refAgregados} titulo={"Agregados"} />},
  {componente: <Extras ref={refExtras} titulo={"Extras"}/>},
  {componente: <Contacto ref={refContacto} titulo={"Contacto"}/>},
];

function FrontPage() {
  const handleClick = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='cuerpo'>
      <NavBar 
        handleClick={(ref) => handleClick(ref)}
        componentes={componentes}
      />
      {componentes.map((item, index) => (
        <div key={index} ref={item.ref}>
          {item.componente}
        </div>
      ))}
      <button id='arriba' onClick={volverArriba}>UP</button>
      <div className="footer"><span className='footer'></span></div>
    </div>
  );
}

export default FrontPage
