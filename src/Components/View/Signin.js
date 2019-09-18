import React, { Component } from "react"
// import "../../Style/Reset.css"
// import "../../Style/cafaeble.main-1.0.css"
// import "../../Style/cafaeble.index-1.0.css"
// import "../../Style/cafaeble.sign-1.0.css"


// function Signin ({ match }) {
//     return(
//       <div>
//         <h2>Signin</h2>
  
//         <ul>
//           <li>
//             <Link to={`${match.url}/components`}>Components</Link>
//           </li>
//           <li>
//             <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//           </li>
//         </ul>
  
//         <Route path={`${match.path}/:id`} component={Signin} />
//         <Route
//           exact
//           path={match.path}
//           render={() => <h3>Please select a topic.</h3>}
//         />
//       </div>
//     )
// }

class Signin extends Component {
    render () {
        return (
            <div>
                <div className="pad-top"></div>
                <section className="sec-sign">
                    <div className="sec-tit">Sign In</div>
                    <ul class="the-form">
                        <li>
                            <div class="the-text">Sign in with your email and password.</div>
                        </li>
                        <li class="lay-2 use-icon">
                            <i class="the-icon fa fa-email"></i>
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email"/>
                        </li>
                        <li class="lay-2 use-icon">
                            <i class="the-icon fa fa-key"></i>
                            <label>Password</label>
                            <input type="password" name="pass" placeholder="Password" />
                        </li>
                        <li class="lay-2">
                            <a href="#" class="forgot-pass">Forgot Password?</a>
                        </li>
                        <li class="lay-2">
                            <a href="#" class="switch">Keep Sign In <span></span></a>
                        </li>
                        <li>
                            <button>Sign In <i class="icofont-sign-in"></i></button>
                        </li>
                    </ul>
                </section>
                <section class="sec-pass" style="display: none;">
                    <div class="sec-tit">Forgot Password</div>
                        <ul class="the-form">
                            <li>
                                <div class="the-text">Please fill your email and we'll send you link for update the password.</div>
                            </li>
                            <li class="use-icon">
                                <i class="the-icon icofont-email"></i>
                                <label>Email</label>
                                <input type="text" name="email" placeholder="Email" />
                            </li>
                            <li>
                                <a href="#" class="forgot-pass for-sign"><i class="icofont-arrow-left"></i> Back to Sign In</a>
                            </li>
                            <li>
                                <button>Send Email <i class="icofont-sign-in"></i></button>
                            </li>
                        </ul>
                </section>
            </div>
        )
    }
}

export default Signin;