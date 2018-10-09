export default {
  async getMusicTracks() {
    return {
      data: {
        data: [
          {
            id: 1,
            createdAt: 1538852003928,
            title: "Milky Way",
            category: "relax",
            description: "Music Description",
            duration: 3600,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-07.mp3",
            imgSrc: "https://i.imgur.com/jHdJbVl.jpg"
          },
          {
            id: 2,
            createdAt: 1538852003928,
            title: "A Quiet Day",
            category: "relax",
            description: "Music Description",
            duration: 3000,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-08.mp3",
            imgSrc: "https://i.imgur.com/TwuG22H.jpg"
          },
          {
            id: 3,
            createdAt: 1538852003928,
            title: "Healing Piano",
            category: "relax",
            description: "Music Description",
            duration: 2000,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-09.mp3",
            imgSrc: "https://i.imgur.com/rsPdxeg.jpg"
          },
          {
            id: 4,
            createdAt: 1538852003928,
            title: "Breathe Away",
            category: "relax",
            description: "Music Description",
            duration: 2400,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-10.mp3",
            imgSrc: "https://i.imgur.com/muueGm3.jpg"
          },
          {
            id: 5,
            createdAt: 1538852003928,
            title: "Serendipity",
            category: "nature",
            description: "Music Description",
            duration: 1200,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-11.mp3",
            imgSrc: "https://i.imgur.com/fe3NEY4.jpg"
          },
          {
            id: 6,
            createdAt: 1538852003928,
            title: "Sculpture",
            category: "nature",
            description: "Music Description",
            duration: 1600,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-12.mp3",
            imgSrc: "https://i.imgur.com/ye3eyys.jpg"
          }
        ]
      }
    };
  }
};
