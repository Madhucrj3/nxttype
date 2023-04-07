import { resolveWithTimeout } from "../../utils/TestUtils";
class ApiServiceFixture {
  individualVideo = {
    id: "1",
    title: "Test video",
    video_url: "https://example.com/test.mp4",
    thumbnail_url: "https://example.com/thumbnail.png",
    channel: {
      name: "Test channel",
      profile_image_url: "https://example.com/test.jpg",
      subscriber_count: "4.13K",
    },
    description: "Lorem ipsum dolor sit amet",
    published_at: "Apr 21, 2019",
    view_count: "1.4K",
  };
  responseGame = [
    {
      id: "1",
      thumbnail_url: "https://example.com/thumbnail.png",
      title: "Video title",
      view_count: "10",
    },
    {
      id: "2",
      thumbnail_url: "https://example.com/thumbnail2.png",
      title: "Video title 2",
      view_count: "20",
    },
  ];
  response = [
    {
      id: "1",
      thumbnail_url: "https://example.com/image.png",
      channel: {
        name: "Channel Name",
        profile_image_url: "https://example.com/profile.png",
      },
      title: "Video Title",
      view_count: "1000",
      published_at: "Apr 21, 2019",
    },
  ];
  getGamingDataDetails(): Promise<any> {
    return resolveWithTimeout({ videos: this.responseGame });
  }
  getTrendingData(): Promise<any> {
    return resolveWithTimeout({ videos: this.response });
  }
  getHomeData(homeSearch: string): Promise<any> {
    return resolveWithTimeout({ videos: this.response });
  }
  fetchToken(): Promise<any> {
    return resolveWithTimeout({ jwt_token: "dummy_token" });
  }
  getIndvidiualVideoData(id: string): Promise<any> {
    return resolveWithTimeout({ video_details: this.individualVideo });
  }
}
export default ApiServiceFixture;
//video_details
