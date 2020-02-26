import cheeseData from '../helpers/data/cheeseData.js';
import util from '../helpers/util.js';

const selectCheese = (e) => {
    const cheeseId = e.target.id;
    cheeseData.setSelectedCheese(cheeseId);
  }
  const addCheeseEvent = (e) => {
    const cheeseButton = document.getElementsByClassName('cheese-button');
    for(let i=0; i< cheeseButton.length; i++){
      cheeseButton[i].addEventListener('click', selectCheese);
    }
  }
  
const makeCheeseButtons = () => {
    const cheeses  = cheeseData.getCheese();
    let domString = '';
  
    cheeses.forEach((cheese) => {
      domString += `<button type="button" class="btn btn-warning cheese-button" id="${cheese.id}">${cheese.type}</button>`;
    });
    util.printToDom('cheese-container', domString);
    addCheeseEvent();
   
  };

  
export default { makeCheeseButtons };