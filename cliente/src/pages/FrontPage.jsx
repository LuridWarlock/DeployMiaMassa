import { useRef, useEffect, useState } from 'react'
import './FrontPage.css'
import Especialidades from "../components/Especialidades"
import NavBar from '../components/NavBar'
import Promociones from '../components/Promociones'
import Agregados from '../components/Agregados'
import Extras from '../components/Extras'
import Contacto from '../components/Contacto'

const FrontPage = () => {
  const refPromociones = useRef(null);
  const refEspecialidades = useRef(null);
  const refContacto = useRef(null);
  const refAgregados = useRef(null);
  const refExtras = useRef(null);

  const handleClickPromociones = () => {
    refPromociones.current?.scrollIntoView({ block: 'start', blockOffset: 10, behavior: 'smooth' });
  }
  const handleClickEspecialidades = () => {
    refEspecialidades.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const handleClickAgregados = () => {
    refAgregados.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const handleClickContacto = () => {
    refContacto.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const handleClickExtras = () => {
    refExtras.current?.scrollIntoView({ behavior: 'smooth' });
  }
  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <div className='cuerpoAdministrador'>
      <div className="crud">
        Holanda
      </div>
      

    </div>
  )
}

export default FrontPage
