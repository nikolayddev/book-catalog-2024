import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';


export default function Register() {
    return (
        <div className="login_container">
            <h1 className="login_title_text">Register</h1>
            <div className="fashion_section_2">
                <div className="col-lg-12 col-sm-4">
                    <div className="box_main">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="login_form_text">Email</Form.Label>
                                <Form.Control type="email" placeholder="janedoe@gmail.com" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="login_form_text">Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formRepeatPassword">
                                <Form.Label className="login_form_text">Confirm Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

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

