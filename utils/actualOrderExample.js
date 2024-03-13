const actualOrderExample = {
  _id: "123456789",
  madeBy: { _id: "3", username: "carlosmartinez" }, // ID de usuario with populate
  location: {
    mapTable: {
      _id: "1",
      name: "Terraza",
    },
    position: [0, 0],
  },
  orderName: "Mesa 1",
  creationDate: "2023-11-04T10:00:01Z",
  products: [
    {
      product: {
        id: "63acbba13bd411f44a60d054",
        name: "Virgin Piña Colada",
        image: {
          url: true,
          link: "https://platedcravings.com/wp-content/uploads/2022/06/Virgin-Pina-Colada-Plated-Cravings-9.jpg",
        },
      }, // ID de producto
      addedAT: "2023-11-04T10:01:00Z",
      deliver: false,
      paid: false,
      comments: "Some comments about this product",
      addedBy: { _id: "3", username: "carlosmartinez" }, // ID de usuario with populate
      UnitMeasurementAndPrice: {
        size: 450,
        price: 7,
        UnitMeasurement: "ml",
      },
    },
    {
      product: {
        id: "63acbba13bd411f44a60d054",
        name: "Virgin Piña Colada",
        image: {
          url: true,
          link: "https://platedcravings.com/wp-content/uploads/2022/06/Virgin-Pina-Colada-Plated-Cravings-9.jpg",
        },
      }, // ID de producto
      addedAT: "2023-11-04T10:00:00Z",
      deliver: false,
      paid: false,
      comments: "Some comments about this product",
      addedBy: { _id: "3", username: "carlosmartinez" }, // ID de usuario with populate
      UnitMeasurementAndPrice: {
        size: 450,
        price: 7,
        UnitMeasurement: "ml",
      },
    },
  ],
  total: 150,
};
export default actualOrderExample;
