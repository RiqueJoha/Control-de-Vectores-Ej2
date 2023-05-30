const selectTipo= document.querySelector ("select");
const pResProduct= document.querySelector("#producto");
const pResCant= document.querySelector("#cantidad");

let contador=100

const productos= ["Producto1", "Producto2", "Producto3"];
const cantidades=[contador, contador,contador];

function compra() {
    
    contador=contador-1;
    
    pResProduct.innerHTML=(productos)
    pResCant.innerHTML= "Cantidad:"+(cantidades)

    
}