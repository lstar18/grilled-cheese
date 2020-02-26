const cheese = [{
    type: 'Swiss',
    color: '#F5F7C9 ',
    price: .75,
    id: 'cheese1',
},
{
    type: 'Blue',
    color: '#73D0FD ',
    price: 1.00,
    id: 'cheese2',
},
{
    type: 'American',
    color: '#FCE240',
    price: 1.50,
    id: 'cheese3',
}
];

let selectedCheeseId = '';

const setSelectedCheese = (cheeseId) => {
  selectedCheeseId = cheeseId;
  console.log('selectedCheeseId', selectedCheeseId);
};

const getCheese = () => {
    return cheese;
}

export default { setSelectedCheese, getCheese }