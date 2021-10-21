import React from 'react'
import '../App.css';
import tripadviser from '../Fotos/Logos/tripadvisor.svg'
import logoCompany from '../Fotos/logo.jpeg'
export const Contact = () => {
  return (
    <div>
      <h6 id="contacto" className="camuflaje display-4">
        shuttle
      </h6>


      <h2 className="title-secondary espaciados col-12 text-center text-uppercase display-4 shadow-title">
        contact
      </h2>

      <div className="d-flex flex-column flex-lg-row justify-content-between bg-dark">
        <div className="ml-3 mt-3">
          <h3 style={{ fontWeight: "500" }} className="text-uppercase contacto mb-3 ">company</h3>
          <img src={logoCompany} alt="Logo" className="img-logo" />
        </div>

        <div className="mt-3">
          <h3 style={{ fontWeight: "500" }} className="text-uppercase contacto">location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233.4096992885246!2d-105.2272873!3d20.6062151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8421454f5c7d76ff%3A0xa779b07b8ac7ccff!2sQualitytransportationpv!5e0!3m2!1ses-419!2smx!4v1631073573427!5m2!1ses-419!2smx"
            className="map-logo" style={{ widows: "600px", height: "400px", border: "0" }} allowFullscreen="" loading="lazy">
          </iframe>          
        </div>

        <div id="info" className="d-flex flex-column justify-content-between mt-3 mr-3">

          <div>
            <h3 style={{ fontWeight: "500" }} className="text-uppercase contacto">e-mail</h3>
            <h4 className="d-flex flex-lg-row text-contacto">
              <svg xmlns="http://www.w3.org/105/svg" width="16" height="16" fill="currentColor"
                className="bi bi-envelope-fill green" viewBox="0 0 16 16">
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </svg>
              <span style={{ fontWeight: "500" }} className="text-white">info@qualitytransferspv.com</span>
            </h4>
          </div>

          <div>
            <h3 style={{ fontWeight: "500" }} className="text-uppercase contacto">phone number</h3>
            <h4 className="d-flex flex-lg-row text-contacto">
              <svg xmlns="http://www.w3.org/105/svg" width="16" height="16" fill="currentColor"
                className="bi bi-telephone-fill green" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.360.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.90.37-2.877L1.885.511z" />
              </svg>
              <span style={{ fontWeight: "500" }} className="text-white">322 123 6676</span>
            </h4>
          </div>

          <div>
            <h3 style={{ fontWeight: "500" }} className="text-uppercase contacto ">social media</h3>
            <div className="d-flex flex-lg-row justify-content-between">
              <a href="https://www.facebook.com/qualitytransferspv">
                <svg xmlns="http://www.w3.org/105/svg" fill="currentColor" className="bi bi-facebook facebook-icono iconos" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>

              <a href="https://api.whatsapp.com/send?phone=+523221236676">
                <svg xmlns="http://www.w3.org/105/svg" fill="currentColor" className="bi bi-whatsapp whatsapp-icono iconos" viewBox="0 0 16 16">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.84 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>

              <a
                href="https://www.tripadvisor.ca/Attraction_Review-g150793-d17582509-Reviews-Quality_Transfers_PV-Puerto_Vallarta.html">
                <img src={tripadviser} className="iconos" alt="tripadvisor" />
              </a>

              <a href="https://www.youtube.com/channel/UCtk1bDdcIDGYgY2ePVrTzNA/featured">
                <svg xmlns="http://www.w3.org/105/svg" fill="currentColor" className="bi bi-youtube iconos" viewBox="0 0 16 16">
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.140 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.140-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>

      <div className="container-google mt-5">
        <a href="http://search.google.com/local/writereview?placeid=ChIJ_3Z9XE9FIYQR_8zHinuweac"
          className=" text-google text-uppercase title-secondary">
          Please leave us a comment on google review. click here
        </a>
      </div>


    </div>
  )
}
