import './App.css';
import { HashRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom"
import { Home } from './components/Home';
import { Destinations } from './components/Destinations';
import { Comments } from './components/Comments';
import { Contact } from './components/Contact';
import { Sayulita } from './components/Sayulita';
import { BocaTomatlan } from './components/BocaTomatlan';
import { Tequila } from './components/Tequila';
import { SanSebastian } from './components/SanSebastian';
import { Careyes } from './components/Careyes';
import { Guayabitos } from './components/Guayabitos';
import { Guadalajara } from './components/Guadalajara';
import { Tehuamixtle } from './components/Tehuamixtle';
import { Melaque } from './components/Melaque';
import { MenuResponsive } from './components/MenuResponsive';



function App() {
  return (
    <Router>
      <div className="container-fluid" >
        <Switch>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/destinations" >
            <Destinations />
          </Route>
          <Route path="/comments" >
            <Comments />
          </Route>
          <Route path="/sayulita" >
            <Sayulita />
          </Route>     
          <Route path="/boca-tomatlan" >
            <BocaTomatlan />
          </Route>  
          <Route path="/tequila" >
            <Tequila />
          </Route>  
          <Route path="/san-sebastian" >
            <SanSebastian />
          </Route>  
          <Route path="/careyes" >
            <Careyes />
          </Route>  
          <Route path="/guayabitos" >
            <Guayabitos />
          </Route>  
          <Route path="/guadalajara" >
            <Guadalajara />
          </Route>  
          <Route path="/tehuamixtle" >
            <Tehuamixtle />
          </Route>  
          <Route path="/melaque" >
            <Melaque />
          </Route>      
          <Route path="/contact" >
            <Contact />
          </Route>               
          <Route path="/" >
            <Redirect to="/home" />
          </Route>
        </Switch>
        <nav id="menu" className="fixed-top bg-dark menu menu-pc">
          <ul className="nav nav-pills d-flex flex-lg-row flex-column justify-content-between">

            <Link to="/home" >
              <li className=" hover-menu ">
                <a href="#home" className="text-white nav-link text-uppercase hover-menu title-secondary">
                  <span className="hover-menu menu-pc ">
                    <svg xmlns="http://www.w3.org/105/svg" fill="currentColor" className="bi bi-house-fill home-icon"
                      viewBox="0 0 16 16">
                      <path fillRule="evenodd"
                        d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                      <path fillRule="evenodd"
                        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>
                  </span>
                </a>
              </li>
            </Link>



            <Link to="/home" >
              <li className=" hover-menu ">
                <a href="#home" className="text-uppercase title-principal-nav text-white qtpv ">
                  <span className="hover-menu">
                    quality transfers pv
                  </span>
                </a>
              </li>
            </Link>



            
              <li className=" hover-menu ">
                <a href="https://mx.qualitytransferspv.com/" className="text-uppercase title-principal-nav text-white qtpv ">
                  <img src="https://img.icons8.com/emoji/50/000000/mexico-emoji.png" />
                </a>
              </li>
            



            
              <li className=" hover-menu ">
                <a href="https://api.whatsapp.com/send?phone=+523221236676">
                  <svg xmlns="http://www.w3.org/105/svg" fill="currentColor" className="bi bi-whatsapp whatsapp-icono iconos" 
                    viewBox="0 0 16 16">
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.84 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </li>
            


            <div className="  flex-column d-flex justify-content-between flex-lg-row">

              <Link to="/destinations" >
                <li className="  hover-menu title-secondary-nav ">
                  <a href="#Destinations" className="text-white nav-link text-uppercase  btn-block hover-menu">
                    <span className="hover-menu ">
                      Destinations
                    </span>
                  </a>
                </li>
              </Link>



              
                <li className=" ">
                  <div className="btn-group">
                    <button type="button"
                      className="btn bg-submenu hover-menu dropdown-toggle text-uppercase title-secondary-nav "
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Prices
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        <a href="#sedan" className="text-black text-uppercase text-center btn btn-block hover-menu ">
                          sedan
                        </a>
                      </button>
                      <button className="dropdown-item" type="button">
                        <a href="#van" className="text-black text-uppercase btn btn-block ">
                          van
                        </a>
                      </button>
                      <button className="dropdown-item" type="button">
                        <a href="#suv" className="text-black text-uppercase btn btn-block ">
                          suv
                        </a>
                      </button>
                      <button className="dropdown-item" type="button">
                        <a href="#small-sprinter" className="text-black text-uppercase btn btn-block ">
                          small sprinter
                        </a>
                      </button>
                      <button className="dropdown-item" type="button">
                        <a href="#big-sprinter" className="text-black text-uppercase btn btn-block ">
                          big sprinter
                        </a>
                      </button>
                    </div>
                  </div>
                </li>
              



              <Link to="/comments" >
                <li className="  hover-menu title-secondary-nav ">
                  <a href="#comentarios" className="text-white nav-link text-uppercase">
                    <span className="hover-menu ">
                      comments
                    </span>
                  </a>
                </li>
              </Link>



              <Link to="/contact" >
                <li className="  hover-menu title-secondary-nav ">
                  <a href="#contacto" className="text-white nav-link text-uppercase">
                    <span className="hover-menu ">
                      contact
                    </span>
                  </a>
                </li>
              </Link>


            </div>
          </ul>
        </nav>

        <MenuResponsive/>

      </div>
    </Router>
  );
}

export default App;
