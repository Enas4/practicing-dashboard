import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get } from "../../lib/http-client";
import { login, setState } from "../../store/User/UserSlice";
import "./Login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onChange" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const { username, password } = getValues();
    if (username === "enas" && password === "12345A1") {
      dispatch(setState("pending"));
      try {
        const response = await get(
          "https://jsonplaceholder.typicode.com/users/4"
        );
        dispatch(login(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("username or password are not correct!");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <span>Enter username</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Enter password</span>}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
