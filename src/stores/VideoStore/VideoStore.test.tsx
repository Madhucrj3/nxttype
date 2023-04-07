import { waitFor } from "@testing-library/react";
import videoStore from ".";
import { ApiStatus } from "../type";
describe("video store", () => {
  afterEach(() => {
    jest.clearAllMocks;
  });
  it("initializes the store correctly", () => {
    expect(videoStore.homeSearch).toBe("");
    expect(videoStore.homeVideoData).toEqual([]);
    expect(videoStore.homeApiStatus).toBe(ApiStatus.INITIAL);
    expect(videoStore.indvidiualVideoData).toEqual({});
    expect(videoStore.indvidiualVideoApiStatus).toBe(ApiStatus.INITIAL);
    expect(videoStore.trendingVideoData).toEqual([]);
    expect(videoStore.trendingApiStatus).toBe(ApiStatus.INITIAL);
    expect(videoStore.likeVideo).toEqual([]);
    expect(videoStore.disLikeVideo).toEqual([]);
    expect(videoStore.savedVideo).toEqual([]);
    expect(videoStore.gamingVideoList).toEqual([]);
    expect(videoStore.gameingApiStatus).toBe(ApiStatus.INITIAL);
  });
  it("fetch Game Video Data", async () => {
    expect(videoStore.gameingApiStatus).toBe(ApiStatus.INITIAL);
    videoStore.getGamingList();
    console.log(videoStore.gameingApiStatus);
    await waitFor(() => {
      console.log(videoStore.gameingApiStatus);
      expect(videoStore.gameingApiStatus).toBe(ApiStatus.LOADING);
    });
    await waitFor(() => {
      console.log(videoStore.gameingApiStatus);
      expect(videoStore.gameingApiStatus).toBe(ApiStatus.SUCESS);
      expect(videoStore.gamingVideoList).toEqual([
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
      ]);
    });
  });
  it("fetch Trending Video Data", async () => {
    expect(videoStore.trendingApiStatus).toBe(ApiStatus.INITIAL);
    videoStore.getTrendData();
    console.log(videoStore.gameingApiStatus);
    await waitFor(() => {
      console.log(videoStore.trendingApiStatus);
      expect(videoStore.trendingApiStatus).toBe(ApiStatus.LOADING);
    });
    await waitFor(() => {
      console.log(videoStore.trendingApiStatus);
      expect(videoStore.trendingApiStatus).toBe(ApiStatus.SUCESS);
      expect(videoStore.trendingVideoData).toEqual([
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
      ]);
    });
  });
  it("fetch Home Video Data", async () => {
    expect(videoStore.homeApiStatus).toBe(ApiStatus.INITIAL);
    videoStore.fetchHomeData();
    console.log(videoStore.homeApiStatus);
    await waitFor(() => {
      console.log(videoStore.homeApiStatus);
      expect(videoStore.homeApiStatus).toBe(ApiStatus.LOADING);
    });
    await waitFor(() => {
      console.log(videoStore.homeApiStatus);
      expect(videoStore.homeApiStatus).toBe(ApiStatus.SUCESS);
      expect(videoStore.homeVideoData).toEqual([
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
      ]);
    });
  });
  it("check for Home Search", () => {
    videoStore.setHomeSearch("hello");
    expect(videoStore.homeSearch).toBe("hello");
  });
});
describe("Individual Video", () => {
  it("indiviual Video from Store Check", async () => {
    expect(videoStore.indvidiualVideoApiStatus).toBe(ApiStatus.INITIAL);
    videoStore.fetchIndvidiualVideoData("1");
    console.log(videoStore.indvidiualVideoApiStatus);
    await waitFor(() => {
      console.log(videoStore.indvidiualVideoApiStatus);
      expect(videoStore.indvidiualVideoApiStatus).toBe(ApiStatus.LOADING);
    });
    await waitFor(() => {
      console.log(videoStore.indvidiualVideoApiStatus);
      expect(videoStore.indvidiualVideoApiStatus).toBe(ApiStatus.SUCESS);
      expect(videoStore.indvidiualVideoData).toEqual({
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
      });
    });
  });
});
describe("Like In Store", () => {
  it("like Video", () => {
    videoStore.setLikeVideo("1");
    expect(videoStore.likeVideo).toContain("1");
    expect(videoStore.likeVideo).not.toContain("2");
    videoStore.setLikeVideo("1");
    expect(videoStore.likeVideo).not.toContain("1");
    expect(videoStore.likeVideo).not.toContain("2");
    videoStore.setLikeVideo("1");
    expect(videoStore.likeVideo).toContain("1");
    expect(videoStore.likeVideo).not.toContain("2");
    videoStore.setDisLikeVideo("1");
    expect(videoStore.likeVideo).not.toContain("1");
    expect(videoStore.likeVideo).not.toContain("2");
    videoStore.setLikeVideo("1");
    expect(videoStore.likeVideo).toContain("1");
    expect(videoStore.handleLikeInStore("1")).toBeTruthy();
    expect(videoStore.handleLikeInStore("2")).toBeFalsy();
  });
});
describe("DisLike In Store", () => {
  it("Dislike Video", () => {
    videoStore.setDisLikeVideo("1");
    expect(videoStore.disLikeVideo).toContain("1");
    expect(videoStore.disLikeVideo).not.toContain("2");
    videoStore.setDisLikeVideo("1");
    expect(videoStore.disLikeVideo).not.toContain("1");
    expect(videoStore.disLikeVideo).not.toContain("2");
    videoStore.setDisLikeVideo("1");
    expect(videoStore.disLikeVideo).toContain("1");
    expect(videoStore.disLikeVideo).not.toContain("2");
    videoStore.setLikeVideo("1");
    expect(videoStore.disLikeVideo).not.toContain("1");
    expect(videoStore.disLikeVideo).not.toContain("2");
    videoStore.setDisLikeVideo("1");
    expect(videoStore.disLikeVideo).toContain("1");
    expect(videoStore.handledislikeInStore("1")).toBeTruthy();
    expect(videoStore.handledislikeInStore("2")).toBeFalsy();
  });
});
describe("Save Video In Store", () => {
  it("Save Video Video", () => {
    const item = {
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
    videoStore.setSaveVideo(item);
    expect(videoStore.savedVideo).toHaveLength(1);
    expect(videoStore.savedVideo[0]).toEqual(item);
    videoStore.setSaveVideo(item);

    // verify that the savedVideo array is now empty
    expect(videoStore.savedVideo).toHaveLength(0);
  });
});
