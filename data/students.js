const STUDENTS = [

    "Alex Acosta", "Diego Alvarez", "Isabela Arrieta", "Zaida Atencia",

    "Isabella Betancur", "Santiago Cardona", "Elizabeth Cardozo", "Xiomara Causil",

    "Maria Causil", "Mery Corpas", "Mateo Cuello", "Samuel Diaz",

    "Evelyn Estrada", "Diego Franco", "Ronald Gonzalez", "Maria Gonzalez",

    "Juan Guerrero", "Madison Herrera", "Brayan Herrera", "Allinson Hoyos",

    "Jimena Ibañez", "Shalom Lopera", "Leidy Lopez", "Xavi Malo",

    "Esteban Marquez", "Elizabeth Martinez", "Isabella Mendoza", "Gabriela Meneses",

    "Santiago Montiel", "Angeline Ortega", "Ronald Pacheco", "Mariana Padilla",

    "Sara Perez", "Lorna Plaza", "Marcelo Rodriguez", "Jose Serna",

    "Laura Silva", "Loreinys Vargas", "Sara Vergara", "Andres Villalba"

];

function populateStudentsDropdown() {
    const select = document.getElementById('player-name-input');
    if (!select) return;

    // Limpiar todas las opciones existentes excepto la primera ("Select your name...")
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Agregar estudiantes de la lista plana
    STUDENTS.forEach(studentName => {
        const option = document.createElement('option');
        option.value = studentName;
        option.textContent = studentName;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentsDropdown);
