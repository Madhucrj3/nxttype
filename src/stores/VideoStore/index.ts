import { action, observable } from "mobx";
import ApiService from "../../services/VideoServices/index.api";
import ApiServiceFixture from "../../services/VideoServices/index.fixture";
import {
  ApiStatus,
  IndividualVideoDetailInterface,
  VideoDetailInterface,
} from "../type";
class VideoStore {
  service: ApiService | ApiServiceFixture;
  @observable
  homeSearch: string;
  @observable
  homeVideoData: VideoDetailInterface[];
  @observable
  homeApiStatus: ApiStatus;
  @observable
  indvidiualVideoData;
  @observable
  indvidiualVideoApiStatus: ApiStatus;
  @observable
  trendingVideoData: VideoDetailInterface[];
  @observable
  trendingApiStatus: ApiStatus;
  @observable
  likeVideo: string[];
  @observable
  disLikeVideo: string[];
  @observable
  savedVideo: VideoDetailInterface[];
  @observable
  gamingVideoList: VideoDetailInterface[];
  @observable
  gameingApiStatus: ApiStatus;
  constructor() {
    this.homeSearch = "";
    this.homeVideoData = [];
    this.homeApiStatus = ApiStatus.INITIAL;
    this.indvidiualVideoData = {};
    this.indvidiualVideoApiStatus = ApiStatus.INITIAL;
    this.trendingVideoData = [];
    this.trendingApiStatus = ApiStatus.INITIAL;
    this.likeVideo = [];
    this.disLikeVideo = [];
    this.savedVideo = [];
    this.gamingVideoList = [];
    this.gameingApiStatus = ApiStatus.INITIAL;
    this.service =
      process.env.IS_JEST === "true"
        ? new ApiServiceFixture()
        : new ApiService();
  }
  @action
  getGamingList = async () => {
    this.gameingApiStatus = ApiStatus.LOADING;
    await this.service
      .getGamingDataDetails()
      .then(
        (response) => {
          if (response) {
            this.gameingApiStatus = ApiStatus.SUCESS;
            this.gamingVideoList = response.videos;
          }
        },
        (reason) => {
          console.log(reason, "Error ??");
          this.gameingApiStatus = ApiStatus.FAILURE;
          console.log(reason);
        }
      )
      .catch((error) => {
        console.log(error, ">>ERROR<<");
      });
  };
  handleLikeInStore = (id: string) => {
    if (this.likeVideo.includes(id)) {
      return true;
    }
  };
  handledislikeInStore = (id: string) => {
    if (this.disLikeVideo.includes(id)) {
      return true;
    }
  };
  handlesavevideoInStore = (indData: IndividualVideoDetailInterface) => {
    const result = this.savedVideo.filter((data) => data.id === indData.id);
    console.log(result);
    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  @action
  getTrendData = async () => {
    this.trendingApiStatus = ApiStatus.LOADING;
    await this.service
      .getTrendingData()
      .then(
        (response) => {
          if (response) {
            this.trendingVideoData = response.videos;
            this.trendingApiStatus = ApiStatus.SUCESS;
          }
        },
        (reason) => {
          console.log(reason, "Error ??");
          this.trendingApiStatus = ApiStatus.FAILURE;
          console.log(reason);
        }
      )
      .catch((error) => {
        console.log(error, ">>ERROR<<");
      });
  };
  @action
  fetchIndvidiualVideoData = async (id: string) => {
    this.indvidiualVideoApiStatus = ApiStatus.LOADING;
    await this.service
      .getIndvidiualVideoData(id)
      .then(
        (response) => {
          if (response) {
            console.log(response.video_details);
            this.indvidiualVideoData = response.video_details;
            this.indvidiualVideoApiStatus = ApiStatus.SUCESS;
          }
        },
        (reason) => {
          console.log(reason, "Error ??");
          this.indvidiualVideoApiStatus = ApiStatus.FAILURE;
          console.log(reason);
        }
      )
      .catch((error) => {
        console.log(error, ">>ERROR<<");
      });
  };
  @action
  setHomeSearch = (value: string) => {
    this.homeSearch = value;
  };
  @action
  fetchHomeData = async () => {
    this.homeApiStatus = ApiStatus.LOADING;
    await this.service
      .getHomeData(this.homeSearch)
      .then(
        (response) => {
          if (response) {
            this.homeVideoData = response.videos;
            this.homeApiStatus = ApiStatus.SUCESS;
          }
        },
        (reason) => {
          console.log(reason, "Error ??");
          this.homeApiStatus = ApiStatus.FAILURE;
          console.log(reason);
        }
      )
      .catch((error) => {
        console.log(error, ">>ERROR<<");
      });
  };
  @action
  setLikeVideo = (id: string) => {
    if (this.disLikeVideo.includes(id)) {
      const array = this.disLikeVideo;
      const index = array.indexOf(id);
      if (index > -1) {
        array.splice(index, 1);
      }
      this.disLikeVideo = array;
    }
    if (this.likeVideo.includes(id)) {
      const array = this.likeVideo;
      const index = array.indexOf(id);
      if (index > -1) {
        array.splice(index, 1);
      }
      this.likeVideo = array;
    } else {
      const curr = this.likeVideo;
      curr.push(id);
      this.likeVideo = curr;
    }
    console.log(">>>>Like video Like>>> " + this.likeVideo);
    console.log(this.disLikeVideo);
  };
  @action setDisLikeVideo = (id: string) => {
    if (this.likeVideo.includes(id)) {
      const array = this.likeVideo;
      const index = array.indexOf(id);
      if (index > -1) {
        array.splice(index, 1);
      }
      this.likeVideo = array;
    }
    if (this.disLikeVideo.includes(id)) {
      const array = this.disLikeVideo;
      const index = array.indexOf(id);
      if (index > -1) {
        array.splice(index, 1);
      }
      this.disLikeVideo = array;
    } else {
      const curr = this.disLikeVideo;
      curr.push(id);
      this.disLikeVideo = curr;
    }
    console.log(this.likeVideo);
    console.log(this.disLikeVideo);
  };
  @action
  setSaveVideo = (item: VideoDetailInterface) => {
    const result = this.savedVideo.filter((indData) => indData.id === item.id);
    if (result.length > 0) {
      console.log(result);
      const array = this.savedVideo;
      const index = array.findIndex((indData) => indData.id === item.id);
      if (index > -1) {
        array.splice(index, 1);
      }
      this.savedVideo = array;
    } else {
      const curr = this.savedVideo;
      curr.push(item);
      console.log("came curr", curr);
      this.savedVideo = curr;
    }
  };
}
const videoStore = new VideoStore();
export default videoStore;
export { VideoStore };
