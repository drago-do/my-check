const Categories = [
  {
    _id: "63acbba13bd411f44a60d04f",
    name: "Cerveza",
    description: "Michelada,Chelada,Caguama",
    image: {
      url: true,
      link: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    },
  },
  {
    _id: "73acbba13bd411f44a60d04f",
    name: "Vino",
    description: "Tinto,Blanco,Rosado",
    image: {
      url: true,
      link: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    },
  },
  {
    _id: "83acbba13bd411f44a60d04f",
    name: "Whisky",
    description: "Escocés,Irlandés,Bourbon",
    image: {
      url: true,
      link: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    },
  },
  {
    _id: "93acbba13bd411f44a60d04f",
    name: "Tequila",
    description: "Blanco,Reposado,Añejo",
    image: {
      url: true,
      link: "https://m.media-amazon.com/images/I/61vYdM6juBL.jpg",
    },
    parent: "73acbba13bd411f44a60d04f",
  },
];

export default Categories;
