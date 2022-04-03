
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./carouselTres.css";

// import required modules
import { Navigation } from "swiper";

const CarouselTres = () => {
    return (
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide >
                <img src="" alt=""/>
                <p>
                Se nota el amor que le pone a cada litro de cerveza artesanal, atendido por sus dueños.
                </p>
                <div className="divAvatarComentario">
                    <img src="" alt=""/>
                    <h5>Franco Campassi </h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="" alt=""/>
                <p>
                Me tocó conocerlos en un evento privado. Excelente servicio, muy buena cerveza y mención especial para la Atención ! En los eventos como en las noches a veces surgen inesperados, estuvieron ahí Actuaron como lo pedía la circunstancia ! Hace un buen rato ya, que trabajo con ellos !
                </p>
                <div className="divAvatarComentario">
                    <img src="" alt=""/>
                    <h5>Maria Victoria Virginillo</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="" alt=""/>
                <p>
                La mejor microcervecería de Buenos Aires. Amante de la cerveza artesanal, hoy en día a mis 36 años comienzo a elegir que además de cerveza artesanal sea de calidad y al encontrar a Eliot Ness encontré calidad extrema. Puedo beber más de DOS LITROS sin sentirme mal, pesado, la verdad es que tiene un gusto suave y aromas distintos a cualquier artesanal que he estado bebiendo a través de distintos bares de la Ciudad. 
                </p>
                <div className="divAvatarComentario">
                    <img src="" alt=""/>
                    <h5>May Sydick</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="" alt=""/>
                <p>
                Excelente! Recomiendo 100%! Muy buena atención! La cerveza riquísima! Sin dudas, los elijo una y otra vez...
                </p>
                <div className="divAvatarComentario">
                    <img src="" alt=""/>
                    <h5>Hugo James</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="" alt=""/>
                <p>
                Alquile varias veces las Choperas de Cerveza Artesanal y jamás me fallaron en la entrega, tiempo y formas. Siempre conservan el buen sabor y los aromas que los caracteriza como fabricantes de Cerveza Artesanal. Me las han entregado siempre en horario y no vivo a la vuelta de la fábrica, es por eso que destaco el compromiso que asumen. Besos, hablamos pronto para la próxima reunión. Sole de Belgrano.
                </p>
                <div className="divAvatarComentario">
                    <img src="" alt=""/>
                    <h5>Soledad Piestrech</h5>
                </div>
            </SwiperSlide>
            
          </Swiper>
        </>
      );
}

export default CarouselTres