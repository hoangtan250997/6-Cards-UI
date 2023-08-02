import { request } from "../config/http-common";
class SpendingService {
  get(data) {
    return request({
      url: `/auth/signin`,
      method: "GET",
      data,
    });
  }
}
const spendingService = new SpendingService();
export default SpendingService;
