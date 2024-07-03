import React from 'react';
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    const onSubmit = (data) => {
        
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <input className="input100" type="text" placeholder="Enter login"
                        {...register("player", {
                            minLength: { value: 3, message: "Min is 3 characters" },
                            required: { value: true, message: "Login is required" }
                        })} />
                    <Form.Text style={{ color: '#ce0000', float: 'right' }}>
                        {errors.player?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <input className="input100" type="text" placeholder="Enter password"
                        {...register("password", {
                            minLength: { value: 3, message: "Password is 3 characters" },
                            required: { value: true, message: "Password is required" }
                        })} />
                    <Form.Text style={{ color: '#ce0000', float: 'right' }}>
                        {errors.password?.message}
                    </Form.Text>
                </Form.Group>

                <Button type="submit">Sing In</Button>

            </Form>
            <br/>
            <NavLink to="/singup">Sing Up</NavLink>
        </div>
    );
}


export default Home;
