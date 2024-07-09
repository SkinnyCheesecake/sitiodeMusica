// alert('Desde Js');

document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    navigationScroll();
})

function navigationScroll() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()

            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}

function resaltarEnlace(){
    document.addEventListener('scroll', function () {
        const section = document.querySelectorAll('section')
        const links = document.querySelectorAll('.navegacion-principal a')

        let actual = ''
        section.forEach(section => {
            const topSection = section.offsetTop
            const heigthSection = section.clientHeight

            if(window.scrollY >= (topSection - heigthSection / 3)){
                actual = section.id
            }
        })

        links.forEach(link => {
            link.classList.remove('actual')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('actual')
            } 
        })
    })
}

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function (){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            // console.log('Ya la pasaste')
            header.classList.add('fixed')
        }
        else{
            // console.log('Aun no pasas la seccion sobre el festival')
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    const CANTIDAD_IMAGENES = 16;
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen de galeria'

        //EventHandler
        imagen.onclick = function () {
            funcionModal(i);
        }
        galeria.appendChild(imagen)
    }
}

function funcionModal (i) {
    // console.log('Desde funcioModal', i)

    const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen de galeria'

    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    
    
    const body = document.querySelector('body')
    body.classList.add('overflow')
    body.appendChild(modal)
    
    // Boton para cerrar
    const botonCerrar = document.createElement('BUTTON')
    botonCerrar.textContent = 'X'
    botonCerrar.classList.add('cerrarModal')
    botonCerrar.onclick = cerrarModal
    
    modal.appendChild(imagen)
    modal.appendChild(botonCerrar)

}

function cerrarModal () {
    // console.log('Desde cerrar modal')
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(() => {
        modal?.remove()
        
        const body = document.querySelector('body')
        body.classList.remove('overflow')
        }, 500);
      

}