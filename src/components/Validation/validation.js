import * as yup from "yup";

const loginValidator = yup.object().shape({
  mobile: yup
    .string()
    .required("Mobile Number is required")
    .matches(/^[0-9]{10}$/, "Number must be exactly 10 digits"),
});

const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .typeError("Otp must be a number")
    .required("Otp is required")
    .test("len", "otp must be 4 digit", (val) => val.toString().length === 4),
});

const newsLetterSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});



export {
    loginValidator,
  otpSchema,
  newsLetterSchema,
};
