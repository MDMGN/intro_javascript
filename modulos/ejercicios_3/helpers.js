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


  // Función que simula la obtención de datos de una API
export async function fetchData(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id, name: `Usuario ${id}` });
      }, 1000);
    });
  }

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