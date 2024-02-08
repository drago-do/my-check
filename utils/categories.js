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
      link: "https://www.llanocolorado.mx/cdn/shop/files/6_e26c75e2-2d17-4cb1-a23f-4301a63eccbb_720x.png?v=1689967847",
    },
  },
  {
    _id: "83acbba13bd411f44a60d04f",
    name: "Whisky",
    description: "Escocés,Irlandés,Bourbon",
    image: {
      url: true,
      link: "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw8391d760/images/product/0082184090473_A.jpg?sw=1000&sh=1000&sm=fit",
    },
  },
  {
    _id: "93acbba13bd411f44a60d04f",
    name: "Tequila",
    description: "Blanco,Reposado,Añejo",
    image: {
      url: true,
      link: "https://chedrauimx.vtexassets.com/arquivos/ids/25752070-1600-auto?v=638421433914300000&width=1600&height=auto&aspect=true",
    },
    parent: "73acbba13bd411f44a60d04f",
  },
];

export default Categories;
