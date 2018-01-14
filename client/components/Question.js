import React, {Component} from 'react';
import { Control } from 'react-redux-form';
import Answer from './Answer';
//import SimpleButton from './SimpleButton';

class Question extends Component {
  constructor(props){
    super(props);
    this.radioStyle = { zIndex: 1,
                        height: '20px', width: '20px',
                        opacity: 1, display: 'inline-block'}
    this.display = this.props.current ? 'hidden' : 'block'
  }
  divStyle(color = 'grey', height = '70px'){
    return { padding: '10px',
              background: color,
              height: height,
              maxWidth: '400px',
              marginBottom: '10px'} }
  isCurrent(){
    return this.props.current == this.props.id ? 'block' : 'none'
  }

  render() {
    return (
    <div style={{display: this.isCurrent() }}>
      <label > { this.props.details.name } </label>
        <div style={this.divStyle()}>
          <Answer details= { this.props.details.answer } />
        </div>
    </div>

    )
  }
  componentDidMount(){
  }
}

export default Question;