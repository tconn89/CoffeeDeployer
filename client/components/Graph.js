import React, {Component} from 'react';
import { connect } from 'react-redux';
import createCharts from '../coffee-data'
import { getLastDays } from '../redux/reducers/coffee-api';
import store from '../redux/store';
import ReactLoading from 'react-loading';

class Graph extends Component {
  constructor(props){
    super(props);
    this.config = {
      id: props.id
    }
  }
  render() {
    return (
          <div className="charts-container">
            <div className="charts-panel">
              { this.props.coffeeAPI.serverResponse
                  ? null
                  : <ReactLoading className='loader' delay={0}
                                  type='bubbles'  color='green'
                                  height='335px' width='175px' /> }
              <canvas id={this.props.id}></canvas></div></div>
    )
  }

  shouldComponentUpdate(prevProps){
    return true;
  }
  componentWillReceiveProps(nextProps){
    console.log("Graph Props")
    console.log(nextProps)
    if(nextProps.coffeeAPI){
      this.config.data = nextProps.coffeeAPI.days.coffeeCups;
      this.config.user = nextProps.coffeeAPI.days.user;
      createCharts(this.config)
    }
  }
  // componentDidUpdate(){
  //   console.log(this.props)
  //   if(this.props.coffee)
  //     console.log(this.props.coffee.coffeeCups)
  // }
  componentDidMount() {
    console.log("Graph Mounted")
    getLastDays(this.props.user_id)(store.dispatch)
  }
}

const mapState = ({coffeeAPI}) => ({coffeeAPI});
const mapDispatch = { getLastDays }
export default connect(mapState, mapDispatch)(Graph);