import { ApiStatus, userDetail, VideoDetailInterface } from "../../stores/type";
import { fetchApi, fetchLogin } from "../../utils/ApiUtils";

class ApiService {
  async getGamingDataDetails(): Promise<any> {
    const response = await fetchApi("https://apis.ccbp.in/videos/gaming");
    return response.json();
  }
  async getTrendingData(): Promise<any> {
    const response = await fetchApi("https://apis.ccbp.in/videos/trending");
    return response.json();
  }
  async getHomeData(homeSearch: string): Promise<any> {
    const response = await fetchApi(
      "https://apis.ccbp.in/videos/all?search=" + homeSearch
    );
    return response.json();
  }
  async fetchToken(userDetails: userDetail): Promise<any> {
    const response = await fetchLogin(
      "https://apis.ccbp.in/login",
      userDetails
    );
    return response.json();
  }
  async getIndvidiualVideoData(id: string): Promise<any> {
    const response = await fetchApi(`https://apis.ccbp.in/videos/${id}`);
    return response.json();
  }
}
export default ApiService;
