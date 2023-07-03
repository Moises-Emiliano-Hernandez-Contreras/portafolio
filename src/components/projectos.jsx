import React from "react";


const proyectos = [
    { imagen: "/assets/grafica.png", proyecto: "Proyecto para la materia de graficación por computadora",link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/proyecto-graficacion" },
    { imagen: "/assets/crud-nodejs-mysql.png", proyecto: "Crud con node JS y MySQL",link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/crud-nodejs-mysql-v1" },
    { imagen: "/assets/node-firesore.png", proyecto: "Crud con node JS y Firestores de firebase",link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/api-nodejs-firestore" },
    { imagen: "/assets/api-imagenes.png", proyecto: "Subir imagenes con nodeJS a MySQL",link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/api-guardar-imagenes-nodejs-mysql" },
    { imagen: "/assets/carrito.png", proyecto: "Carrito de compras en HTML, CSS y JS Vanilla",link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/QuickStart" },
    { imagen: "/assets/gasolinera.png", proyecto: "Sistema de gasolineria en PHP con HTML y CSS", link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/Ordinario" },
    { imagen: "/assets/login-php.png", proyecto: "Login en PHP con HTML y CSS", link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/Programacion-Web21-21" },
    { imagen: "/assets/crud-react.png", proyecto: "Crud en react con firebase", link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/app8-CRUD" },
    { imagen: "/assets/tarjeta-pokemon.png", proyecto: "Consumo de api en JS Vanilla    ", link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/Programacion-Web21-21" },
    { imagen: "/assets/todo-list.png", proyecto: "to-do list en JS Vanilla, html y css    ", link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/Tarjeta" },
    { imagen: "/assets/pomodoro.png", proyecto: "pomodoro con JS Vanilla, html y css    ", link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/pomodoro" },
    { imagen: "/assets/java-crud-spring.png", proyecto: "Api en java usando Spring con MySQL como Base de datos",link:"https://github.com/Moises-Emiliano-Hernandez-Contreras/api-spring-crud" }
]


function Projectos() {
    return (
        <>
            <h1 className="text-center font-bold text-3xl">Proyectos</h1>
            <div className="grid grid-cols-3 w-3/4 mx-auto">
                {proyectos.map((projecto) => {
                    return (
                        <article class="group border border-gray-300 rounded-xl ml-3 mr-3 my-3 ">
                            <img
                                alt="Lava"
                                src={projecto.imagen}
                                class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                            />

                            <div class="p-4">
                                <a href={projecto.link}>
                                    <h3 class="text-lg font-medium text-red-600 font-semibold">
                                        {projecto.proyecto}
                                    </h3>
                                </a>

                                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                </p>
                            </div>
                        </article>

                    )
                })}
            </div>
        </>

    )
}
export default Projectos