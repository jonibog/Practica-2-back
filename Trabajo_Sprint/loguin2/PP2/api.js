// URL base de la API
const API_URL = "https://localhost:8443/api";

// Función para obtener todos los usuarios
const fetchUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) {
            throw new Error(`Error al obtener usuarios: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Usuarios obtenidos:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Función para crear un usuario
const createUser = async () => {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: 'Carlos',
                apellido: 'Ramirez',
                dni: '98765432',
                tipoUsuario: 'Admin',
                password: 'admin123',
            }),
        });

        if (!response.ok) {
            throw new Error(`Error al crear usuario: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Usuario creado:", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Llamadas a las funciones
fetchUsers();
createUser();
