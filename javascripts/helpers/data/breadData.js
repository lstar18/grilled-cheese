const breads = [{
    type: 'white',
    color: 'white',
    price: .75,
    id: 'bread1',
},
{
    type: 'wheat',
    color: 'wheat',
    price: 1.00,
    id: 'bread2',
},
{
    type: 'rye',
    color: 'burlywood',
    price: 1.50,
    id: 'bread3',
}
];
let selectedBreadId = '';

const setSelectedBread = (breadId) => {
  selectedBreadId = breadId;
  console.log('selectedBreadId', selectedBreadId);
};

const getBreads = () => {
  return breads;
};

export default { setSelectedBread, getBreads };