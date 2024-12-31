import CommonForm from "@/components/common/Form";
import { Link } from "react-router-dom";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  email: "",
  password: "",
};
const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    console.log(formData);
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        //send logged in success notification toast
        console.log("sending toast...");
        toast({
          title: data?.payload?.message,
        });
        //redirect to to the dashboard of user/admin
      } else {
        toast({
          title: data?.payload?.success,
          variant: "destructive",
        });
      }
    });
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
