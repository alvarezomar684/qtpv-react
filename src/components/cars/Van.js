import React from 'react'
import van from './Carros/van.png'
import '../../App.css';

export const Van = () => {
  return (
    <div>
      <h6 className="camuflaje display-4">
        shuttle
      </h6>

      <section className="espaciados">
      <h3 className="title-secondary text-center display-4 shadow-title mt-5">
        VAN
      </h3>
      <p className="">
        Reservations can be made through chat, whatsapp, mail or by phone.
        <br/>
        <br/>
        All prices shown below are taking the starting point from the Puerto Vallarta Jalisco Airport. If you need
        another starting point like a Hotel, Airbnb, or some other place. Chat with us, call us by phone or send us an
        email. We are at your complete disposal !!!
        <br/>
        <br/>
        <span className="text-azulito text-capitalize">
          Payments
        </span>
        can be made with cash or any debit/credit card. These are done directly with your assigned driver on your
        arrival.
      </p>
      <div className="row mt-4 mb-4">
        <img className="col-lg-6 img-cars" src={van} alt="van"/>
        <div className=" offset-lg-2 col-lg-4 d-flex flex-column justify-content-between">
          <h4>
            1-9 PEOPLE
          </h4>
          <h4>
            DEPARTING FROM PUERTO VALLARTA JALISCO AIRPORT
          </h4>
          <h4 className="border-precio-especial p-2 text-justify">
            <span className="">
              30 USD PER HOUR (MINIMUM 3 HRS)
            </span>
            <hr/>
            <span className="">
              300 USD ALL DAY (12 HRS)
            </span>
            <hr/>
            <span className="text-uppercase">
              BOTH PRICES ONLY APPLY WITHIN THE CITY OF PUERTO VALLARTA, LIKE EVENTS, TOURS, TOURS TO RESTAURANTS.
              INCLUDES DRIVER, BEER AND WATER.
            </span>
          </h4>
        </div>
      </div>




      <table className="table table-bordered">
        <thead>
          <tr className="bg-table-title">
            <th scope="col" className="border-table-right text-capitalize col-4">code</th>
            <th scope="col" className="border-table-right">Destinations</th>
            <th scope="col" className="border-table-left">Prices</th>
          </tr>
        </thead>
        <tbody>

          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-01-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALAMAR CONDO</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-02-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALMAR RESORT</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-03-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALTA VISTA</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-04-USD</td>
            <td scope="row" className="border-table-right text-capitalize">AMAPAS</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-05-USD</td>
            <td scope="row" className="border-table-right text-capitalize">AQCUA FLAMINGOS</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-06-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BARRA DE NAVIDAD</td>
            <td className="border-table-left">350 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-07-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BARCELÓ</td>
            <td className="border-table-left">80 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-08-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BLUE CHAIRS</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-09-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BOCA DE TOMATLÁN</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-10-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BUCERIAS</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-11-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BUENAVENTURA GRAND</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-12-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CANTO DEL SOL</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-13-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CARELLES</td>
            <td className="border-table-left">250 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-14-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CASA IGUANA</td>
            <td className="border-table-left">80 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-15-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CASA JADE</td>
            <td className="border-table-left">86 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-16-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CONRAD</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-17-USD</td>
            <td scope="row" className="border-table-right text-capitalize">COSTA SUR</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-18-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CROWN PARADISE</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-19-USD</td>
            <td scope="row" className="border-table-right text-capitalize">DREAMS BAHIA MITA</td>
            <td className="border-table-left">115 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-20-USD</td>
            <td scope="row" className="border-table-right text-capitalize">DREAMS VILLAMAGNA</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-21-USD</td>
            <td scope="row" className="border-table-right text-capitalize">EL ANCLOTE</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-22-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FIESTA AMERICANA</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-23-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FLAMINGO VALLARTA</td>
            <td className="border-table-left">50 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-24-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FOUR SEASONS</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-25-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FRIENDLY</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-26-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GARZA BLANCA</td>
            <td className="border-table-left">75 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-27-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GOLDEN CROWN</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-28-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND BLISS</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-29-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND FIESTA AMERICANA (HILTON)</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-30-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND LUXXE </td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-31-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND MATLALI</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-32-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND MAYAN</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-33-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND PALLADIUM </td>
            <td className="border-table-left">101 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-34-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND PARK ROYALE</td>
            <td className="border-table-left">75 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-35-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND VELAS</td>
            <td className="border-table-left">60 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-36-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND VENETIAN</td>
            <td className="border-table-left">55 USD</td>
          </tr>

          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-37-USD</td>
            <td scope="row" className="border-table-right text-uppercase">guadalajara</td>
            <td className="border-table-left">350 USD</td>
          </tr>

          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-38-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GUAYABITOS</td>
            <td className="border-table-left">131 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-39-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA BUENAVENTURA</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-40-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA HILTON</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-41-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA MITA</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-42-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HARD ROCK</td>
            <td className="border-table-left">60 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-43-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HILTON</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-44-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HOTEL ROSITA</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-45-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HYATT ZIVA</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-46-USD</td>
            <td scope="row" className="border-table-right text-capitalize">IBEROSTAR</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-47-USD</td>
            <td scope="row" className="border-table-right text-capitalize">IMANTA RESORT</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-48-USD</td>
            <td scope="row" className="border-table-right text-capitalize">KRYSTAL REFLECT</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-49-USD</td>
            <td scope="row" className="border-table-right text-capitalize">KRYSTAL VALLARTA</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-50-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA CRUZ DE HUANACAXTLE</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-51-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA PEÑITA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-52-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA PUNTILLA</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-53-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LAS PALMAS</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-54-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LINDO MAR</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-55-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LITIBÚ</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-56-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LOS PICOS</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-57-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LOS TULES</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-58-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIAL EMOTIONS RESORT</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-59-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIVAL ARMONY</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-60-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIVAL DISTINCT RESIDENCES</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-61-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARRIOT</td>
            <td className="border-table-left">50 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-62-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MELAQUE</td>
            <td className="border-table-left">350 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-63-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MELIA</td>
            <td className="border-table-left">50 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-64-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MIO</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-65-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MOLINO DE AGUA</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-66-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MOUSAI</td>
            <td className="border-table-left">75 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-67-USD</td>
            <td scope="row" className="border-table-right text-capitalize">NOW AMBER</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-68-USD</td>
            <td scope="row" className="border-table-right text-capitalize">OCCIDENTAL GRAND</td>
            <td className="border-table-left">60 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-69-USD</td>
            <td scope="row" className="border-table-right text-uppercase">ONE AND ONLY MANDARINAS</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-70-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PARADISE VILLAGE</td>
            <td className="border-table-left">60 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-71-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PENNINSULA VALLARTA</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-72-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PINNACLE</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-73-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA FIESTA</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-74-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA GEMELAS CONDO</td>
            <td className="border-table-left">75 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-75-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA LOS ARCOS</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-76-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA ROYALE</td>
            <td className="border-table-left">60 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-77-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAZA PELICANOS</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-78-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PORTA FORTUNA</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-79-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PORTO FINO</td>
            <td className="border-table-left">50 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-80-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA ARENA</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-81-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA ESMERALDA</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-82-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA NEGRA</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-83-USD</td>
            <td scope="row" className="border-table-right text-capitalize">REAL DEL MAR</td>
            <td className="border-table-left">76 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-84-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU JALISCO</td>
            <td className="border-table-left">66 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-85-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU PALACE</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-86-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU VALLARTA</td>
            <td className="border-table-left">66 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-87-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ROYALE DECAMERON COMPLEX</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-88-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAMBA</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-89-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAN FRANCISCO (SAN PANCHO)</td>
            <td className="border-table-left">115 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-90-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAYULITA</td>
            <td className="border-table-left">115 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-91-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-92-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS BAHIA MITA</td>
            <td className="border-table-left">115 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-93-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS VALLARTA BAY</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-94-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SHERATON</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-95-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ST. REGIS</td>
            <td className="border-table-left">111 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-96-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SUNSCAPE</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-97-USD</td>
            <td scope="row" className="border-table-right text-capitalize">TRES MARES BEACH</td>
            <td className="border-table-left">50 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-98-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VALLARTA GARDENS</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-99-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VALLARTA SHORES</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-100-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VAMAR RESORT</td>
            <td className="border-table-left">50 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-101-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VELAS VALLARTA</td>
            <td className="border-table-left">50 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-102-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VIDANTA</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-103-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA DEL PALMAR</td>
            <td className="border-table-left">55 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-104-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA DEL PALMAR FLAMINGOS</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-105-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA LA ESTANCIA</td>
            <td className="border-table-left">70 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-106-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA MANDARINAS</td>
            <td className="border-table-left">80 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-107-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA PREMIER</td>
            <td className="border-table-left">65 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-108-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLAS ALTAS</td>
            <td className="border-table-left">80 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">van-109-USD</td>
            <td scope="row" className="border-table-right text-capitalize">W HOTEL</td>
            <td className="border-table-left">105 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">van-110-USD</td>
            <td scope="row" className="border-table-right text-capitalize">WESTIN</td>
            <td className="border-table-left">50 USD</td>
          </tr>
        </tbody>
      </table>

    </section>
    </div>
  )
}
