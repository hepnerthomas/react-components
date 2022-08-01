// TODO

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryitems={['steak', 'apples', 'chicken', 'udon noodles', 'pie']}/>
  </div>
);


class GroceryList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul>
          <GroceryListItem item={this.props.groceryitems[0]}/>
          <GroceryListItem item={this.props.groceryitems[1]}/>
          <GroceryListItem item={this.props.groceryitems[2]}/>
          <GroceryListItem item={this.props.groceryitems[3]}/>
          <GroceryListItem item={this.props.groceryitems[4]}/>
        {/* {props.groceryitems.map(groceryItem =>
          <GroceryListItem item={groceryItem} />
        )} */}
        </ul>
      </div>
    )
  }

}


class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      // font-weight: this.state.done ? 'bold' : 'normal'
      fontWeight: this.state.done ? 'bold' : 'normal',
      // textDecoration: this.state.done ? 'line-through' : 'none'
      // textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }

}

// var GroceryListItem = (props) => (
//   <li>{this.props.item}</li>
// );

class Apples extends React.Component {

  constructor() {
    super()
    this.state = 'apples';
  }

  render() {
    return (
      <li>{this.state}</li>
    )
  }

}


class Noodles extends React.Component {

  constructor() {
    super()
    this.state = 'udon noodles';
  }

  render() {
    return (
      <li>{this.state}</li>
    )
  }

}


// ReactDOM.render(<GroceryList />, document.getElementById("app"));
ReactDOM.render(<App/>, document.getElementById('app'))