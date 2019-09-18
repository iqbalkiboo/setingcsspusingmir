import React, { Component } from "react"
// import "../../Style/Reset.css"
// import "../../Style/cafaeble.main-1.0.css"
// import "../../Style/cafaeble.index-1.0.css"
// import "../../Style/cafaeble.register-1.0.css"


class Register extends Component {
    render(){
        return(
            <div>
                <div className="pad-top"></div>

                <section className="sec-reg">
                    <div className="sec-tit">Register</div>
                    <ul className="the-form">
                        <li>
                            <div class="the-text">Please fill the form below with truth information to register as Cafæble member.</div>
                        </li>
                        <li class="use-icon">
                            <i class="the-icon icofont-user"></i>
                            <label>Full Name</label>
                            <input type="text" name="name" placeholder="Full Name" />
                        </li>
                        <li class="lay-2 use-icon">
                            <i class="the-icon icofont-email"></i>
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email" />
                        </li>
                        <li class="lay-2 use-icon">
                            <i class="the-icon icofont-iphone"></i>
                            <label>Phone Number</label>
                            <input type="text" name="phone" placeholder="Phone Number" />
                        </li>
                        <li class="lay-2 use-icon">
                            <i class="the-icon icofont-key"></i>
                            <label>Password</label>
                            <input type="password" name="pass" placeholder="Password" />
                        </li>
                        <li class="lay-2 use-icon">
                            <i class="the-icon icofont-key"></i>
                            <label>Repeat Password</label>
                            <input type="password" name="repass" placeholder="Repeat Password" />
                        </li>
                        <li>
                            <div class="the-text">By clicking "<strong>Register</strong>" button below you are agreeing with our <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.</div>
                        </li>
                        <li>
                            <button>Register <i class="icofont-plus-circle"></i></button>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Register;