import { useFormik } from "formik";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (

        <div className="login-container">
            <form className="login-form" onSubmit={formik.handleSubmit}>
                <label htmlFor="email" className="login-label">Email Address</label>
                <input
                    className="login-input"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="password" className="login-label">Password</label>
                <input
                    className="login-input"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>

    )
}

export default Login;
