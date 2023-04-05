import { ApiStatus, VideoDetailInterface } from "../../stores/type";
import { fetchApi } from "../../utils/ApiUtils";

class ApiService {
  getGamingDataDetails(): Promise<any> {
    return fetchApi("https://apis.ccbp.in/videos/gaming");
  }
}
export default ApiService;
