import { Link } from "react-router-dom";
import login from '../../assets/login page/stanley-dai-73OZYNjVoNI-unsplash.jpg'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result =>{
            const loggedUser = result.loggedUser;
            console.log(loggedUser);
        })
      };

    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center mb-5 text-slate-600">Login now!</h1>
      <img src={login} alt="" />
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-7">
      <form onSubmit={handleSubmit(onSubmit)}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true })} placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input type="submit" className="btn bg-[#ee5253] border-0 text-white" value="Login"/>
        </div>
        <div className="mt-2">
            <h2>New to here ? please <Link to="/register"><span className="font-bold text-[#ee5253] underline">REGISTER</span></Link></h2>
        </div>
        </form> 
    </div>
  </div>
</div>
    );
};

export default Login;