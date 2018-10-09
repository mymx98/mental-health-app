export default {
  async getSleepStories() {
    return {
      data: {
        data: [
          {
            id: 1,
            createdAt: 1538852003928,
            title: "The Orient Express",
            description: "Story Description",
            author: "Myles Sinclair",
            duration: 1000,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-01.mp3",
            imgSrc: "https://i.imgur.com/ubAXme5.jpg"
          },
          {
            id: 2,
            createdAt: 1538852003928,
            title: "The Velveteen Rabbit",
            description: "Story Description",
            author: "Gideon McCaskey",
            duration: 1500,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-02.mp3",
            imgSrc: "https://i.imgur.com/ospZv7f.jpg"
          },
          {
            id: 3,
            createdAt: 1538852003928,
            title: "Agents Of Utopia",
            description: "Story Description",
            author: "Electa Caldwell",
            duration: 2100,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-03.mp3",
            imgSrc: "https://i.imgur.com/tCc6mkh.jpg"
          },
          {
            id: 4,
            createdAt: 1538852003928,
            title: "City In The River",
            description: "Story Description",
            author: "Ellen Irwin",
            duration: 700,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-04.mp3",
            imgSrc: "https://i.imgur.com/eE0qUlv.jpg"
          },
          {
            id: 5,
            createdAt: 1538852003928,
            title: "The Wizard Of Whispers",
            description: "Story Description",
            author: "Dorothy Clement",
            duration: 1200,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-05.mp3",
            imgSrc: "https://i.imgur.com/wYjZAfP.jpg"
          },
          {
            id: 6,
            createdAt: 1538852003928,
            title: "Lurking In The Mountains",
            description: "Story Description",
            author: "Henrietta Dinsmore",
            duration: 1600,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-06.mp3",
            imgSrc: "https://i.imgur.com/Om5JAZy.jpg"
          }
        ]
      }
    };
  }
};
