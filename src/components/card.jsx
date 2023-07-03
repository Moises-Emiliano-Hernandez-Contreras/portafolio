import React from "react";

function Card(){
    return(
      
      <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div
            class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
          >
            <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Hola!!
            </h2>
      
            <p class="hidden text-gray-500 md:mt-4 md:block text-2xl">
            Mi nombre es Moises Emiliano y soy desarrollador backend en nodeJS, Express, MySQL, PHP, Javascript, Java, Firebase.
            </p>
      
            <div class="mt-4 md:mt-8">
              <a
                href="#"
                class="ease-in duration-300 inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Contactame
              </a>
            </div>
          </div>
        </div>
      
        <img
          alt="Violin"
          src="https://thevalley.es/wp-content/uploads/2022/05/3.jpg"
          class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
      

    ) 
    
}
export default Card;