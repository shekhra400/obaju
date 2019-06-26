import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from './actions';
import { toJS } from '../../hoc/toJS';
import { createSelector, createStructuredSelector } from 'reselect';
import { selectLoginToken, selectisAuthenticated } from './loginSelector';
// import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class HomeComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    onInputChange = e => {
        this.setState({[e.target.name]:e.target.value});
    }

    onLoginSubmit = e => {
        console.log('onsubmit')
        e.preventDefault();
        const { email, password } = this.state;
        this.props.loginSubmit({email, password});
    }

    render(){
        // console.log('this.props',this.props);
        const { isAutherticated } = this.props;
        if(isAutherticated){
            return <Redirect to='/dashboard'/>
        }
        return (<React.Fragment>
            {/* <h1>Home Component</h1>
             {!token? 
            <button onClick={this.props.loginSubmit}>login</button>:
            'login success'
            }  */}

            <div id="all">
                <div id="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li aria-current="page" class="breadcrumb-item active">New account / Sign in</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="col-lg-6">
                            <div class="box">
                                <h1>New account</h1>
                                <p class="lead">Not our registered customer yet?</p>
                                <p>With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                                <p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                                {/* <hr> */}
                                <form action="customer-orders.html" method="post">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input id="name" type="text" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input name="email" value={this.state.email} id="email" onChange={this.onInputChange} type="text" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input name="password" value={this.state.password} id="password" onChange={this.onInputChange}  type="password" class="form-control" />
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary"><i class="fa fa-user-md"></i> Register</button>
                                    </div>
                                </form>
                            </div>
                            </div> 
                            <div class="col-lg-6">
                            <div class="box">
                                <h1>Login</h1>
                                <p class="lead">Already our customer?</p>
                                <p class="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                {/* <hr> */}
                                <form onSubmit={this.onLoginSubmit}>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input name="email" value={this.state.email} onChange={this.onInputChange} id="email" type="text" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input name="password" value={this.state.password} onChange={this.onInputChange} id="password" type="password" class="form-control" />
                                    </div>
                                    <div class="text-center">
                                        <button  type="submit" class="btn btn-primary"><i class="fa fa-sign-in"></i> Log in</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </React.Fragment>);
    }
}

HomeComponent.propTypes = {
    loginSubmit: PropTypes.func,
    isFetching: PropTypes.bool,
    isAutherticated:PropTypes.bool,
  };
  
  HomeComponent.defaultProps = {
    // resetOrderConfirmationError: () => {},
  };

const mapStateToProps = createStructuredSelector({
        token: selectLoginToken(),
        isAutherticated: selectisAuthenticated()
    });



const mapDispatchToProps = dispatch => {
    return {
        loginSubmit : (credentials) => dispatch(loginAction(credentials))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(toJS(HomeComponent));
