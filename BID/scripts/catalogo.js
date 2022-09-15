import libros from '../database/libros.json' assert {type: 'json'};

export function getlibros() {

    //* Se declara la varible para agregar el html
    let html = "";

    //* Se recorre el arreglo de libros
    for (let i = 0; i < libros.length; i++) {

        //* Se declara la varible con el libro actual
        const libro = libros[i];

        //* Se agrega el html del libro actual
        html += /*html*/`<div class="libro">
        <div class="libro-img">
            <img src="${libro.img}" alt="${libro.name}">
        </div>
        <div class="libro-info">
          <h3 class="libro-info-title">${libro.name}</h3>
          <p class="libro-info-author">${libro.autor}</p>
        </div>
      </div>`;
    }

    //* se inserta el html en el div con id catalogos
    document.getElementById('catalogos').innerHTML = html;

}

getlibros()