import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";

const Sidebar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onSubmit", reValidateMode: "onChange" });

  const navigate = useNavigate();
  const onSubmit = (data) => navigate("/");

  return (
    <div className="signup">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" {...register("firstname", { required: true })} />
          {errors.firstname && <span>Enter first name</span>}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="lastname"
            {...register("lastname", { required: true })}
          />
          {errors.lastname && <span>Enter last name</span>}
        </div>
        <div>
          {" "}
          <label>Username</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <span>Enter username</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>Enter email</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required:
                "password must contain 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number",
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirm_password", {
              required: true,
              validate: (value) => {
                const { password } = getValues();
                if (password !== value) {
                  return "Pssword do not matched";
                }
              },
            })}
          />
          {errors.confirm_password && (
            <span>{errors.confirm_password.message}</span>
          )}
        </div>

        <div>
          {" "}
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
