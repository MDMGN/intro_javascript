### Ejercicio 1: Módulo básico con `async/await`
**Objetivo:** Crear un módulo que exporte una función asíncrona.

#### Archivo: `fetchData.js`
```js
// Función que simula la obtención de datos de una API
export async function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `Usuario ${id}` });
    }, 1000);
  });
}
```

#### Archivo: `main.js`
```js
import { fetchData } from './fetchData.js';

// Función principal que usa la función asíncrona del módulo
async function getUserInfo() {
  const user = await fetchData(1);
  console.log(`Nombre del usuario: ${user.name}`);
}

getUserInfo();
```

### Ejercicio 2: Módulo con múltiples funciones asíncronas
**Objetivo:** Exportar y utilizar múltiples funciones asíncronas en diferentes módulos.

#### Archivo: `api.js`
```js
// Simula la obtención de datos de un usuario
export async function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `Usuario ${id}` });
    }, 1000);
  });
}

// Simula la obtención de los posts de un usuario
export async function getUserPosts(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`Post 1 del usuario ${id}`, `Post 2 del usuario ${id}`]);
    }, 1000);
  });
}
```

#### Archivo: `main.js`
```js
import { getUser, getUserPosts } from './api.js';

async function fetchUserData() {
  const user = await getUser(1);
  console.log(`Nombre del usuario: ${user.name}`);

  const posts = await getUserPosts(1);
  console.log(`Posts del usuario: ${posts.join(", ")}`);
}

fetchUserData();
```

### Ejercicio 3: Módulos que manejan errores con `async/await`
**Objetivo:** Crear un módulo que maneje errores en funciones asíncronas.

#### Archivo: `errorHandling.js`
```js
export async function fetchDataWithError(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 5) {
        reject(`Error: El ID ${id} es inválido.`);
      } else {
        resolve({ id, name: `Usuario ${id}` });
      }
    }, 1000);
  });
}
```

#### Archivo: `main.js`
```js
import { fetchDataWithError } from './errorHandling.js';

async function getData() {
  try {
    const user = await fetchDataWithError(6); // Esto generará un error
    console.log(`Nombre del usuario: ${user.name}`);
  } catch (error) {
    console.error(error);
  }
}

getData();
```

### Ejercicio 4: `async/await` con múltiples módulos y `Promise.all`
**Objetivo:** Utilizar `Promise.all` con funciones asíncronas importadas de diferentes módulos.

#### Archivo: `user.js`
```js
export async function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `Usuario ${id}` });
    }, 1000);
  });
}
```

#### Archivo: `posts.js`
```js
export async function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`Post 1 del usuario ${userId}`, `Post 2 del usuario ${userId}`]);
    }, 1000);
  });
}
```

#### Archivo: `main.js`
```js
import { getUser } from './user.js';
import { getPosts } from './posts.js';

async function fetchUserAndPosts() {
  const [user, posts] = await Promise.all([getUser(1), getPosts(1)]);

  console.log(`Usuario: ${user.name}`);
  console.log(`Posts: ${posts.join(", ")}`);
}

fetchUserAndPosts();
```

### Ejercicio 5: Módulos con funciones utilitarias para retrasos
**Objetivo:** Crear una función `delay` en un módulo que sea reutilizable en otros módulos.

#### Archivo: `utils.js`
```js
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

#### Archivo: `main.js`
```js
import { delay } from './utils.js';

// Función que simula un proceso largo
async function processWithDelay() {
  console.log("Iniciando proceso...");
  await delay(2000);  // Pausa durante 2 segundos
  console.log("Proceso completado después de 2 segundos.");
}

processWithDelay();
```

### Ejercicio 6: Módulos con `async/await` y DOM
**Objetivo:** Utilizar `async/await` para manejar la interacción con el DOM.

#### Archivo: `api.js`
```js
export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'Producto A' }, { id: 2, name: 'Producto B' }]);
    }, 1500);
  });
}
```

#### Archivo: `main.js`
```js
import { fetchData } from './api.js';

async function loadProducts() {
  const products = await fetchData();
  
  const productList = document.querySelector('#productList');
  products.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product.name;
    productList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', loadProducts);
```

#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async/Await y Módulos</title>
  <script type="module" src="main.js"></script>
</head>
<body>
  <h1>Productos</h1>
  <ul id="productList"></ul>
</body>
</html>
```

### Ejercicio 7: Exportar y reutilizar una función de autenticación
**Objetivo:** Crear un sistema de autenticación sencillo con `async/await` y módulos.

#### Archivo: `auth.js`
```js
export async function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Autenticación exitosa");
      } else {
        reject("Autenticación fallida");
      }
    }, 1000);
  });
}
```

#### Archivo: `main.js`
```js
import { authenticate } from './auth.js';

async function login() {
  try {
    const result = await authenticate('admin', '1234');
    console.log(result);  // "Autenticación exitosa"
  } catch (error) {
    console.error(error);  // "Autenticación fallida"
  }
}

login();
```

### Ejercicio 8: Creación de un servicio de búsqueda modular
**Objetivo:** Crear un módulo de búsqueda asíncrona y un controlador que maneje los resultados.

#### Archivo: `search.js`
```js
export async function search(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = [
        { id: 1, name: "Producto A" },
        { id: 2, name: "Producto B" },
        { id: 3, name: "Producto C" }
      ].filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
      resolve(results);
    }, 1000);
  });
}
```

#### Archivo: `main.js`
```js
import { search } from './search.js';

async function handleSearch(query) {
  const results = await search(query);
  console.log("Resultados:", results);
}

document.querySelector('#searchBtn').addEventListener('click', () => {
  const query = document.querySelector('#searchInput').value;
  handleSearch(query);
});
```

#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Búsqueda con Async/Await y Módulos</title>
  <script type="module" src="main.js"></script>
</head>
<body>
  <input type="text" id="searchInput" placeholder="Buscar producto">
  <button id="searchBtn">Buscar</button>
</body>
</html>
```

---

Con estos ejercicios aprenderás a organizar y estructurar tu código usando módulos en combinación con `async/await`. ¡Espero que te ayuden!