import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Register() {
    return (
        <div className="container">
            <h1 className="fashion_taital">Register</h1>
            <div className="fashion_section_2">
                <div className="col-lg-12 col-sm-4">
                    <div className="box_main">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="login_text">Email</Form.Label>
                                <Form.Control type="email" placeholder="janedoe@gmail.com" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="login_text">Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formRepeatPassword">
                                <Form.Label className="login_text">Confirm Password</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                        <div className="btn_main">
                            <div className="seemore_bt">
                                <a href="#">Already have an account?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

