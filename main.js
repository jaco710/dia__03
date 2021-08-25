let agregar = document.querySelector("#agregar");
let lista = document.querySelector("#lista");

agregar.onclick = function(e) {
    e.preventDefault();

    let agrTarea = document.querySelector("#agrTarea");
    
    if (agrTarea.value != "") {
        let el = document.createElement("li");
        el.innerHTML = agrTarea.value;
        let btnborrar = document.createElement("button");
        btnborrar.className = "borrar";
        btnborrar.innerHTML = "\u00D7";
        el.appendChild(btnborrar);

        lista.appendChild(el);
        agrTarea.value = "";

        el.addEventListener("click", function(e) {
            e.target.style.textDecoration = "line-through";
        })
        btnborrar.addEventListener("click", function(e) {
            e.target.parentElement.style.display = "none";
        })
    } else {
        alert("No agregaste tarea,\nescribe ahora!!");
    }
}