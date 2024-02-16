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

## ¿Qué es el routing?

El routing es el proceso de seleccionar un camino para el tráfico en una red o entre varias redes. En el contexto de una aplicación web, el routing es el proceso de seleccionar una ruta para una petición HTTP.

A través del routing, podemos definir las rutas de nuestra aplicación, es decir, las URL que nuestra aplicación va a manejar.

Podemos definir rutas para distintos tipos de peticiones, como GET, POST, PUT, DELETE, etc.

En estas rutas nuestros usuarios pueden acceder a distintos recursos, como por ejemplo, una página de inicio, un formulario de contacto, un perfil de usuario, etc. 

### Creando un módulo de rutas

Es conveniente separar las rutas de nuestra aplicación en distintos módulos. Para ello, creamos un directorio llamado `routes` en la raiz del proyecto y dentro de este directorio creamos un archivo llamado `usuarioRoutes.js` que contendrá las rutas de nuestra aplicación.

```javascript
import express from 'express';

const router = express.Router();

// Routing
router.get('/', function(req, res) {
    res.send('Hello World');
})

router.get('/nosotros', function(req, res) {
    res.send('Nosotros');
})

export default router;
```

Para llamar a nuestras rutas en el archivo `index.js` utilizamos el método `app.use` que recibe dos parametros, el primero es la ruta base y el segundo es el módulo de rutas.

```javascript
app.use('/', usuarioRoutes);
```

app.use nos permite montar un módulo de rutas en una ruta base. Es decir, todas las rutas que definamos en el módulo de rutas, se montarán en la ruta base que definamos en app.use.

#### app.use

app.use nos va a permitir hacer muchas cosas, como por ejemplo, montar middlewares, montar módulos de rutas, montar archivos estáticos, cookies, etc.

### Middleware de express

https://expressjs.com/es/guide/writing-middleware.html

Lo que hemos visto hasta este momento es lo que se conoce como middleware en express. Un middleware puede realizar distintas tareas, como por ejemplo, validar la petición, modificar la petición, modificar la respuesta, etc.

## Realizando peticiones HTTP

Para probar nuestras rutas, podemos utilizar distintas herramientas, como por ejemplo, el navegador, Postman, Insomnia o Thunder Client, el cual funciona como una extensión de Visual Studio Code.

Antes de probar nuestras rutas, podemos reescribir nuestras rutas de una forma mas sencilla

La forma original es esta:
    
```javascript

// Routing
router.get('/', function(req, res) {
    res.json('Hello World de tipo GET');
})

router.post('/', function(req, res) {
    res.send('Hello World de tipo POST');
})