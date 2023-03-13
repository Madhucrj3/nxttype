import { action, observable } from "mobx";
import { ApiStatus, IndividualVideoDetailInterface, VideoDetailInterface } from "../type";
class VideoStore {
  @observable
  homeSearch:string="";
  @observable
  homeVideoData:VideoDetailInterface[]=[];
  @observable
  homeApiStatus:ApiStatus=ApiStatus.INITIAL;
  @observable
  indvidiualVideoData={};
  @observable
  indvidiualVideoApiStatus:ApiStatus=ApiStatus.INITIAL;
  @observable
  trendingVideoData:VideoDetailInterface[]=[];
  @observable
  trendingApiStatus:ApiStatus=ApiStatus.INITIAL;
  @observable 
  likeVideo:string[]
  @observable
  disLikeVideo:string[]
  @observable
  savedVideo:VideoDetailInterface[]
  @observable
  gamingVideoData=[]
  @observable
  gameApiStatus:ApiStatus=ApiStatus.INITIAL;
  @action
  getGamingData=async()=>{
    this.gameApiStatus=ApiStatus.LOADING;
    const URL = 'https://apis.ccbp.in/videos/gaming';
    const response = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    })
    .then((response) => {return response.json()})
    .catch((error) => {
      this.gameApiStatus=ApiStatus.FAILURE;
        console.error('Error:', error);
    });
    if(response.status_code===400){
      this.gameApiStatus=ApiStatus.FAILURE;
      console.log("error");
    }
      else{
        this.gamingVideoData=response.videos;
        this.gameApiStatus=ApiStatus.SUCESS;
      }
  }
    constructor()
    {
        this.likeVideo=[];
        this.disLikeVideo=[];
        this.savedVideo=[]
    }
    handleLikeuse = (id:string) => {
      if (this.likeVideo.includes(id)) {
        return true;
      }
    };
    handledislikeuse = (id:string) => {
      if (this.disLikeVideo.includes(id)) {
        return true;
      }
    };
    handlesavevideouse = (indData:IndividualVideoDetailInterface) => {
      const result = this.savedVideo.filter((indData) => indData.id === indData.id);
      console.log(result);
      if (result.length > 0) {
       return true;
      } else {
        return false;
      }
    };
  @action
  getTrendData=async ()=>{
    this.trendingApiStatus=ApiStatus.LOADING;
    const URL = 'https://apis.ccbp.in/videos/trending';
    const response = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    })
    .then((response) => {return response.json()})
    .catch((error) => {
      this.trendingApiStatus=ApiStatus.FAILURE;
        console.error('Error:', error);
    });
    if(parseInt(response.status_code)>=400){
      console.log("error");
      this.trendingApiStatus=ApiStatus.FAILURE;
    }
      else{
        this.trendingVideoData=response.videos;
        this.trendingApiStatus=ApiStatus.SUCESS;
      }
    }
  @action 
  fetchIndvidiualVideoData=async (id:string)=>{
    this.indvidiualVideoApiStatus=ApiStatus.LOADING;
    const URL = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(URL, {
      method: "GET",
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    })
    .then((response) => {return response.json()})
    .catch((error) => {
      this.indvidiualVideoApiStatus=ApiStatus.FAILURE;
    console.error('Error:', error);
    });
  if(parseInt(response.status_code)>=400){
    this.indvidiualVideoApiStatus=ApiStatus.FAILURE;
    }
    else{
      console.log(response.video_details);
    this.indvidiualVideoData=response.video_details;
    this.indvidiualVideoApiStatus=ApiStatus.SUCESS;
    }
  }
  @action
  setHomeSearch=(value:string)=>{
    this.homeSearch=value;
  }
  @action 
  fetchHomeData=async ()=>{
    this.homeApiStatus=ApiStatus.LOADING;
    const URL = 'https://apis.ccbp.in/videos/all?search='+this.homeSearch;
    const response = await fetch(URL, {
      method: "GET",
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    })
    .then((response) => {return response.json()})
    .catch((error) => {
      this.homeApiStatus=ApiStatus.FAILURE;
    console.error('Error:', error);
    });
  console.log(response.videos);
  if(parseInt(response.status_code)>=400){
    this.homeApiStatus=ApiStatus.FAILURE;
    }
    else{
    this.homeVideoData=response.videos;
    this.homeApiStatus=ApiStatus.SUCESS;
    }
  }
  @action
    setLikeVideo=(id:string)=>{
        if(this.disLikeVideo.includes(id))
        {
          const array=this.disLikeVideo;
          const index = array.indexOf(id);
          if (index > -1) {
           array.splice(index, 1); 
          }
          this.disLikeVideo=array;
        }
        if(this.likeVideo.includes(id))
        {
          const array=this.likeVideo;
          const index = array.indexOf(id);
          if (index > -1) {
           array.splice(index, 1); 
          }
          this.likeVideo=array;
        }
        else
        {
          const curr=this.likeVideo;
          curr.push(id);
          this.likeVideo=curr;
        }
        console.log(">>>>Like video Like>>> "+ this.likeVideo);
        console.log(this.disLikeVideo);
    }
    @action setDisLikeVideo=(id:string)=>{
        if(this.likeVideo.includes(id)) {
            const array = this.likeVideo;
            const index = array.indexOf(id);
            if (index > -1) {
              array.splice(index, 1);
            }
            this.likeVideo=array;
        }
          if (this.disLikeVideo.includes(id)) {
            const array = this.disLikeVideo;
            const index = array.indexOf(id);
            if (index > -1) {
              array.splice(index, 1);
            }
            this.disLikeVideo=array;
          } else {
            const curr = this.disLikeVideo;
            curr.push(id);
            this.disLikeVideo=curr;
          }
          console.log(this.likeVideo);
        console.log(this.disLikeVideo);
    }
    @action 
    setSaveVideo=(item:VideoDetailInterface)=>{
    const result = this.savedVideo.filter((indData)=> indData.id===item.id);
    if (result.length > 0) {
      console.log(result);
      const array = this.savedVideo;
      const index = array.findIndex((indData)=> indData.id===item.id);
      if (index > -1) {
        array.splice(index, 1);
      }
      this.savedVideo=array;
    } else {
      const curr = this.savedVideo;
      curr.push(item);
      console.log("came curr", curr);
      this.savedVideo=curr;
    }
    }
}
const videoStore=new VideoStore();
export default videoStore;
export {VideoStore}
