import React from 'react'
import smallSprinter from './Carros/small-sprinter.jpg'
import '../../App.css';

export const SmallSprinter = () => {
  return (
    <div>
      <h6 className="camuflaje display-4">
        shuttle
      </h6>   

      <section className="espaciados">
      <h3 className="title-secondary text-center display-4 shadow-title">
        SMALL SPRINTER
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
        <img className="col-lg-6 img-cars" src={smallSprinter} alt="small sprinter"/>
        <div className=" offset-lg-2 col-lg-4 d-flex flex-column justify-content-around">
          <h4>
            1-12 PEOPLE
          </h4>
          <h4>
            DEPARTING FROM PUERTO VALLARTA JALISCO AIRPORT
          </h4>
          <h4 className="border-precio-especial p-2 text-justify">
            <span className="">
              45 USD PER HOUR (MINIMUM 3 HRS)
            </span>
            <hr/>
            <span className="">
              400 USD ALL DAY (12 HRS)
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
            <td scope="row" className="border-table-right text-uppercase">small-01-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALAMAR CONDO</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-02-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALMAR RESORT</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-03-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ALTA VISTA</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-04-USD</td>
            <td scope="row" className="border-table-right text-capitalize">AMAPAS</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-05-USD</td>
            <td scope="row" className="border-table-right text-capitalize">AQCUA FLAMINGOS</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-06-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BARRA DE NAVIDAD</td>
            <td className="border-table-left">360 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-07-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BARCELÓ</td>
            <td className="border-table-left">89 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-08-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BLUE CHAIRS</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-09-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BOCA DE TOMATLÁN</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-10-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BUCERIAS</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-11-USD</td>
            <td scope="row" className="border-table-right text-capitalize">BUENAVENTURA GRAND</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-12-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CANTO DEL SOL</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-13-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CARELLES</td>
            <td className="border-table-left">270 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-14-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CASA IGUANA</td>
            <td className="border-table-left">89 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-15-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CASA JADE</td>
            <td className="border-table-left">95 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-16-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CONRAD</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-17-USD</td>
            <td scope="row" className="border-table-right text-capitalize">COSTA SUR</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-18-USD</td>
            <td scope="row" className="border-table-right text-capitalize">CROWN PARADISE</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-19-USD</td>
            <td scope="row" className="border-table-right text-capitalize">DREAMS BAHIA MITA</td>
            <td className="border-table-left">124 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-20-USD</td>
            <td scope="row" className="border-table-right text-capitalize">DREAMS VILLAMAGNA</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-21-USD</td>
            <td scope="row" className="border-table-right text-capitalize">EL ANCLOTE</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-22-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FIESTA AMERICANA</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-23-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FLAMINGO VALLARTA</td>
            <td className="border-table-left">59 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-24-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FOUR SEASONS</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-25-USD</td>
            <td scope="row" className="border-table-right text-capitalize">FRIENDLY</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-26-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GARZA BLANCA</td>
            <td className="border-table-left">84 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-27-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GOLDEN CROWN</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-28-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND BLISS</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-29-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND FIESTA AMERICANA (HILTON)</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-30-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND LUXXE </td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-31-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND MATLALI</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-32-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND MAYAN</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-33-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND PALLADIUM </td>
            <td className="border-table-left">110 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-34-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND PARK ROYALE</td>
            <td className="border-table-left">84 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-35-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND VELAS</td>
            <td className="border-table-left">69 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-36-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GRAND VENETIAN</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-37-USD</td>
            <td scope="row" className="border-table-right text-uppercase">guadalajara</td>
            <td className="border-table-left">400 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-38-USD</td>
            <td scope="row" className="border-table-right text-capitalize">GUAYABITOS</td>
            <td className="border-table-left">140 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-39-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA BUENAVENTURA</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-40-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA HILTON</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-41-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HACIENDA MITA</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-42-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HARD ROCK</td>
            <td className="border-table-left">69 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-43-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HILTON</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-44-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HOTEL ROSITA</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-45-USD</td>
            <td scope="row" className="border-table-right text-capitalize">HYATT ZIVA</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-46-USD</td>
            <td scope="row" className="border-table-right text-capitalize">IBEROSTAR</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-47-USD</td>
            <td scope="row" className="border-table-right text-capitalize">IMANTA RESORT</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-48-USD</td>
            <td scope="row" className="border-table-right text-capitalize">KRYSTAL REFLECT</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-49-USD</td>
            <td scope="row" className="border-table-right text-capitalize">KRYSTAL VALLARTA</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-50-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA CRUZ DE HUANACAXTLE</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-51-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA PEÑITA</td>
            <td className="border-table-left">144 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-52-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LA PUNTILLA</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-53-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LAS PALMAS</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-54-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LINDO MAR</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-55-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LITIBÚ</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-56-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LOS PICOS</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-57-USD</td>
            <td scope="row" className="border-table-right text-capitalize">LOS TULES</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-58-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIAL EMOTIONS RESORT</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-59-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIVAL ARMONY</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-60-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARIVAL DISTINCT RESIDENCES</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-61-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MARRIOT</td>
            <td className="border-table-left">59 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-62-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MELAQUE</td>
            <td className="border-table-left">370 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-63-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MELIA</td>
            <td className="border-table-left">59 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-64-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MIO</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-65-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MOLINO DE AGUA</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-66-USD</td>
            <td scope="row" className="border-table-right text-capitalize">MOUSAI</td>
            <td className="border-table-left">84 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-67-USD</td>
            <td scope="row" className="border-table-right text-capitalize">NOW AMBER</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-68-USD</td>
            <td scope="row" className="border-table-right text-capitalize">OCCIDENTAL GRAND</td>
            <td className="border-table-left">69 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-69-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ONE AND ONLY MANDARINAS</td>
            <td className="border-table-left">130 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-70-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PARADISE VILLAGE</td>
            <td className="border-table-left">69 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-71-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PENNINSULA VALLARTA</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-72-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PINNACLE</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-73-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA FIESTA</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-74-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA GEMELAS CONDO</td>
            <td className="border-table-left">84 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-75-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA LOS ARCOS</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-76-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAYA ROYALE</td>
            <td className="border-table-left">69 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-77-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PLAZA PELICANOS</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-78-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PORTA FORTUNA</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-79-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PORTO FINO</td>
            <td className="border-table-left">59 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-80-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA ARENA</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-81-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA ESMERALDA</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-82-USD</td>
            <td scope="row" className="border-table-right text-capitalize">PUNTA NEGRA</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-83-USD</td>
            <td scope="row" className="border-table-right text-capitalize">REAL DEL MAR</td>
            <td className="border-table-left">85 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-84-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU JALISCO</td>
            <td className="border-table-left">75 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-85-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU PALACE</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-86-USD</td>
            <td scope="row" className="border-table-right text-capitalize">RIU VALLARTA</td>
            <td className="border-table-left">75 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-87-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ROYALE DECAMERON COMPLEX</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-88-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAMBA</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-89-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAN FRANCISCO (SAN PANCHO)</td>
            <td className="border-table-left">124 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-90-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SAYULITA</td>
            <td className="border-table-left">124 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-91-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-92-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS BAHIA MITA</td>
            <td className="border-table-left">124 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-93-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SECRETS VALLARTA BAY</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-94-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SHERATON</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-95-USD</td>
            <td scope="row" className="border-table-right text-capitalize">ST. REGIS</td>
            <td className="border-table-left">120 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-96-USD</td>
            <td scope="row" className="border-table-right text-capitalize">SUNSCAPE</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-97-USD</td>
            <td scope="row" className="border-table-right text-capitalize">TRES MARES BEACH</td>
            <td className="border-table-left">59 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-98-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VALLARTA GARDENS</td>
            <td className="border-table-left">89 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-99-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VALLARTA SHORES</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-100-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VAMAR RESORT</td>
            <td className="border-table-left">59 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-101-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VELAS VALLARTA</td>
            <td className="border-table-left">59 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-102-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VIDANTA</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-103-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA DEL PALMAR</td>
            <td className="border-table-left">64 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-104-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA DEL PALMAR FLAMINGOS</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-105-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA LA ESTANCIA</td>
            <td className="border-table-left">79 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-106-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA MANDARINAS</td>
            <td className="border-table-left">89 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-107-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLA PREMIER</td>
            <td className="border-table-left">74 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-108-USD</td>
            <td scope="row" className="border-table-right text-capitalize">VILLAS ALTAS</td>
            <td className="border-table-left">89 USD</td>
          </tr>
          <tr className="bg-table-one">
            <td scope="row" className="border-table-right text-uppercase">small-109-USD</td>
            <td scope="row" className="border-table-right text-capitalize">W HOTEL</td>
            <td className="border-table-left">114 USD</td>
          </tr>
          <tr className="bg-table-two">
            <td scope="row" className="border-table-right text-uppercase">small-110-USD</td>
            <td scope="row" className="border-table-right text-capitalize">WESTIN</td>
            <td className="border-table-left">59 USD</td>
          </tr>
        </tbody>
      </table>

    </section>
    </div>
  )
}
