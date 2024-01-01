import axios from "axios";
import { backendBase } from "./commonObjects";
const axiosClient = axios.create({
  baseURL: `${backendBase}`,
});
axiosClient.interceptors.request.use((config) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMzE1MjdiMzRjMDY5OTUxZDE3OGZkMjNlOTIxNGJlM2MyNzUwNmY3MGE3NDU5YTc5YzI2MTU1YzQyMjgxMzU4ODM3OTgzMjZhY2M3YzYyM2IiLCJpYXQiOjE2OTkxOTU4MDYuNjM4MDgsIm5iZiI6MTY5OTE5NTgwNi42MzgwODMsImV4cCI6MTczMDgxODIwNi42MzEzNjgsInN1YiI6IjE4MCIsInNjb3BlcyI6W119.DTCMrfJwG9jil-7d2f6ihogpxphqPidO4iTzA912fxDngQkHTHBAsU_xMfgDW_fCL4niOFX5h7KgkdqYbMwdPP0AvAcXsj_LyIc0CXYj1pXXxCR-CCo0H2qeekjeOFsIBSPwDKQze4_Z6bX6K8J6l_LHe_fev3uiGh6l8lnyt8xojofpM30zW-q-piL9xKRQQ5-B7GKvZnx-oJztvIzUMQz_bBJEllJ2UlchGue64H7tCWAGvOhgJKbRIqGrOR3ytyXqowaSgoNdOxGWPbmOgvrc7ro3wpE5Q9Xw6sTpqLdZzRSsVJaMjxzUDpQ-cJY2WGFFM0zLjrFQ3n3Ef7d0KXpGQtI-s5QZ1b7p6Aw1lghpUEUoVVmvhXUh3LQLXa8QYbvOkCTNdr-6WsxHVDZcbrTuITMIo1dsfOvDDd2vJgBKoSYIb3pv357rqulx7PETSYy1dIPB1s-MYoLFo-0WDwqoBm9Hs7S7ulXS5lHoxSPNdnuo3CW_WyCRybG4J6AVV1AsiDbkr1l0U7skAZvVufQMDRh7778U-fe5MpfZJCrkgX1B9hFDNPeeUA5GXzq2mLQMRu94FXxHwua3uFYsUHNnAclGAs-u2D4KhkYl5kgJ7Fivl964lZyB9curpqcm_ivWia-XZ1XipgInCe9CZHsyrtNBVbOYQbI891VhYI8" ||
    localStorage.getItem("ACCESS_TOKEN");
  //config.headers.Authorization = `Bearer ${token}`;
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
      if (response.status === 401) {
        localStorage.removeItem("ACCESS_TOKEN");
      }
    } catch (e) {
      console.error(e);
    }
    throw error;
  }
);
export default axiosClient;
