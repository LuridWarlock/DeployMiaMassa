import { useRef, useEffect, useState } from 'react'
import './FrontPage.css'
import Especialidades from "../components/Especialidades"
import NavBar from '../components/NavBar'
import Promociones from '../components/Promociones'
import Agregados from '../components/Agregados'
import Extras from '../components/Extras'
import Contacto from '../components/Contacto'

function FrontPage() {
  const refPromociones = useRef(null);
  const refEspecialidades = useRef(null);
  const refAgregados = useRef(null);
  const refExtras = useRef(null);
  const refContacto = useRef(null);

  const componentes = [
    {ref: refPromociones, componente: <Promociones titulo={"Promociones!"} />},
    {ref: refEspecialidades, componente: <Especialidades titulo={"Especialidades"} />},
    {ref: refAgregados, componente: <Agregados titulo={"Agregados"} />},
    {ref: refExtras, componente: <Extras titulo={"Extras"}/>},
    {ref: refContacto, componente: <Contacto titulo={"Contacto"}/>},
  ];

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

export default FrontPage;
