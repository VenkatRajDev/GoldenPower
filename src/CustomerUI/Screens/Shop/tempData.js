export const inventorData = Array.from({length: 10}, (elements, index) => {
  return {
    id: index + 1,
    image: `https://picsum.photos/200/${index}32`,
    price: (index + 1) * 10,
  };
});

export const batterys = Array.from({length: 10}, (elements, index) => {
  return {
    id: index + 1,
    image: `https://picsum.photos/200/${index}23`,
    price: (index + 1) * 20,
  };
});

export const combosData = Array.from({length: 10}, (elements, index) => {
  return {
    id: index + 1,
    image: `https://picsum.photos/200/${index}52`,
    price: (index + 1) * 30,
  };
});

export const brandsData = Array.from({length: 12}, (elements, index) => {
  return {
    id: index + 1,
    image: `https://picsum.photos/200/${index}12`,
  };
} );
