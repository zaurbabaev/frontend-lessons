import axiosInstance from "@/api/axios";

export const loginRequest = async (username, password) => {
  try {
    const loginResponse = await axiosInstance.post("/auth/login", {
      username,
      password,
      expiresInMins: 60,
    });

    const { id, accessToken } = loginResponse.data;

    const userResponse = await axiosInstance.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return userResponse.data;
  } catch (error) {
    console.error("Login xətası:", error);
    throw error;
  }
};
