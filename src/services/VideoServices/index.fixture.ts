export const fetchgameData = async () => {
  const response = {
    videos: [
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
    ],
  };
  return response.videos;
};
