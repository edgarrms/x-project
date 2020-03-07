import React from 'react';

import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App__Aside"></div>

            <div className="App__Form">

                <div className="PageSwitcher">

                    <a href="#" className="PageSwitcher__Item">Sign In</a>

                    <a href="#" className="PageWitcher__Item PageWitcher__Item--Active">Sign Up</a>

                </div>

                <div className="FormTittle">
                    <a href="#" className="FormTittle__Link">Sign In</a> or <a href="#"
                        className="FormTittle__Link FormTittle__Link--Active">Sign Up</a>
                </div>

                <div className="FormCenter">
                    <form className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="name">Full Name</label>
                            <input type="text" id="name" className="FormField__input" placeholder="Enter your full namwe" name="name" />
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__input" placeholder="Enter your full password" name="password" />
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">Email</label>
                            <input type="email" id="email" className="FormField__input" placeholder="Enter your Email" name="password" />
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
}

export default App;