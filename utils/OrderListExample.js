const OrderListExample = [
  {
    _id: "123456789",
    madeBy: { _id: "3", username: "carlosmartinez" },
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
        comments: "",
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
  },
  {
    _id: "987654321",
    madeBy: { _id: "5", username: "juanperez" },
    location: {
      mapTable: { _id: "3", name: "Salon" },
      position: [2, 1],
    },
    orderName: "Mesa 5",
    creationDate: "2023-11-05T12:30:00Z",
    products: [
      {
        product: {
          id: "63acbba13bd411f44a60d055",
          name: "Ensalada César",
          image: {
            url: true,
            link: "https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg",
          },
        },
        addedAT: "2023-11-05T12:31:00Z",
        deliver: false,
        paid: true,
        comments: "Sin crotones",
        addedBy: { _id: "5", username: "juanperez" },
        UnitMeasurementAndPrice: {
          size: 300,
          price: 8,
          UnitMeasurement: "g",
        },
      },
    ],
    total: 80,
  },
  {
    _id: "987654322",
    madeBy: { _id: "6", username: "luisalopez" },
    location: {
      mapTable: { _id: "2", name: "Salón Principal" },
      position: [2, 1],
    },
    orderName: "Mesa 7",
    creationDate: "2023-11-07T15:30:00Z",
    products: [
      {
        product: {
          id: "63acbba13bd411f44a60d058",
          name: "Margarita",
          image: {
            url: true,
            link: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/recipes_1200_800_fallback/public/2023-03/margarita%C2%A9iStock.jpg?itok=Ir0T3tYT",
          },
        },
        addedAT: "2023-11-07T15:32:00Z",
        deliver: false,
        paid: true,
        comments: "Con sal en el borde",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 300,
          price: 8,
          UnitMeasurement: "ml",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
      {
        product: {
          id: "63acbba13bd411f44a60d059",
          name: "Nachos con Queso",
          image: {
            url: true,
            link: "https://okdiario.com/img/2018/02/27/nachos-con-queso.jpg",
          },
        },
        addedAT: "2023-11-07T15:33:00Z",
        deliver: false,
        paid: true,
        comments: "Sin jalapeños",
        addedBy: { _id: "6", username: "luisalopez" },
        UnitMeasurementAndPrice: {
          size: 250,
          price: 6,
          UnitMeasurement: "g",
        },
      },
    ],
    total: 140,
  },
];

export default OrderListExample;
