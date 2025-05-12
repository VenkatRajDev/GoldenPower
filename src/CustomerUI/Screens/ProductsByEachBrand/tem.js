const data = Array.from({length: 28}, (_, index) => {
  return {
    id: index + 1,
    title: `product ${index + 1}`,
    price: `${index + 1}00`,
    image: `https://picsum.photos/200/${index + 1}02`,
    discription: 'product 3 discription',
  };
});

export default data