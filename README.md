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

