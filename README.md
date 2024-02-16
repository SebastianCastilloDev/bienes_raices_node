# Bienes raices
Proyecto de entrenamiento de desarrollo con NodeJS y el patrón de arquitectura MVC.

## Construido con 🛠️
- NodeJS
- Express
- Sequelize
- MySQL

## Autores ✒️
- Sebastian Castillo

## Instalación
Primero clona el proyecto, con el comando
`git clone https://github.com/SebastianCastilloDev/bienes_raices_node.git`

Para instalar las dependencias del proyecto, ejecuta el comando
`npm install`

# Guia de desarrollo

En los proyectos de node contamos con dos tipos de dependencias, las dependencias del proyecto y las dependencias de desarrollo. Las dependencias del proyecto son las que se instalan con el comando `npm install` y las dependencias de desarrollo son las que se instalan con el comando `npm install --save-dev`. Las dependencias de desarrollo son las que se utilizan para el desarrollo del proyecto, como por ejemplo, las librerias de testing, las librerias de documentación, etc.


## Instalación de express
Comenzaremos instalando express.

`npm install express`

Express es un framework de node que nos permite crear aplicaciones web de manera sencilla. Con express podemos crear rutas, manejar peticiones, renderizar vistas, etc.
Es una dependencia del proyecto

## Creacion de un script de inicio
Para iniciar el proyecto, necesitamos un script que ejecute el servidor. Para ello, en el archivo `package.json` creamos un script llamado `start` que ejecute el archivo `index.js` que es el archivo principal de la aplicación.

```json
"scripts": {
    "start": "node ./index.js"
}
```

El script start nos permite iniciar el servidor con el comando `npm start`

## Instalación de nodemon
Nodemon es una dependencia de desarrollo que nos permite reiniciar el servidor cada vez que se detecta un cambio en los archivos del proyecto. Para instalar nodemon ejecutamos el comando

`npm install --save-dev nodemon`

Luego, creamos un script en el archivo `package.json` llamado `dev` que ejecute nodemon.

```json
"scripts": {
    "server": "nodemon ./index.js"
}
```

## Creando un servidor con express

https://expressjs.com/es/starter/hello-world.html

En nuestro index.js creamos un servidor con express.

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});
```

## Creando rutas con express

Para crear rutas con express, utilizamos el método `app.get` que recibe dos parametros, el primero es la ruta y el segundo es un callback que recibe dos parametros, la petición y la respuesta.

```javascript
app.get('/', function(req, res) {
    res.send('Hello World');
})
```
En la respuesta podemos enviar distintos tipos de datos, como texto, json, archivos, etc.

Existe un método para cada tipo de petición, `app.get`, `app.post`, `app.put`, `app.delete`, `app.patch`, `app.options`, `app.head`, `app.all`

## Habilitando ES Modules en NodeJS

Para habilitar los modulos de ES6 en NodeJS, necesitamos agregar un archivo llamado `package.json` en la raiz del proyecto con el siguiente contenido.

https://nodejs.org/api/esm.html

```json
{
    "type": "module"
}
```

