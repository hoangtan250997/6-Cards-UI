import { request } from "../config/Http-common";
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
