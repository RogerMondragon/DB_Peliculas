use('PelisDB');

db.getCollection('Peliculas').insertMany([
    {
        titulo: "Los Ilusionistas",
        año: 2013,
        genero: "Misterio",
        director: "Cristopher Nolan"

    },
    {
        titulo: "Yo Robot",
        año: 2004,
        genero: "Futurista",
        director:"Alex Proyas"
    },
    {
        titulo: "Interestelar",
        año: 2014,
        genero: "Ciencia Ficción",
        director:"Cristopher Nolan"

    },
    {
        titulo: "Volver Al Futuro",
        año: 1985,
        genero: "Futurista",
        director:"Robert Zemeckis"

    },
    {
        titulo: "Constantine",
        año: 2005,
        genero: "Comic",
        director:"Francis Lawrence"

    },
    {
        titulo: "Viaje Al Centro De La Tierra",
        año: 2008,
        genero: "Aventura",
        director:"Eric Brevig"

    },
    {
        titulo: "The Crow",
        año: 2024,
        genero: "Terror",
        director:"Rupert Sanders"

    },
    {
        titulo: "Beetlejuice 2",
        año: 2024,
        genero: "Terror",
        director:"Tim Burton"

    },
    {
        titulo: "Titanes Del Pacifico",
        año: 2013,
        genero: "Accion",
        director:"Guillermo Del Toro"

    },
    {
        titulo: "El Exorcista Del Papa ",
        año: 2023,
        genero: "Terror",
        director:"Julius Avery"

    }
]);