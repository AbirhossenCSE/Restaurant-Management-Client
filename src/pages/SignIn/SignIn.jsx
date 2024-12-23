import React from 'react';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { signInUser } = useAuth();

    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // signin user
        signInUser(email, password)
            .then(result => {
                console.log("signin", result.user.email);
                // const user = { email: email }
                // axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data);
                //     })
                // // navigate(from);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    {/* <Lottie animationData={signinLottile}></Lottie> */}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mx-auto mt-5 text-5xl font-bold">Sign-In now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </div>
    );
};

export default SignIn;