export default {
  async getSleepStories() {
    const description =
      "Lorem ipsum dolor amet tote bag salvia celiac iPhone swag, kombucha mixtape pitchfork before they sold out. Flannel scenester bespoke biodiesel pork belly. Food truck tilde skateboard aesthetic before they sold out franzen.";

    return {
      data: {
        data: [
          {
            id: 1,
            createdAt: 1538852003928,
            title: "The Orient Express",
            type: "story",
            description,
            author: "Myles Sinclair",
            narrator: "Charlotte Nguyen",
            narratorProfileSrc:
              "https://randomuser.me/api/portraits/women/74.jpg",
            duration: 1000,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-01.mp3",
            imgSrc: "https://i.imgur.com/ubAXme5.jpg"
          },
          {
            id: 2,
            createdAt: 1538852003928,
            title: "The Velveteen Rabbit",
            type: "story",
            description,
            author: "Gideon McCaskey",
            narrator: "Clifton Wade",
            narratorProfileSrc:
              "https://randomuser.me/api/portraits/men/35.jpg",
            duration: 1500,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-02.mp3",
            imgSrc: "https://i.imgur.com/ospZv7f.jpg"
          },
          {
            id: 3,
            createdAt: 1538852003928,
            title: "Agents Of Utopia",
            type: "story",
            description,
            author: "Electa Caldwell",
            narrator: "Tiffany Phillips",
            narratorProfileSrc:
              "https://randomuser.me/api/portraits/women/57.jpg",
            duration: 2100,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-03.mp3",
            imgSrc: "https://i.imgur.com/tCc6mkh.jpg"
          },
          {
            id: 4,
            createdAt: 1538852003928,
            title: "City In The River",
            type: "story",
            description,
            author: "Ellen Irwin",
            narrator: "Beverley George",
            narratorProfileSrc:
              "https://randomuser.me/api/portraits/women/16.jpg",
            duration: 700,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-04.mp3",
            imgSrc: "https://i.imgur.com/eE0qUlv.jpg"
          },
          {
            id: 5,
            createdAt: 1538852003928,
            title: "The Wizard Of Whispers",
            type: "story",
            description,
            author: "Dorothy Clement",
            narrator: "Ted Campbell",
            narratorProfileSrc:
              "https://randomuser.me/api/portraits/men/67.jpg",
            duration: 1200,
            mediaSrc:
              "https://s3.amazonaws.com/christianreyco/projects/calm-app-vue/calm-05.mp3",
            imgSrc: "https://i.imgur.com/wYjZAfP.jpg"
          },
          {
            id: 6,
            createdAt: 1538852003928,
            title: "Lurking In The Mountains",
            type: "story",
            description,
            author: "Henrietta Dinsmore",
            narrator: "Claire Larson",
            narratorProfileSrc:
              "https://randomuser.me/api/portraits/women/60.jpg",
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
