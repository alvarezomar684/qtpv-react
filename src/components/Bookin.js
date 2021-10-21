import React, { useEffect, useState } from 'react'
import { pricessedanus } from '../pricessedanus.json';
import { timeH } from '../timeH.json';
import { timeM } from '../timeM.json';
import { DatePicker } from '@material-ui/pickers';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import { useForm } from 'react-hook-form';
import axios from 'axios';


export const Bookin = () => {

  //Cuerpo del correo
  const [sedanUs, setSedanUs] = useState([])
  const [timeHr, setTimeH] = useState([])
  const [timeMi, setTimeMi] = useState([])
  const [searchDestiny, setSearchDestiny] = useState(null)
  const [searchTimeH, setSearchTimeH] = useState(0)
  const [searchTimeM, setSearchTimeM] = useState(0)
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null)

  const [name, setName] = useState("")
  const [lastname, setLastName] = useState("")
  const [cell, setCell] = useState("")
  const [email, setEmail] = useState("")
  const [fly, setFly] = useState("")




  
  



  // const [p, setP] = useState(0)


  useEffect(() => {
    if (pricessedanus) {
      setSedanUs(pricessedanus)
    }
  }, [])

  useEffect(() => {
    if (timeH) {
      setTimeH(timeH)
    }
  }, [])

  useEffect(() => {
    if (timeM) {
      setTimeMi(timeM)
    }
  }, [])

  const listSedanUs = sedanUs.map(e => (<option key={e.id} precio={e.price} value={e.destination} >{e.destination}</option>))
  const listTimeH = timeHr.map(e => (<option key={e.hour} value={e.hour} >{e.hour}</option>))
  const listTimeM = timeMi.map(e => (<option key={e.mins} value={e.mins} >{e.mins}</option>))

  const fechaManipulable = JSON.stringify(fechaSeleccionada)
  const longitudFecha = fechaManipulable.length
  const fechaSeparada = fechaManipulable.split("")
  const fechaCortada = fechaSeparada.slice(1, 11, longitudFecha)
  const fechaR = fechaCortada.join(" ")


  const timeValue = `${searchTimeH}:${searchTimeM}`

  // console.log(listSedanUs)

  // console.log(listSedanUs[0])

  // const si = listSedanUs[0]

  // console.log(listSedanUs)

  // if(searchDestiny){
  //   console.log(si.props.precio)
  // }

  // console.log(p)

  const nombreCompleto = `${name} ${lastname}`

  console.log(nombreCompleto)



  // const bookingSedanUs = {
  //   subject: nombreCompleto,
  //   text: {
  //     destino: searchDestiny,
  //     fecha: fechaR,
  //     horario: timeValue,
  //     nombre: name,
  //     apellido: lastname,
  //     telefono: cell,
  //     vuelo: fly
  //   },
  //   to: email

  // }


  //Datos del correo


  // const callback = bookingSedanUs => {
  //   console.log(bookingSedanUs)
  // }

  console.log(nombreCompleto)
  console.log(searchDestiny)
  console.log(fechaR)
  console.log(timeValue)
  console.log(name)
  console.log(lastname)
  console.log(cell)
  console.log(fly)
  console.log(email)

  console.log(typeof(nombreCompleto))
  console.log(typeof(searchDestiny))
  console.log(typeof(fechaR))
  console.log(typeof(timeValue))
  console.log(typeof(name))
  console.log(typeof(lastname))
  console.log(typeof(cell))
  console.log(typeof(fly))
  console.log(typeof(email))

  const sendEmail = async (e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:9000/enviar-correo", {
      subject: nombreCompleto,
      text: {
        destino: searchDestiny,
        fecha: fechaR,
        horario: timeValue,
        nombre: name,
        apellido: lastname,
        telefono: cell,
        vuelo: fly
      },
      to: email
    })
    }catch(error){
      console.log(error)
    }


  }

  console.log(sendEmail)




  return (
    <div>
      <h6 id="comentarios" className="camuflaje display-4">
        shuttle
      </h6>

      <h2 className="title-secondary espaciados col-12 text-center text-uppercase display-4 shadow-title mb-5">
        booking
      </h2>
      <select className="form-control mb-3 text-center " onChange={e => setSearchDestiny(e.target.value)} >
        <option value="0" >choose your destiny</option>
        {listSedanUs}
      </select>


      {/* <h4 className="text-center" >
        {searchDestiny} USD
      </h4> */}

      <Calendar onChange={setFechaSeleccionada}
        value={fechaSeleccionada} />

      <div className="d-flex flex-row " >
        <select className="form-control mt-3 text-center col-6 " onChange={e => setSearchTimeH(e.target.value)} >
          <option value="" >Hour</option>
          {listTimeH}
        </select>
        <span className="mt-3" >
          :
        </span>
        <select className="form-control mt-3 text-center col-6 " onChange={e => setSearchTimeM(e.target.value)} >
          <option value="" >Mins</option>
          {listTimeM}
        </select>
      </div>

      <form onSubmit={sendEmail} className="mt-5" >
        <div>
          <label>
            Email:
            <input type="email" onChange={e => setEmail(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Name:
            <input onChange={e => setName(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Lastname:
            <input onChange={e => setLastName(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Cell:
            <input onChange={e => setCell(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Fly:
            <input onChange={e => setFly(e.target.value)} />
          </label>
        </div>


        <button type="submit" >
          Mandar datos a servidor
        </button>

      </form>

    </div>
  )
}
