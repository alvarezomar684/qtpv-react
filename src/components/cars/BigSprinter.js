import React from 'react'
import bigSprinter from './Carros/bigSprinter.jpg'
import '../../App.css';

export const BigSprinter = () => {
  return (
    <div>
      <h6 className="camuflaje display-4">
        shuttle
      </h6>        

      <section className="espaciados">
      <h3 className="title-secondary text-center display-4 shadow-title">
        BIG SPRINTER
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
        <img className="col-lg-6 img-cars" src={bigSprinter} alt="big sprinter"/>
        <div className=" offset-lg-2 col-lg-4 d-flex flex-column justify-content-around">
          <h4>
            1-20 PEOPLE
          </h4>
          <h4>
            DEPARTING FROM PUERTO VALLARTA JALISCO AIRPORT
          </h4>
          <h4 className="border-precio-especial p-2 text-justify">
            <span className="">
              50 USD PER HOUR (MINIMUM 3 HRS)
            </span>
            <hr/>
            <span className="">
              500 USD ALL DAY (12 HRS)
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
            <td scope="row" className="border-table-right text-uppercase">big-01-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALAMAR CONDO</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-02-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALMAR RESORT</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-03-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALTA VISTA</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-04-USD</td>
            <td scope="row" className="border-table-right text-capitalize">AMAPAS</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-05-USD</td>
            <td scope="row" className="border-table-right text-capitalize">AQCUA FLAMINGOS</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-06-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BARRA DE NAVIDAD</td>
            <td className="border-table-left">400 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-07-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BARCELÓ</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-08-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BLUE CHAIRS</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-09-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BOCA DE TOMATLÁN</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-10-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BUCERIAS</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-11-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BUENAVENTURA GRAND</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-12-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CANTO DEL SOL</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-13-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CARELLES</td>
            <td className="border-table-left">350 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-14-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CASA IGUANA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-15-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CASA JADE</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-16-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CONRAD</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-17-USD</td>
            <td scope="row" className="border-table-right text-capitalize">COSTA SUR</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-18-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CROWN PARADISE</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-19-USD</td>
            <td scope="row" className="border-table-right text-capitalize">DREAMS BAHIA MITA</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-20-USD</td>
            <td scope="row" className="border-table-right text-capitalize">DREAMS VILLAMAGNA</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-21-USD</td>
            <td scope="row" className="border-table-right text-capitalize">EL ANCLOTE</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-22-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FIESTA AMERICANA</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-23-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FLAMINGO VALLARTA</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-24-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FOUR SEASONS</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-25-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FRIENDLY</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-26-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GARZA BLANCA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-27-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GOLDEN CROWN</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-28-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND BLISS</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-29-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND FIESTA AMERICANA (HILTON)</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-30-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND LUXXE </td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-31-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND MATLALI</td>
            <td className="border-table-left">140 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-32-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND MAYAN</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-33-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND PALLADIUM </td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-34-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND PARK ROYALE</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-35-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND VELAS</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-36-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND VENETIAN</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-37-USD</td>
            <td scope="row" className="border-table-right text-uppercase">guadalajara</td>
            <td className="border-table-left">500 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-38-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GUAYABITOS</td>
            <td className="border-table-left">170 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-39-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA BUENAVENTURA</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-40-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA HILTON</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-41-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA MITA</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-42-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HARD ROCK</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-43-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HILTON</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-44-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HOTEL ROSITA</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-45-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HYATT ZIVA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-46-USD</td>
            <td scope="row" className="border-table-right text-capitalize">IBEROSTAR</td>
            <td className="border-table-left">159 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-47-USD</td>
            <td scope="row" className="border-table-right text-capitalize">IMANTA RESORT</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-48-USD</td>
            <td scope="row" className="border-table-right text-capitalize">KRYSTAL REFLECT</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-49-USD</td>
            <td scope="row" className="border-table-right text-capitalize">KRYSTAL VALLARTA</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-50-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA CRUZ DE HUANACAXTLE</td>
            <td className="border-table-left">140 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-51-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA PEÑITA</td>
            <td className="border-table-left">170 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-52-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA PUNTILLA</td>
            <td className="border-table-left">140 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-53-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LAS PALMAS</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-54-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LINDO MAR</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-55-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LITIBÚ</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-56-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LOS PICOS</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-57-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LOS TULES</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-58-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIAL EMOTIONS RESORT</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-59-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIVAL ARMONY</td>
            <td className="border-table-left">140 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-60-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIVAL DISTINCT RESIDENCES</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-61-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARRIOT</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-62-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MELAQUE</td>
            <td className="border-table-left">400 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-63-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MELIA</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-64-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MIO</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-65-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MOLINO DE AGUA</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-66-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MOUSAI</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-67-USD</td>
            <td scope="row" className="border-table-right text-capitalize">NOW AMBER</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-68-USD</td>
            <td scope="row" className="border-table-right text-capitalize">OCCIDENTAL GRAND</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-69-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ONE AND ONLY MANDARINAS</td>
            <td className="border-table-left">170 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-70-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PARADISE VILLAGE</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-71-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PENNINSULA VALLARTA</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-72-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PINNACLE</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-73-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA FIESTA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-74-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA GEMELAS CONDO</td>
            <td className="border-table-left">140 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-75-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA LOS ARCOS</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-76-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA ROYALE</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-77-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAZA PELICANOS</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-78-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PORTA FORTUNA</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-79-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PORTO FINO</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-80-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA ARENA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-81-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA ESMERALDA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-82-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA NEGRA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-83-USD</td>
            <td scope="row" className="border-table-right text-capitalize">REAL DEL MAR</td>
            <td className="border-table-left">140 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-84-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU JALISCO</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-85-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU PALACE</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-86-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU VALLARTA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-87-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ROYALE DECAMERON COMPLEX</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-88-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAMBA</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-89-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAN FRANCISCO (SAN PANCHO)</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-90-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAYULITA</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-91-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-92-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS BAHIA MITA</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-93-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS VALLARTA BAY</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-94-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SHERATON</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-95-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ST. REGIS</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-96-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SUNSCAPE</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-97-USD</td>
            <td scope="row" className="border-table-right text-capitalize">TRES MARES BEACH</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-98-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VALLARTA GARDENS</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-99-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VALLARTA SHORES</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-100-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VAMAR RESORT</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-101-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VELAS VALLARTA</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-102-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VIDANTA</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-103-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA DEL PALMAR</td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-104-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA DEL PALMAR FLAMINGOS</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-105-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA LA ESTANCIA</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-106-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA MANDARINAS</td>
            <td className="border-table-left">140 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-107-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA PREMIER</td>
            <td className="border-table-left">125 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-108-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLAS ALTAS</td>
            <td className="border-table-left">135 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">big-109-USD</td>
            <td scope="row" className="border-table-right text-capitalize">W HOTEL</td>
            <td className="border-table-left">150 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">big-110-USD</td>
            <td scope="row" className="border-table-right text-capitalize">WESTIN</td>
            <td className="border-table-left">110 USD</td>
          </tr>
        </tbody>
      </table>
    </section>
    </div>
  )
}
