# Express Events - Mod 2 LAB

En este laboratorio repasaremos los conceptos principales del módulo 2: 
-	Creación de un proyecto Express desde 0
-	Plantillas de HBS
- Modelos de Mongoose
-	CRUDs
-	Formularios

El laboratorio consistirá en crear un mini [Eventbrite](https://www.eventbrite.com)! Los conceptos básicos; listar, borrar, publicar y ver el detalle de los eventos.

## Iteración 1

Lo primero de todo es inicializar el proyecto de Node con `npm init`, instalar Express con `npm i Express` y crear la estructura básica del proyecto:
```
configs/
controllers/
models/
views/
app.js
```

Da forma al `app.js` con lo básico para poder arrancar la aplicación de Express escuchando en el puerto 3000.

## Iteración 2

Configuración de `hbs`:
- En `app.js` configura el motor de renderización y la ruta carpeta de vistas
- Crea un `views/layout.hbs` (mete bootstrap, pero no te preocupes por los estilos por ahora!)
- Crea un `configs/hbs.config.js` para configurar las vistas parciales.

## Iteración 3

Configura la conexión contra la base de datos en `configs/db.config.js` y añádelo al `app.js`. Lo ideal es usar una base de datos de Atlas.

## Iteración 4

Definición del modelo de evento:

```json
{
    "title": "How To Navigate A Quarter Life Crisis",
    "description": "Learn how to navigate yourself out of a QLC and be equipped with an internal compass that will navigate you out of any future crisis. A Quarter Life Crisis (QLC) can sneak up on you anytime between ages 24 - 35. You’ve done everything ‘right’ - studied, moved out, got a job, got a relationship - but you don’t feel ‘right’. You thought you were going to be successful, happy and fulfilled by this point. Instead you feel lost, stuck, insecure, disappointed about your career, and confused. You want to run away but don’t know where. You want to change but don’t know where to even start. Worst of all, you feel like you’re the only one going through this.",
    "capacity": 30,
    "start": "05-17-2023 09:00:00",
    "end": "05-17-2023 10:00:00",
    "image": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F125685779%2F31424710869%2F1%2Foriginal.20210209-233636?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2466%2C1233&s=de63ea93f293308a9f07ad5cb502b1b4",
    "tags": [
      "Online Events",
      "#career",
      "free"
    ]
}
```

- title:
  - String
  - Obligatorio
  - Mínimo 3 chars
- description:
  - String
  - Obligatorio
  - Mínimo 10 chars
- capacity:
  - Number
  - > 0
- start:
  - Date
- end:
  - Date
  - No puede ser anterior a `start` (deja esta validación sin completar, lo veremos en clase todos juntos)
- image:
  - String
  - Tiene que ser una URL (deja esta validación sin completar, lo veremos en clase todos juntos)
- tags:
  - Array de Strings

Pasos a seguir:
- Modelo: Crea el modelo de Evento `models/event.model.js`
- Seeds: Implementa `bin/seeds.js` para que cargue todos los eventos de `data/events.json`
- Comprueba usando Compás que los eventos se han añadido a la base de datos

## Iteración 5

Listado de eventos:

- ruta: `/events`
- controlador: `controllers/events.controller.js`
- vista: `views/events/list.hbs`

El listado de los eventos incluirá información mínima del mismo, diseñaremos un grid en el que se verán las fotos de los eventos.

- título, imagen y fecha del evento
- implementa un helper de hbs `configs/hbs.config.js` que permita pintar la fecha en formato 'YYYY-MM-DD' (2024-02-17), para ello necesitarás instalar la librería [dayjs](https://www.npmjs.com/package/dayjs). El helper se usará de la siguiente forma `{{dateFormat event.start 'YYYY-MM-DD'}}`

> No te preocupes mucho por los estilos por ahora, _better done than perfect_!

## Iteración 6

Detalle de un evento:
- ruta: `/events/:id`
- controlador: `controllers/events.controller.js`
- vista: `views/events/detail.hbs`

- Información completa del evento
- Si el identificador no existiese en la base de datos, hay que devolver un error 404, usa la librería http-errors para dar paso a ese error!

> No implementes aún el middleware de errores general, simplemente veremos un pantalla un error feo de no encontrado en el caso de no existir el evento.

## Iteración 7

Formulario de Eventos:

- ruta: `/create-event`
- controlador: `controllers/events.controller.js`
- vista: `views/events/create.hbs`

- Implementa un formulario para crear los eventos
- Muestra los errores de validación en cada imput (400 status code)
- En el caso de que la reacción sea correcta redirige al usuario al listado de eventos

## Iteración 8

Borrado de un evento

- ruta: `/events/:id/delete`
- controlador: `controllers/events.controller.js`
- vista: `views/events/list.hbs`

Desde el listado de eventos añade un botón para poder borrar ese evento si pinchas en él!

## Iteración 9

Añade los middlewares de errores

- 404 si ninguna ruta hace match
- Handler general para mostrar las distintas vistas de error
- No te olvides de mostrar el error por consola!

## Iteración 10

Dale cariño al CSS, barra de navegación, footer, formularios, listados, etc...

## Consejos

- Seguid las iteraciones para llevar el proyecto de una manera ordenada. Sin embargo, si veis que necesitáis seguir otro orden o preferís organizaros de otra manera, adelante. Estas iteraciones son para seguir unas pautas y asegurarnos que se cumplen los requisitos del proyecto.
- Usad Bootstrap o similares para la maquetación si queréis avanzar de forma rápida.
- Vais a ser muchas personas solucionando el mismo problema. Os animamos a que os ayudéis y os deis ideas entre vosotros. Surgirán features interesantes para vuestros proyectos, incluso podéis intercambiar conocimientos de cómo lo habéis hecho.

## Entrega

Este lab no es necesario entregarlo, es para trabajarlo en clase!