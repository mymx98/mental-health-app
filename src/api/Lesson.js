export default {
  async getLessons() {
    return {
      data: {
        data: [
          {
          id: 1,
          createdAt: 1538852003928,
          title: "Introducing Mindful Leadership",
          duration: "10m"
          },
          {
            id: 2,
            createdAt: 1538852003928,
            title: "Understanding Power and Purpose",
            duration: "10m"
          },
          {
            id: 3,
            createdAt: 1538852003928,
            title: "Speaking Up",
            duration: "11m"
          },
          {
            id: 4,
            createdAt: 1538852003928,
            title: "Helping Others Speak Up",
            duration: "10m"
          }
        ]
      }
    };
  }
};
