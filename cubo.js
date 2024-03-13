class cubo{
    constructor(nombre,textura,nombreimagen,dimesion){
        this.nombre=nombre
        this.textura=textura
        this.nombreimagen=nombreimagen
        this.dimesion=dimesion
    }
}
class bloqueTierra extends cubo{
    constructor(nombre,textura,nombreimagen,dimesion){
        super(nombre,textura,nombreimagen,dimesion)
    }

    datosBloque(){
        return `Es un bloque de ${this.nombre} tiene una textura de ${this.textura} nombre de la imagen ${this.nombreimagen} tiene una dimension de ${this.dimesion} y da uno de tierra`
    }
}

class bloqueDiamante extends cubo{
    constructor(nombre,textura,nombreimagen,dimesion){
        super(nombre,textura,nombreimagen,dimesion)
    }
    datosBloque(){
        return `Es un bloque de ${this.nombre} tiene una textura de ${this.textura} nombre de la imagen ${this.nombreimagen} tiene una dimension de ${this.dimesion} da uno de diamante`
    }
}

class bloqueCarbon extends cubo{
    constructor(nombre,textura,nombreimagen,dimesion){
        super(nombre,textura,nombreimagen,dimesion)
    }
    datosBloque(){
        return `Es un bloque de ${this.nombre} tiene una textura de ${this.textura} nombre de la imagen ${this.nombreimagen} tiene una dimension de ${this.dimesion} da uno de carbon`
    }
}

class bloqueMadera extends cubo{
    constructor(nombre,textura,nombreimagen,dimesion){
        super(nombre,textura,nombreimagen,dimesion)
    }
    datosBloque(){
        return `Es un bloque de ${this.nombre} tiene una textura de ${this.textura} nombre de la imagen ${this.nombreimagen} tiene una dimension de ${this.dimesion} da uno de madera`
    }

}

const cubito = new bloqueTierra("tierra","tierra","",50)
const cubito2 = new bloqueDiamante("Diamante","Diamante","",45)
const cubito3 = new bloqueCarbon("Carbon","Carbon","",49)
const cubito4 = new bloqueTierra("Madera","Madera","",20)

const imgcubo = document.getElementById("imgcubo")
const btnTierra = document.getElementById("btnTierra")
const btnCarbon = document.getElementById("btnCarbon")
const btnDiamante = document.getElementById("btnDiamante")
const btnMadera = document.getElementById("btnMadera")

const respuesta=document.getElementById("response")


btnTierra.addEventListener("click",()=>{
    imgcubo.setAttribute("src","https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png")
    respuesta.innerText=cubito.datosBloque()
})

btnDiamante.addEventListener("click",()=>{
    imgcubo.setAttribute("src","https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png")
    respuesta.innerText=cubito2.datosBloque()
})

btnCarbon.addEventListener("click",()=>{
    imgcubo.setAttribute("src","https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png")
    respuesta.innerText=cubito3.datosBloque()
})

btnMadera.addEventListener("click",()=>{
    imgcubo.setAttribute("src","https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png")
    respuesta.innerText=cubito4.datosBloque()
})






