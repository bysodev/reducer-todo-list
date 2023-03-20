# Notas implementando el Hook Reducer


Una vez clonado el proyecto se debe ejecutar los isguiente comandos:

Para instalar todas las dependecias existentes en el proyecto, las cuales estan alojadas en el archivo package-lock.json

**npm install**: Para instalar todas las dependencias alojadas en el archivos package.json

**npm ci**: Para instalar todas las dependencias alojadas en el archivos package-lock.json

**Descripción**: Es un proyecto basico para registrar notas con una fecha y hora especifica de tiempo de logro, la cual puede ser completada, eliminada o visualizada en un modal con la fecha exacta de creación y otras descripciones. 

**Aspectos**: Se implemento un hook especial para el formulario de ingreso de las nuevas notas, luego toda acción que se pueda tener con la lista de notas pasaran por funciones centralizadas en un useReducer las cuales ante cualquier cambio en nuestro arreglo principal puede registrar los nuevos estados de forma local. 