import React from 'react'
import sedan from '../Fotos/Carros/sentra.jpg'
import van from '../Fotos/Carros/van.png'
import suv from '../Fotos/Carros/SuburbanReact.jpeg'
import smallSprinter from '../Fotos/Carros/small-sprinter.jpg'
import bigSprinter from '../Fotos/Carros/bigSprinter.jpg'
import { Link } from 'react-router-dom'
import '../App.css';



export const Prices = () => {
  return (
    <div>
      <h6 className="camuflaje mt-5 display-4">
        shuttle
      </h6>

      <div className="container mb-3">
        <div className="row">

          <div className="col-md-12 row text-center">
            <div className="col-md-4" >
              <div className="imagen-servicio">
                <img src={sedan} alt="servicio 01" className="img-size-recomendaciones" />
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-10 pt-4 servicio-info">
                    <h2 className="text-center text-uppercase encabezado title-secondary">
                      <span style={{ fontWeight: "500" }} className="text-uppercase d-block text-azulito">sedan</span>
                      1-3 people
                    </h2>
                    <Link to="/Sedan" >
                      <a href="#sayulita" className="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" >
              <div className="imagen-servicio">
                <img src={van} alt="servicio 01" className="img-size-recomendaciones" />
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-10 pt-4 servicio-info">
                    <h2 className="text-center text-uppercase encabezado title-secondary">
                      <span style={{ fontWeight: "500" }} className="text-uppercase d-block text-azulito">van</span>
                      1-9 people
                    </h2>
                    <Link to="/van" >
                      <a href="#sayulita" className="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" >
              <div className="imagen-servicio">
                <img src={suv} alt="servicio 01" className="img-size-recomendaciones" />
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-10 pt-4 servicio-info">
                    <h2 className="text-center text-uppercase encabezado title-secondary">
                      <span style={{ fontWeight: "500" }} className="text-uppercase d-block text-azulito">suv</span>
                      1-6 people
                    </h2>
                    <Link to="/suv" >
                      <a href="#sayulita" className="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-12 row text-center mt-5">
            <div className="col-md-4" >
              <div className="imagen-servicio">
                <img src={smallSprinter} alt="servicio 01" className="img-size-recomendaciones" />
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-10 pt-4 servicio-info">
                    <h2 className="text-center text-uppercase encabezado title-secondary">
                      <span style={{ fontWeight: "500" }} className="text-uppercase d-block text-azulito">small sprinter</span>
                      1-12 people
                    </h2>
                    <Link to="/small-sprinter" >
                      <a href="#sayulita" className="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-4" >
              <div className="imagen-servicio">
                <img src={bigSprinter} alt="servicio 01" className="img-size-recomendaciones" />
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-10 pt-4 servicio-info">
                    <h2 className="text-center text-uppercase encabezado title-secondary">
                      <span style={{ fontWeight: "500" }} className="text-uppercase d-block text-azulito">big sprinter</span>
                      1-20 people
                    </h2>
                    <Link to="/big-sprinter" >
                      <a href="#sayulita" className="btn btn-primary btn-block text-uppercase mt-4 py-3">more info</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>






          </div>
        </div>
      </div>


    </div>
  )
}
