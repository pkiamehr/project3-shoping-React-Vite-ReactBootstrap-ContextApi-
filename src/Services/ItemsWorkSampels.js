const Worksamples = [
  {
    id: "1",
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card",
    image: "/images/WorkSample1.png",
    to:'/shoping',
  },
  {
    id: "2",
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card",
    image: "/images/WorkSample1.png",
    to:'/shoping',
  },
  {
    id: "3",
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card",
    image: "/images/WorkSample1.png",
    to:'/shoping',
  },
  {
    id: "4",
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card",
    image: "/images/WorkSample1.png",
    to:'/shoping',
  },
  
];

function getData(id) {
  let productData = Worksamples.find((product) => product.id === id);

  return productData;
}

export { Worksamples, getData };
