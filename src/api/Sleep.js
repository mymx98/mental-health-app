function getAudioUrl(id) {
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

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
            mediaSrc: getAudioUrl("1tHfqEBA0XdxeJRuZEWKcWetzFJivigwH"),
            imgSrc: "https://i.imgur.com/ubAXme5.jpg"
          },
          {
            id: 2,
            createdAt: 1538852003928,
            title: "The Velveteen Rabbit",
            description: "Story Description",
            author: "Gideon McCaskey",
            duration: 1500,
            mediaSrc: getAudioUrl("10jWxHQ8f20QIyHTFIhV7zWZGrW7BJcUz"),
            imgSrc: "https://i.imgur.com/ospZv7f.jpg"
          },
          {
            id: 3,
            createdAt: 1538852003928,
            title: "Agents Of Utopia",
            description: "Story Description",
            author: "Electa Caldwell",
            duration: 2100,
            mediaSrc: getAudioUrl("1K_hW2Vn6NT5-hnbJxUrTXPscsnDnLGQa"),
            imgSrc: "https://i.imgur.com/tCc6mkh.jpg"
          },
          {
            id: 4,
            createdAt: 1538852003928,
            title: "City In The River",
            description: "Story Description",
            author: "Ellen Irwin",
            duration: 700,
            mediaSrc: getAudioUrl("1VZZ-UkkGCLT_mUnEt5NvisAc-wiyD9Lz"),
            imgSrc: "https://i.imgur.com/eE0qUlv.jpg"
          },
          {
            id: 5,
            createdAt: 1538852003928,
            title: "The Wizard Of Whispers",
            description: "Story Description",
            author: "Dorothy Clement",
            duration: 1200,
            mediaSrc: getAudioUrl("15hEkvGJ38T3vzlrmxrOwOnARpHXlCeMM"),
            imgSrc: "https://i.imgur.com/wYjZAfP.jpg"
          },
          {
            id: 6,
            createdAt: 1538852003928,
            title: "Lurking In The Mountains",
            description: "Story Description",
            author: "Henrietta Dinsmore",
            duration: 1600,
            mediaSrc: getAudioUrl("1TemxoDxkflNVGUKUEdtpY0oQXkEJ1OT3"),
            imgSrc: "https://i.imgur.com/Om5JAZy.jpg"
          }
        ]
      }
    };
  }
};
