import React from "react";
import Card from "../card";
export default function SignUp() {
    return (

        <div>

            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="name">First Name</label>
                    <input type="Name" className="form-control" id="Name" aria-describedby="Name" />
                    <small id="Name" className="form-text text-muted">Please type first name.</small>
                </div>
                <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="lastName" className="form-control" id="lastName" aria-describedby="lastName" />
                    <small id="lastName" className="form-text text-muted">Please type last name.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>

    )
}