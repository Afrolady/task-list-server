const express = require('express');
const app = express();
const port = 3000;

// Lista de tareas
const tasks = [
  { id: 1, description: 'Hacer laboratorio de express', completed: false },
  { id: 2, description: 'Hacer laboratorio de base de datos', completed: true },
  { id: 3, description: 'Hacer laboratorio de chakra UI', completed: false },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
