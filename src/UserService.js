import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

class UserService {
  updateUser(id, data) {
    return axios.put(`${API_URL}/users/${id}`, data);
  }
}

export default new UserService();
