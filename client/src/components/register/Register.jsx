import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Register.module.css';

import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: '',
    password: '',
    confirmPassword: ''
};

export default function Register() {
    const register = useRegister();
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const submitCallback = async ({ email, password, confirmPassword, firstName, lastName, profilePicture}) => {
        try {
            if (email === ''
                || password === ''
                || firstName === ''
                || lastName === ''
                || profilePicture === ''
                || confirmPassword === '') {
                throw new Error('All fields are required!');
            }

            if (password.length < 4) {
                throw new Error('Password must be at least 4 characters long');
            }

            if (password !== confirmPassword) {
                throw new Error('Passwords don\'t match');
            }

            await register(email, password, firstName, lastName, profilePicture);
            navigate('/');
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, submitCallback);

    return (
        <div className="login_container">
            <h1 className="login_title_text">Register</h1>
            <div className="fashion_section_2">
                <div className="col-lg-12 col-sm-4">
                    <div className="box_main">
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label className="login_form_text">First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={changeHandler}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label className="login_form_text">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={changeHandler}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="login_form_text">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="janedoe@gmail.com"
                                    name="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicProfilePic">
                                <Form.Label className="login_form_text">Profile Picture</Form.Label>
                                <Form.Control
                                    type="url"
                                    placeholder=""
                                    name="profilePicture"
                                    value={values.profilePicture}
                                    onChange={changeHandler}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="login_form_text">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formRepeatPassword">
                                <Form.Label className="login_form_text">Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={changeHandler}
                                />
                            </Form.Group>

                            {error &&
                                <div>
                                    <h1 className={styles.err_class}>{error}</h1>
                                </div>
                            }

                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                        <div className="btn_main">
                            <div className="seemore_bt">
                                <Link to="/login">Already have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

