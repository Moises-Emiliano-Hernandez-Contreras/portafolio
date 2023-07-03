import React from "react";

function Contacto(){
    return(        
<article class="rounded-xl border border-gray-700 p-4 w-2/6 mx-auto my-8">
    <h1 className="text-2xl text-center">Contacto</h1>
  <ul class="mt-4 space-y-2 text-semibold">
    <li>
      <a
        href="https://github.com/Moises-Emiliano-Hernandez-Contreras"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-red-600"
      >
        <i class="fa-brands fa-github fa-spin fa-2xl text-red-600 mx-3"></i>        
        <strong class="font-medium text-bold">Github</strong>
      </a>
    </li>

    <li>
      <a
        href="https://mx.linkedin.com/in/mois%C3%A9s-emiliano-hern%C3%A1ndez-contreras-952841218"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-red-600"
      >
        <i class="fa-brands fa-linkedin fa-spin fa-2xl text-red-600 mx-3"></i>
        <strong class="font-medium text-bold ">Linkedin</strong>
      </a>
    </li> 

    <li>
      <div        
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-red-600"
      >
        <i class="fa-brands fa-facebook fa-spin fa-2xl text-red-600 mx-3"></i>
        <strong class="font-medium text-bold">M Emiliano Hernández Contreras</strong>
      </div>
    </li>

    <li>
      <div        
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-red-600"
      >
        <i class="fa-brands fa-whatsapp fa-spin fa-2xl text-red-600 mx-3"></i>
        <strong class="font-medium text-bold">951 250 69 82</strong>
      </div>
    </li>

    <li>
      <div        
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-red-600"
      >
        <i class="fa-brands fa-google fa-spin fa-2xl text-red-600 mx-3"></i>
        <strong class="font-medium text-bold">moisesemilianohernandez0@gmail.com</strong>
      </div>
    </li>
    
  </ul>
</article>        
    )
}
export default Contacto