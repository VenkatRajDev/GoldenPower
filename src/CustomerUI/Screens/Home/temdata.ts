const DATA = Array.from({length: 10}, (_,index: number) => {
    return {
        id: index + 1,
        image: `https://picsum.photos/2${index}0/402`,
        title: `product no ${index + 10}`,
        description: 'hey',
        price: `${index + 2}000`
    }
})

export default DATA