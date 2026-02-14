const container = document.getElementById("contenedor");

poemas.slice().reverse().forEach(poema => {
    const div = document.createElement("div");
    div.classList.add("poema");

    div.innerHTML = `
        <h2>${poema.titulo}</h2>
        <small>${poema.fecha}</small>
        <p>${poema.contenido.replace(/\n/g, "<br>")}</p>
    `;

    container.appendChild(div);
});
