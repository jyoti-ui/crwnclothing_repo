import React from "react";
import "./SignIn.scss";
import FormInput from "../forminput/FormInput";
import CustomButton from "../custombutton/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: '',
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password: ''});
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name] : value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    
                    <FormInput
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required 
                    />

                    <div className="buttons">
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google 
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;