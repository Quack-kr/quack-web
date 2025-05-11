import api from "./axiosInstance";

interface SocialSignupRequest {
  id_token: string;
  provider: "kakao" | "google" | "apple";
}

export const socialSignup = async ({ id_token, provider }: SocialSignupRequest) => {
  const response = await api.post("/auth/signup", {
    id_token,
    provider,
  }, {
    withCredentials: true,
  });

  return response.data; 
};

export const socialSignin = async ({ id_token, provider }: SocialSignupRequest) => {
  const response = await api.post("/auth/signin", {
    id_token,
    provider,
  }, {
    withCredentials: true,
  });

  return response.data; 
};