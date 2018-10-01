var Fruit = () => (
  <li>Fruit COOL!</li>
);

var Veggies = () => (
  <li>Veggies YO!</li>
);

// var GroceryListItem = (props) => { 

//   var onListItemClick = (event) => {
//     console.log('clicked a list item');
//   };

//   return <li onClick={onListItemClick}>{props.item}</li>;
// };

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.item}</li>;
  }
}

var GroceryList = (props) => {
  return (
    <ul>
     {props.listItems.map((item) => <GroceryListItem item={item} />)}
    </ul>
  );
}

var myList = ['tisk', 'task', 'adding more', 'I still work'];
ReactDOM.render(<GroceryList listItems={myList} />, document.getElementById('app'));

// TODO
