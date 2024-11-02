
const resultado = db.peliculas.insertMany([
    {
      titulo: "El Resplandor",
      año: 1980,
      genero: "Terror",
      director: "Stanley Kubrick"
    },
    {
      titulo: "Mad Max: Fury Road",
      año: 2015,
      genero: "Acción",
      director: "George Miller"
    },
    {
      titulo: "El Gran Hotel Budapest",
      año: 2014,
      genero: "Comedia",
      director: "Wes Anderson"
    },
    {
        titulo: "Super Cool",
        año: 2007,
        genero: "Comedia",
        director: "Greg Mottola"
      },
      {
        titulo: "La Llegada",
        año: 2016,
        genero: "Futurista",
        director: "Denis Villeneuve"
      },
      {
        titulo: "Terminator 6: Destino Oculto",
        año: 2019,
        genero: "Ciencia Ficcion",
        director: "Tim Miller"
      }
  ]);

  printjson(resultado);

  db.peliculas.find().pretty();