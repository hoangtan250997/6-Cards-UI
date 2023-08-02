import { request } from "../config/http-common";
class LoginService {
  create(data) {
    return request({
      url: `/auth/signin`,
      method: "POST",
      data,
    });
  }
}
const loginService = new LoginService();
export default loginService;
