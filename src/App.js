import React, { Component } from 'react'
import WelcomeRedux from './components/WelcomeRedux'
import { actChangeCourseName, actChangeUserName } from './actions'
import { connect } from 'react-redux'

class App extends Component {
  handleChangeUserName=(e)=>{
    this.props.changeUserName(e.target.value);
  }
  handleChangeCourseName=(e)=>{
    this.props.changeCourseName(e.target.value);
  }
  render() {
    return (
      <div className="container">
        <h1 className="mt-5">Welcome to Redux</h1>
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Change Username</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.handleChangeUserName} />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Change Coursename</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={this.handleChangeCourseName} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12"> 
            {/* Thêm component ở đây */}
          </div>
        </div>
        <WelcomeRedux />
      </div>
    )
  }
}
const mapDispathToProps=(dispatch)=>{
  return{
    changeUserName:(value)=>{
      dispatch(actChangeUserName(value));
    },
    changeCourseName:(value)=>{
      dispatch(actChangeCourseName(value));
    },
  }
}

export default connect(null,mapDispathToProps)(App);