import React from 'react';
import Filter from './Filter';
import FruitList from './FruitList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullList: [
          'Acai',
          'Aceola',
          'Apple',
          'Apricots',
          'Avocado',
          'Banana',
          'Blackberry',
          'Blueberries',
          'Camu Camu berry',
          'Cherries',
          'Coconut',
          'Cranberry',
          'Cucumber',
          'Currents',
          'Dates',
          'Durian',
          'Fig',
          'Goji berries',
          'Gooseberry',
          'Grapefruit',
          'Grapes',
          'Jackfruit',
          'Kiwi',
          'Kumquat',
          'Lemon',
          'Lime',
          'Lucuma',
          'Lychee',
          'Mango',
          'Mangosteen',
          'Melon',
          'Mulberry',
          'Nectarine',
          'Orange',
          'Papaya',
          'Passion Fruit',
          'Peach',
          'Pear',
          'Pineapple',
          'Plum',
          'Pomegranate',
          'Pomelo',
          'Prickly Pear',
          'Prunes',
          'Raspberries',
          'Strawberries',
          'Tangerine/Clementine',
          'Watermelon'
        ],
        filterValue: ''
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

handleFilterChange(e) {
  e.preventDefault();
  const filterValue = e.target.value;
  this.setState({
    filterValue
  })
}

  render() {
    const listCopy = Array.from(this.state.fullList);
    const filteredList = listCopy.filter(fruit => {
      return fruit.toLowerCase().includes(this.state.filterValue.toLowerCase())
    })
    return (
      <>
        <Filter onChange={this.handleFilterChange} value={this.state.filterValue} />
        <FruitList fruits={filteredList} />
      </>
    );
  }
}

export default App;
