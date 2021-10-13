import React from 'react'
import '../App.css';

import destinos from '../Fotos/publicidad/destinos.jpg'
import publicidad01 from '../Fotos/publicidad/publicidad01.jpg'
import sayulita03 from '../Fotos/sayulita/03.jpg'
import sayulita05 from '../Fotos/sayulita/05.png'
import tequila07 from '../Fotos/tequila/07.jpg'
import sanSebastian10 from '../Fotos/san-sebastian/10.jpg'
import quimixto07 from '../Fotos/quimixto/07.jpg'
import guayabitos03 from '../Fotos/guayabitos/03.jpg'
import guadalajara05 from '../Fotos/guadalajara/05.jpg'
import tehuamixtle03 from '../Fotos/tehuamixtle/03.jpg'
import melaque02 from '../Fotos/melaque/02.jpg'


export const Destinations = () => {
  return (
    <div>
      <h2 className="title-secondary espaciados col-12 text-center display-4 shadow-title">
        DESTINATIONS, TOURS, DAY TRIP
      </h2>

      <section className="d-flex flex-column justify-content-between">

        <div className="row mb-5 ">
          <img src={destinos} alt="destino" className="img-fluid col-lg-7  "/>
          <div className ="col-lg-4 offset-lg-1">
          <p className ="text-justify text-destinos">
          <span>We take you where you want to go!</span>
          <br/>
          <span className ="text-cualquier">Any</span> hotel, Airbnb or any area in Mexico.
          </p>
          <img src={publicidad01} alt="publicidad01" className ="img-fluid"/>
          </div>
        </div>

        <h3 className="text-background col-lg-12 text-center text-uppercase " style={{fontWeight:"500"}}>
          these are some recommendations
        </h3>


        <div className="container mb-3">
          <div className="row">

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={sayulita03} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito">sayulita & san pancho</span>
                </h2>
                <a href="#sayulita" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={sayulita05} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary ">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito ">boca de tomatlan</span>
                </h2>
                <a href="#boca-tomatlan" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={tequila07} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary ">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito ">tequila</span>
                </h2>
                <a href="#tequila" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mb-3 ">
          <div className="row">

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={sanSebastian10} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary ">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito ">san sebastian del oeste</span>
                </h2>
                <a href="#san-sebastian" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={quimixto07} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary ">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito ">careyes</span>
                </h2>
                <a href="#careyes" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={guayabitos03} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary ">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito ">guayabitos</span>
                </h2>
                <a href="#guayabitos" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mb-3 ">
          <div className="row">

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={guadalajara05} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary ">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito ">guadalajara</span>
                </h2>
                <a href="#guadalajara" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={tehuamixtle03} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary ">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito ">tehuamixtle</span>
                </h2>
                <a href="#tehuamixtle" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="imagen-servicio">
                <img src={melaque02} alt="servicio 01" className="img-size-recomendaciones"/>
                <div className ="row no-gutters justify-content-center">
                <div className ="col-md-10 pt-4 servicio-info">
                <h2 className ="text-center text-uppercase encabezado title-secondary ">
                <span style={{fontWeight:"500"}} className ="text-capitalize d-block text-azulito ">melaque</span>
                </h2>
                <a href="#melaque" className ="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
