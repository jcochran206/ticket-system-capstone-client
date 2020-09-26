import React from 'react';
import ValidationError from '../validationError/validationError';
import config from '../../config';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfUsers: [],
            username: {
                value: '',
                touched: true
            },
            password: {
                value: '',
                touched: false
            }
        }
    }

    componentDidMount() {
        let url = `${config.API_ENDPOINT}/users`;
        console.log(url)
        fetch(url)
          // if the api returns data ...
          .then((res) => {
            if (!res.ok) {
              throw new Error("Something went wrong, please try again later.");
            }
            // ... convert it to json
            return res.json();
          })
          // use the json api output
          .then((data) => {
              console.log(data);
            //check if there is meaningful data
            
            this.setState({
              listOfUsers: data,
            });
          })
          .catch((err) => {
            console.error(err);
            // this.setState({
            //     error: err.message
            // })
          });
      }


    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;

        this.props.history.push('/tickets');
        console.log('name: ', username.value)
        console.log('password: ', password.value)
    }

    updateUserName(username) {
        this.setState({ username: { value: username, touched: true } });
    }

    updatePassword(password) {
        this.setState({ password: { value: password } });
    }

    // validate inputs here
    // validateUserName() {
    //     const name = this.state.username.value.trim();
    //     if (name.length === 0) {
    //         return 'Name is required';
    //     } else if (name.length < 3) {
    //         return 'Name must be at least 3 characters long';
    //     }
    // }

    //vaildate passwords here
    // validatePassword() {
    //     const password = this.state.password.value.trim();
    //     if (password.length === 0) {
    //         return 'Password is required';
    //     } else if (password.length < 6 || password.length > 72) {
    //         return 'Password must be between 6 and 72 characters long';
    //     } else if (!password.match(/[0-9]/)) {
    //         return 'Password must contain at least one number';
    //     }
    // }


    render() {
        //const usernameError = this.validateUserName();
        //const passwordError = this.validatePassword();

        return (
            <form method="post" action="/login" className="login" onSubmit={e => this.handleSubmit(e)}>
                <h2>Login</h2>
                <div className="login_hint">* required field</div>

                <div className="form-group">
                    <label htmlFor="username">Username *</label>
                    <input type="text" className="login__control"
                        username="username" id="username" onChange={e => this.updateUserName(e.target.value)} defaultValue="place username here" />
                    {/*this.state.username.touched && <ValidationError message={usernameError} />*/}

                </div>

                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input type="password" className="login__control"
                        name="password" id="password" onChange={e => this.updatePassword(e.target.value)} />
                    <div className="login__hint">6 to 72 characters, must include a number</div>
                    {/* {this.state.password.touched && (
                        <ValidationError message={passwordError} />
                    )} */}
                </div>

                <div className="login__button__group">
                    <button type="reset" className="login__button">
                        Cancel
                </button>
                    <button type="submit"
                        className="login__button"
                        // disabled={
                        //     // this.validateUserName() ||
                        //     // this.validatePassword()
                        // }
                    >
                        Submit
                </button>
                </div>
            </form>
        )
    }
}

export default Login;