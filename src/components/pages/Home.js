import React from 'react'
import '../../scss/styles.scss'
import cerveza from'../../assets/img/pictures/homeCerveza.png'
import { Link } from 'react-router-dom'
import Tienda from './Tienda'
import Variedades from '../variedades/Variedades'
import Carousel from '../carousel/Carousel'
import SectionOne from '../seccionUno/SectionOne'
import SectionTwo from '../seccionDos/SectionTwo'
const Home = () => {
  return (
    <div>
      <div className='fondoUno'>
        <div className='divCta' >
          <h1>Cerveza Artesanal <br/><span>Eliot Ness</span></h1>
          <h4>Microcerveceria y distribuidora de cerveza artesanal Eliot Ness.</h4>
          <p>Producimos 9 variedades de cervezas artesanales, con aromas exclusivos.<br/>
          Ofertas para almacenes, bares y restaurantes.<br/>
          Servicio de Alquiler de Choperas de Cerveza Artesanal.</p>
        </div>
        <div className='divImgBtnCta'>
          <img src={cerveza} className="cervezaCTA" alt='cerveza'/>
          <div className='divBtnCta'>
            <Link to={<Tienda/>}>Comprar</Link>
            <Link to="">Variedades</Link>
          </div>
        </div>
      </div>
      <div className='fondoDos variedades'>
        <Variedades/>
        <Carousel/>
        <SectionOne/>
        <SectionTwo/>
        
      </div>

    </div>
  )
}

export default Home