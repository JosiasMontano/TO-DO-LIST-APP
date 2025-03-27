document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText === '') return;  // No hacer nada si la entrada está vacía

    const li = document.createElement('li');  // Crear un nuevo elemento de lista
    li.textContent = taskText;  // Asignar el texto de la tarea
    document.getElementById('taskList').appendChild(li);  // Añadir el elemento a la lista

    taskInput.value = '';  // Limpiar el campo de entrada
});