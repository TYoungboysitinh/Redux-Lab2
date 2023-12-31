import React, { Component } from 'react';
import {connect} from 'react-redux';

class WelcomeRedux extends Component {
  render() {
    return (
      <div>
        <h2>
            Xin chào,<span className="btn btn-danger">{this.props.userName}</span>
        </h2>
            Chào mừng bạn đến với khóa học, 
            <span className="btn btn-success">{this.props.courseName}</span> tại Devmaster Acedamy
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
    return{
        userName: state.userName,
        courseName:state.courseName,
    };
};
export default connect(mapStateToProps, null)(WelcomeRedux);