import { FormikErrors } from "formik";
import { UserResponseError } from "../types/graphql";

const setFormikErrors = (
  errorFunc: (errors: FormikErrors<{ username: string, email: string, password: string }>) => void,
  errors: UserResponseError,
): void => {
  let formikErrors: { username: string, email: string, password: string } = {
    email: errors.emailError?.pop() || "",
    password: errors.passError?.pop() || "",
    username: errors.userError?.pop() || "",
  };
  errorFunc(formikErrors);
};

export default setFormikErrors;