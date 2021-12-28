document.addEventListener('DOMContentLoaded', () => {
    myFunction();
});


function myFunction() {
    document.addEventListener('click', (e) => {
        hasClicked(e);

    });

    botonTarea = document.getElementById('anadirTarea');
    botonTarea.addEventListener('click', () => {
        annadirTarea();
    })
}


function hasClicked(e) {
    const element = e.target.tagName;
    const newTag = document.getElementById('tag');

    newTag.innerHTML = element;

    if (element === 'IMG') {
        setTimeout(() => { alert('Has clicado sobre una imagen') }, 1000);
        // alert('Has clicado sobre una imagen');
    }
    else {
        setTimeout(() => { alert('Has clicado sobre un botón') }, 1000);
        // alert("Has clicado sobre un botón");
    }
}

function annadirTarea() {
    const tareas = document.getElementById('tareas');
    const newElement = document.createElement('li');
    const textNewElement = document.createTextNode('Nueva Tarea');

    newElement.append(textNewElement);
    tareas.appendChild(newElement);
}

