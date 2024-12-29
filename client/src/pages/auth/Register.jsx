import CommonForm from "@/components/common/Form";
import { Link, useNavigate } from "react-router-dom";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";

const initialState = {
  username: "",
  email: "",
  password: "",
};
const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    let { email, password, userName } = formData;
    let data = {
      email,
      password,
      username: userName,
    };
    // dispatch(registerUser(formData));
    dispatch(registerUser(data)).then((res) => {
      if (res?.payload?.success) navigate("/auth/login");
    });
  }

  return (
    <div className="mx-auto w-full  max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-foreground">
          Create New Account
        </h1>
        <p className="mt-2">
          Already have an Account
          <Link
            to="/auth/login"
            className="text-primary font-medium ml-2 hover:underline"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttontext={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthRegister;
