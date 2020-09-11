import React from 'react';
import ReactDom from 'react-dom';


class Login extends React.Component{
    constructor(props){
        super(props);
    this.state = {email: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({email: e.target.value, password: e.target.value2});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.email.length === 0) {
            return 'put in email';
        }
    }
    
    return() {
        return (
            <div className="signupform">
                <h3>Login to your account</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="sign-up">
                        Email: 
                    </label>
                    <input
                        id="sign-up"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <label htmlFor="password">
                        Password: 
                    </label>
                    <input
                        id="password"
                        onChange={this.handleChange}
                        value2={this.state.password}
                    />
                    <button>
                        Submit
                    </button>



                </form>

            </div>
        )
    }
}

export default Login;