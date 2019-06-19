import React from 'react';
import { connect } from 'react-redux';
import { testAction } from './actions';

export class HomeComponent extends React.Component {

    render(){
        const { token } = this.props.login;
        return (<React.Fragment>
            <h1>Home Component</h1>
            {!token? 
            <button onClick={this.props.onComponentMount}>login</button>:
            'login success'
            }
        </React.Fragment>);
    }
}

const mapStateToProps = state => {
    return {...state};
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentMount : () => dispatch(testAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);
