export const typeCars = [
  {
    segmentimage: "./sedan-car-model.png",
    segment: "sedan" 
  },
  {
    segmentimage: "./car-of-hatchback-model.png",
    segment: "hatchback" 
  },
  {
    segmentimage: "./car-suv.png",
    segment: "suv/muv" 
  }
]



export const filters = {
  price: ["Low to High","High to Low"],
  segment: ["sedan", "suv/muv", "hatchback"],
  car_brand: ["toyota", "maruti", "hyundai", "mahindra", "honda"],
  fuel: ["petrol", "diesel"],
  seating_capacity: ["5", "7"],
  transmission: ["auto", "manuel"],
  location: ["malappuram", "kannur","kozhikode"]
};

export const vehicles = [
  {
    carname: "fortuner",
    segment: "suv/muv",
    brand: "toyota",
    seating_capacity: "7",
    pickup_date:"2024-03-04",
    return_date: "2024-03-25",
    availabilty: false,
    location: "malappuram",
    fuel: "diesel",
    transmission: "auto",
    price: "20000",
    image:
      "https://www.freepnglogos.com/uploads/fortuner-png/toyota-fortuner-philippines-price-specs-and-promos-11.png",
  },
  {
    carname: "kuv100",
    segment: "suv/muv",
    brand: "mahindra",
    seating_capacity: "7",
    pickup_date:"2024-03-04",
    return_date: "2024-03-25",
    availabilty: true,
    location: "malappuram",
    fuel: "petrol",
    transmission: "manuel",
    price: "18000",
    image:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fmahindra%2Fkuv100%2Fmahindra-kuv100-pearl-white.png%3Fv%3D1&w=640&q=75",
  },
  {
    carname: "swift",
    segment: "hatchback",
    brand: "maruti",
    seating_capacity: "5",
    pickup_date:"2024-03-04",
    return_date: "2024-03-25",
    availabilty: true,
    location: "malappuram",
    fuel: "diesel",
    transmission: "manuel",
    price: "15000",
    image: "https://imgd-ct.aeplcdn.com/1056x660/n/ir6i4ta_1508719.jpg?q=80",
  },
  {
    carname: "zest",
    segment: "hatchback",
    brand: "tata",
    seating_capacity: "5",
    pickup_date:"2024-03-04",
    return_date: "2024-03-25",
    availabilty: true,
    location: "kannur",
    fuel: "diesel",
    transmission: "manuel",
    price: "12000",
    image:
      "https://i.pinimg.com/564x/3e/a8/25/3ea825bf8520f93af80272a18a9a3126.jpg",
  },
  {
    carname: "hyundai",
    segment: "sedan",
    brand: "hyundai",
    seating_capacity: "5",
    location: "malappuram",
    availabilty: true,
    fuel: "diesel",
    transmission: "auto",
    price: "14500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsL_Wd6Xfw9aczOEomaA72UV13rwxfqjta8uhNDpavlQ&s",
  },
  {
    carname: "civic",
    segment: "sedan",
    brand: "honda",
    seating_capacity: "5",
    fuel: "diesel",
    location: "malappuram",
    availabilty: true,
    transmission: "manuel",
    price: "18500",
    image:
      "https://freepngimg.com/save/31954-honda-civic-transparent-image/500x256",
  },
  {
    carname: "tiago",
    segment: "hatchback",
    brand: "tata",
    seating_capacity: "5",
    location: "malappuram",
    availabilty: true,
    fuel: "diesel",
    transmission: "manuel",
    price: "12500",
    image:
      "https://i.pinimg.com/originals/92/34/95/923495b621f809d1bfe42a1923a1f89e.png",
  },
  {
    carname: "swift dezire",
    segment: "sedan",
    brand: "maruti",
    seating_capacity: "5",
    location: "malappuram",
    availabilty: true,
    fuel: "diesel",
    transmission: "manuel",
    price: "13500",
    image:
      "https://i.pinimg.com/originals/00/09/c2/0009c2d9f3300b8c786463c18e02d59c.png",
  },
  {
    carname: "santro",
    segment: "hatchback",
    brand: "hyundai",
    seating_capacity: "5",
    location: "malappuram",
    availabilty: true,
    fuel: "diesel",
    transmission: "manuel",
    price: "12300",
    image:
      "https://stimg.cardekho.com/images/car-images/large/Hyundai/Hyundai-Santro-Xing/sleek-silver.jpg?impolicy=resize&imwidth=420",
  },
];
