import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';


const initialValues = { email: '', password: '' };

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate();

    const submitCallback = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, submitCallback);

    return (
        <div className='login_container'>
            <h1 className="login_title_text">Login</h1>
            <div className="fashion_section_2">
                <div className="col-lg-12 col-sm-4">
                    <div className="box_main">
                        <Form onSubmit={submitHandler}>
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

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="login_form_text">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <div className="btn_main">
                            <div className="seemore_bt">
                                <Link to="/register">Don't have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

