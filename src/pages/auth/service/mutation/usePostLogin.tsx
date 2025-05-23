import { useMutation } from "@tanstack/react-query";
import { instance } from "@/config/AxiosInstance";

interface IData {
  username?: string;
  password?: string;
}

export const usePostLogin = () => {
  return useMutation({
    mutationFn: (data: IData) =>
      instance.post("/auth/login", data).then((res) => res.data),
  });
};
