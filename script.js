const container = document.getElementById("contenedor");

poemas.slice().reverse().forEach(poema => {
    const div = document.createElement("div");
    div.classList.add("poema");

    let imagenHTML = "";
    if (poema.imagen && poema.imagen !== "") {
        imagenHTML = `<img src="${poema.imagen}" class="imagen-poema">`;
    }

    div.innerHTML = `
        <h2>${poema.titulo}</h2>
        <div class="fecha">${poema.fecha}</div>
        ${imagenHTML}
        <p>${poema.contenido}</p>
    `;

    container.appendChild(div);
});
