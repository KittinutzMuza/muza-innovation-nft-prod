import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_HOST,
});
export const mint = async ({
  walletAddress = "",
  quiz = {},
  innovationType = "",
}) => {
  return await instance.post("/tech-sauce/mint", {
    walletAddress,
    quiz,
    innovationType,
  });
};
export const verify = async ({ walletAddress = "" }) => {
  return await instance.get(
    `/tech-sauce/verify?walletAddress=${walletAddress}`
  );
};
