import CommonForm from "@/components/common/Form";
import { Link } from "react-router-dom";
import { loginFormControls } from "@/config";
import { useState } from "react";
const initialState = {
  email: "",
  password: "",
};
const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);

  function onSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="mx-auto w-full  max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter text-foreground">
          Sign In
        </h1>
        <p className="mt-2">
          Don`t have an Account?
          <Link
            to="/auth/register"
            className="text-primary font-medium ml-2 hover:underline"
          >
            {" "}
            Sign Up
          </Link>
        </p>
          </div>
          <CommonForm
              formControls={loginFormControls}
              buttontext={"Sign Up"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}

          />
    </div>
  );
};

export default AuthLogin;
