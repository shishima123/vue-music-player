const songs = [
  {
    id: 1,
    title: "Unit 1 A Picnic by the River",
    artist: "LPTD",
    seconds: 66,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 1 A Picnic by the River.mp3"),
    lyric: ""
  },
  {
    id: 2,
    title: "Unit 2 Let’s Recycle",
    artist: "LPTD",
    seconds: 60,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 2 Let’s Recycle.mp3"),
    lyric: ""
  },
  {
    id: 3,
    title: "Unit 3 Growing Roses",
    artist: "LPTD",
    seconds: 64,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 3 Growing Roses.mp3"),
    lyric: ""
  },
  {
    id: 4,
    title: "Unit 4 Bird Watching",
    artist: "LPTD",
    seconds: 70,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 4 Bird Watching.mp3"),
    lyric: ""
  },
  {
    id: 5,
    title: "Unit 5 Trees in the Forest",
    artist: "LPTD",
    seconds: 74,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 5 Trees in the Forest.mp3"),
    lyric: ""
  },
  {
    id: 6,
    title: "Unit 6 An Easy Way to Shop",
    artist: "LPTD",
    seconds: 69,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 6 An Easy Way to Shop.mp3"),
    lyric: ""
  },
  {
    id: 7,
    title: "Unit 7 Cell Phone Messages",
    artist: "LPTD",
    seconds: 62,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 7 Cell Phone Messages.mp3"),
    lyric: ""
  },
  {
    id: 8,
    title: "Unit 8 Bubbles in Boiling Water",
    artist: "LPTD",
    seconds: 69,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 8 Bubbles in Boiling Water.mp3"),
    lyric: ""
  },
  {
    id: 9,
    title: "Unit 9 The Blue Sky",
    artist: "LPTD",
    seconds: 70,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 9 The Blue Sky.mp3"),
    lyric: ""
  },
  {
    id: 10,
    title: "Unit 10 A New Camera",
    artist: "LPTD",
    seconds: 64,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 10 A New Camera.mp3"),
    lyric: ""
  },
  {
    id: 11,
    title: "Unit 11 Gold",
    artist: "LPTD",
    seconds: 69,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 11 Gold.mp3"),
    lyric: ""
  },
  {
    id: 12,
    title: "Unit 12 The Summer Music Festival",
    artist: "LPTD",
    seconds: 64,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 12 The Summer Music Festival.mp3"),
    lyric: ""
  },
  {
    id: 13,
    title: "Unit 13 The School Play",
    artist: "LPTD",
    seconds: 68,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 13 The School Play.mp3"),
    lyric: ""
  },
  {
    id: 14,
    title: "Unit 14 Ballet Class",
    artist: "LPTD",
    seconds: 65,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 14 Ballet Class.mp3"),
    lyric: ""
  },
  {
    id: 15,
    title: "Unit 15 Monet’s Garden",
    artist: "LPTD",
    seconds: 71,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 15 Monet’s Garden.mp3"),
    lyric: ""
  },
  {
    id: 16,
    title: "Unit 16 A Haunted House",
    artist: "LPTD",
    seconds: 76,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 16 A Haunted House.mp3"),
    lyric: ""
  },
  {
    id: 17,
    title: "Unit 17 A Big Screen TV",
    artist: "LPTD",
    seconds: 63,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 17 A Big Screen TV.mp3"),
    lyric: ""
  },
  {
    id: 18,
    title: "Unit 18 He’s Famous",
    artist: "LPTD",
    seconds: 66,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 18 He’s Famous.mp3"),
    lyric: ""
  },
  {
    id: 19,
    title: "Unit 19 A Housewarming Party",
    artist: "LPTD",
    seconds: 65,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 19 A Housewarming Party.mp3"),
    lyric: ""
  },
  {
    id: 20,
    title: "Unit 20 Making Music",
    artist: "LPTD",
    seconds: 70,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 20 Making Music.mp3"),
    lyric: ""
  },
  {
    id: 21,
    title: "Unit 21 Where Is Your Homework",
    artist: "LPTD",
    seconds: 70,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 21 Where Is Your Homework.mp3"),
    lyric: ""
  },
  {
    id: 22,
    title: "Unit 22 After School Activities",
    artist: "LPTD",
    seconds: 61,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 22 After School Activities.mp3"),
    lyric: ""
  },
  {
    id: 23,
    title: "Unit 23 Arts and Crafts Class",
    artist: "LPTD",
    seconds: 75,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 23 Arts and Crafts Class.mp3"),
    lyric: ""
  },
  {
    id: 24,
    title: "Unit 24 Grandfather’s Birthday",
    artist: "LPTD",
    seconds: 67,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 24 Grandfather’s Birthday.mp3"),
    lyric: ""
  },
  {
    id: 25,
    title: "Unit 25 The Lesson",
    artist: "LPTD",
    seconds: 71,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 25 The Lesson.mp3"),
    lyric: ""
  },
  {
    id: 26,
    title: "Unit 26 A Problem at the Office",
    artist: "LPTD",
    seconds: 73,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 26 A Problem at the Office.mp3"),
    lyric: ""
  },
  {
    id: 27,
    title: "Unit 27 My Future Job",
    artist: "LPTD",
    seconds: 69,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 27 My Future Job.mp3"),
    lyric: ""
  },
  {
    id: 28,
    title: "Unit 28 Shopping",
    artist: "LPTD",
    seconds: 70,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 28 Shopping.mp3"),
    lyric: ""
  },
  {
    id: 29,
    title: "Unit 29 A Part-time Job",
    artist: "LPTD",
    seconds: 67,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 29 A Part-time Job.mp3"),
    lyric: ""
  },
  {
    id: 30,
    title: "Unit 30 Teamwork",
    artist: "LPTD",
    seconds: 69,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 30 Teamwork.mp3"),
    lyric: ""
  },
  {
    id: 31,
    title: "Unit 31 The Marathon",
    artist: "LPTD",
    seconds: 67,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 31 The Marathon.mp3"),
    lyric: ""
  },
  {
    id: 32,
    title: "Unit 32 Racquetball",
    artist: "LPTD",
    seconds: 73,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 32 Racquetball.mp3"),
    lyric: ""
  },
  {
    id: 33,
    title: "Unit 33 Summer Sports",
    artist: "LPTD",
    seconds: 66,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 33 Summer Sports.mp3"),
    lyric: ""
  },
  {
    id: 34,
    title: "Unit 34 Inline Skating",
    artist: "LPTD",
    seconds: 73,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 34 Inline Skating.mp3"),
    lyric: ""
  },
  {
    id: 35,
    title: "Unit 35 The Olympics",
    artist: "LPTD",
    seconds: 74,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 35 The Olympics.mp3"),
    lyric: ""
  },
  {
    id: 36,
    title: "Unit 36 A Bicycle Trip",
    artist: "LPTD",
    seconds: 68,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 36 A Bicycle Trip.mp3"),
    lyric: ""
  },
  {
    id: 37,
    title: "Unit 37 Driving Down South",
    artist: "LPTD",
    seconds: 69,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 37 Driving Down South.mp3"),
    lyric: ""
  },
  {
    id: 38,
    title: "Unit 38 The Travel Agent",
    artist: "LPTD",
    seconds: 61,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 38 The Travel Agent.mp3"),
    lyric: ""
  },
  {
    id: 39,
    title: "Unit 39 Taking the Train",
    artist: "LPTD",
    seconds: 67,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 39 Taking the Train.mp3"),
    lyric: ""
  },
  {
    id: 40,
    title: "Unit 40 Go on a Cruise",
    artist: "LPTD",
    seconds: 58,
    cover: require("../assets/images/cover.jpg"),
    src: require("../assets/audios/LPTD1.1/Unit 40 Go on a Cruise.mp3"),
    lyric: ""
  }
];

export default songs;
