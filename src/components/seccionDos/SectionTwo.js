import React from 'react'
import '../../scss/styles.scss'
import vasoMano from '../../assets/img/pictures/vasoMano.png'


const SectionTwo = () => {
  return (
<div className='divSectionSDos'>

        <div className='divSectionUnoSDos'>
            <div className='divImgSectionSDos'>
                <img src='' alt=''/>
            </div>

            <div className='divDivSectionSDos'>
              <div className='divDivSectionInfoSDos'>
                  <h1>Comienza a vender Cerveza<br/>
                      Ofertas para bares y restaurantes

                  </h1>
                  <p>Si tienes un bar, restaurant o algún tipo de negocio y quieres comenzar a vender cerveza Eliot Ness, puedes contactarnos para programar una degustación de nuestras variedades.
                  </p>    
              </div>                
              <div className='divDivSectionBtnSDos'>

                  <button>Contacto</button>
              </div>
              <img className='imgSectionUnoSDos' src={vasoMano} alt=''/>
            </div>
        </div>

        <div className='divSectionDosSDos'>
          <div className='divTitleSectionDosSDos'>
            <img src='' alt=''/>
            <h1>¿Donde Comprar?</h1>
            <h3>Compartí unas pintas, chops, tanques o cañas con tus amigxs recorriendo los bares y cervecerías que ofrecen nuestra cerveza.</h3>
          </div>



        </div>

        <div className='divSectionTresSDos'>

        </div>
    </div>
  )
}

export default SectionTwo