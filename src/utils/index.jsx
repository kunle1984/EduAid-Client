import axios from "axios";
const productionUrl = "http://localhost:3000/api/v1/";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const nairaAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(price.toFixed(2));
  return nairaAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

//URLS
export const signupUrl = "auth/signup/";
export const verifyOtpUrl = "auth/verify-otp/";
export const resendOtpUrl = "auth/resend-otp/";
export const signinUrl = "auth/login/";
export const forgotPasswordUrl = "auth/forgot-password/";
export const resetPasswordUrl = "auth/reset-password/";
export const profileUrl = "auth/profile/";
