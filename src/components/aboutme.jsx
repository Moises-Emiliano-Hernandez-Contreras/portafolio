import React from "react";

function Aboutme(){
    return(
<div  
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 w-1/3 mx-auto my-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-red-200 red-400 to-red-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        Desarrollador Backend nodeJS PHP
      </h3>

      <p className="mt-1 text-xs font-bold text-gray-600">M Emiliano Hernandez Contreras</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt="Foto"
        src="/assets/foto.jpeg"
        className="h-24 w-40 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-[40ch] text-sm text-gray-500">
        Hola, Soy desarrollador Junior backend con conocimiento javascript con nodeJS, PHP con Laravel y codeigniter, conozco SQL como lenguaje de consulta para bases de datos
        me gusta estar en constante aprendizaje de nuevos lenguajes, frameworks y tecnologias para el desarrollo de aplicaciones
        
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Universidad Autonoma Benito Juárez de Oaxaca</dt>
      <dd className="text-xs text-gray-500">Estudios</dd>
    </div>
  </dl>
</div>        
    )
}
export default Aboutme