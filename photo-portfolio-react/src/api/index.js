import axios from "axios";

export default {
  user: {
    login: credentials =>
      // 'then(res => res.data.user)' just resolves the promise to the needed 'user'
      axios.post("/api/auth/login", credentials).then(res => res.data.user),
    register: credentials =>
      axios.post("/api/auth/register", credentials).then(res => res.data.user),
    resetPassword: credentials =>
      axios
        .post("/api/auth/reset-password", credentials)
        .then(res => res.data.resetData)
  }
};
