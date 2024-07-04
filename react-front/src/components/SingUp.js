import React from 'react';
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios"

function SingUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    const onSubmit = (data) => {
        axios.post('http://127.0.0.1:8000/api/user/',
            {
                first_name: data.first_name,
                last_name: data.last_name,
                login: data.login,
                password: data.password,
                email: data.email,
                birthday: data.birthday,
            }
        )
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <input className="input100" type="text" placeholder="Enter first name"
                        {...register("first_name", {
                            minLength: { value: 3, message: "Min first name is 3 characters" },
                            required: { value: true, message: "First name is required" }
                        })} />
                    <Form.Text style={{ color: '#ce0000', float: 'right' }}>
                        {errors.first_name?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <input className="input100" type="text" placeholder="Enter last name"
                        {...register("last_name", {
                            minLength: { value: 3, message: "Min last name is 3 characters" },
                            required: { value: true, message: "Last name is required" }
                        })} />
                    <Form.Text style={{ color: '#ce0000', float: 'right' }}>
                        {errors.last_name?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <input className="input100" type="text" placeholder="Enter login"
                        {...register("login", {
                            minLength: { value: 3, message: "Min login is 3 characters" },
                            required: { value: true, message: "Login is required" }
                        })} />
                    <Form.Text style={{ color: '#ce0000', float: 'right' }}>
                        {errors.login?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <input className="input100" type="text" placeholder="Enter password"
                        {...register("password", {
                            minLength: { value: 3, message: "Min password is 3 characters" },
                            required: { value: true, message: "Password is required" }
                        })} />
                    <Form.Text style={{ color: '#ce0000', float: 'right' }}>
                        {errors.password?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <input className="input100" type="text" placeholder="Enter email"
                        {...register("email", {
                            minLength: { value: 3, message: "Min email is 3 characters" }
                        })} />
                    <Form.Text style={{ color: '#ce0000', float: 'right' }}>
                        {errors.email?.message}
                    </Form.Text>
                </Form.Group>

                    <input className="input100" type="date" placeholder="Enter email"
                        {...register("birthday")}/>


                <Button type="submit">Sing Up</Button>

            </Form>
        </div>
    );
}

export default SingUp;
