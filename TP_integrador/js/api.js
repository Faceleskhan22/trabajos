/* ==========================================================================
   MÓDULO: api.js - Consumo de Servicios Externos (Fetch & Async/Await)
   Materia: Desarrollo de Software para Plataformas Móviles (7° 5ta)
   Profesor: Axel Castellano Gutiérrez
   ========================================================================== */

/**
 * TODO: Exportar una función asíncrona llamada descargarProductosTech()
 * que descargue en paralelo con Promise.all() las categorías:
 * - "https://dummyjson.com/products/category/smartphones"
 * - "https://dummyjson.com/products/category/laptops"
 * - "https://dummyjson.com/products/category/mobile-accessories"
 * y retorne un único array plano con todos los productos (.flatMap).
 */
export async function descargarProductosTech() {
    // Tu código acá:
    const urlCategoria=[
    "https://dummyjson.com/products/category/smartphones",
    "https://dummyjson.com/products/category/laptops",
    "https://dummyjson.com/products/category/mobile-accessories"

    ]
    const respuesta= await Promise.all( 
        urlCategoria.map(url => fetch(url))
    );
    console.log("Respuesta http recibida:",respuesta);

    const datos = await Promise.all(
        respuesta.map(res => res.json())

    );
    console.log(" objetos JSON parseados:", datos);
    const productos = datos.flatMap(categoria => categoria.products);
    console.log("total de productos aplanados:", productos.length , productos);
    return productos;

}
