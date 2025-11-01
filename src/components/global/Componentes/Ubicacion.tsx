import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import { generalConfig } from '@util/generalConfig'

const Ubicacion = () => {
  return (
    <div className="w-full flex justify-center content-center flex-wrap">
      <div className="w-full lg:w-1/2 h-screen flex flex-col items-center content-center">
        <h1 className="text-3xl md:text-3xl font-bold leading-tighter tracking-tighter mb-3 font-heading">
          <div className="mt-10 lg:mt-2 text-center">
            <span className={generalConfig.classTitlesGeneral}>UBICACIÓN</span>
          </div>
        </h1>
        <br />
        <div className="text-center w-full flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold" style={{ textAlign: 'center', fontFamily: 'Lucida Sans', color: '#67737e' }}>Visitanos en:</h1>
        </div>
        <br />
        <iframe 
          title="Google Maps Location" 
          className="rounded-lg w-4/5 h-60 lg:h-80 shadow-lg shadow-gray-500 hover:shadow-gray-600" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.2954728147174!2d1.4029711!3d38.894358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129945e80f41f91b%3A0x42e6cae1a4fe128e!2sMAT%20Pro%20Studio%C2%AE%20Barber%20Shop%20Ibiza%20Playa%20d&#39;en%20Bossa!5e0!3m2!1ses!2sco!4v1762003931416!5m2!1ses!2sco" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
        <br />
        <br />
        <div className="text-center w-full flex flex-col items-center justify-center">
          <p className="text-sm flex justify-center items-center flex-row" style={{ fontFamily: 'Lucida Sans', color: '#67737e' }}>
            <MapPin size={16} className="mr-1" /> España / Ibiza: MAT Pro Studio® Barber Shop Ibiza Playa d'en Bossa
          </p>
          <br />
          <button>
            <a href="/contacto" className={generalConfig.Home.Wellcome.ButtonGeneralClass}>
              Ver mapa
              <ArrowRight size={16} className="ml-2" />
            </a>
          </button>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Ubicacion