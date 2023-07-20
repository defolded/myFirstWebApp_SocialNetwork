import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": process.env.REACT_APP_SECRET_KEY },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 0) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(profileId = 2) {
    return instance.get(`profile/${profileId}`).then((res) => res.data);
  },

  getStatus(profileId) {
    return instance.get(`profile/status/${profileId}`);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};

export const authAPI = {
  getAuthUserData() {
    return instance.get(`auth/me`).then((res) => res.data);
  },
};
