import axios from "axios";

const baseURL = "https://fe-task-api.mainstack.io";

export const fetchTransactions = () => {
  return axios.get(`${baseURL}/transactions`);
};

export const fetchWallet = () => {
  return axios.get(`${baseURL}/wallet`);
};
export const fetchUser = () => {
  return axios.get(`${baseURL}/user`);
};
