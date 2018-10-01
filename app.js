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
    this.state = {
      done: false,
      hover: false
    };
  }

  toggleHover() {

    this.setState({
      done: this.state.done,
      hover: !this.state.hover
    });
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }

    // I don't fully understand why we're using bind below

    return (
      <li style={style} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
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
