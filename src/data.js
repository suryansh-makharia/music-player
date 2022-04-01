import { v4 as uuidv4 } from "uuid";

export default function chillHop() {
  return [
    {
      name: "Going Back",
      cover:
        "https://i.scdn.co/image/ab67616d0000b2739f0f86b54e7ca8870fac0ede",
      artist: "Swørn",
      audio:
        "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#BF4377", "#DB9094"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Ballin",
      cover:
        "https://m.media-amazon.com/images/I/61um10tv4EL._AA256._SX472_SY472_BL0_QL100_.jpg",
      artist: "Mustard & Roddy Rich",
      audio: "https://ip-h5-nf01-sycdn.kuwo.cn/60384ea86e189d4e1e694301f0a04cc3/62473bb1/resource/n3/10/11/2555318537.mp3",
      color: ["#0059C0", "#4B76BD"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Solar Cove",
      cover: "https://i.scdn.co/image/ab67616d0000b2739018b80220e22b0b113bffe4",
      artist: "Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16179",
      color: ["#E46751", "#FCAD81"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Runaway",
      cover: "https://i.scdn.co/image/ab67616d0000b273742ad9194524c9723528bc05",
      artist: "Blue Wednesday, Magnus Klausen",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12136",
      color: ["#913042", "#D54B46"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "On the Moon",
      cover: "https://i.scdn.co/image/ab67616d0000b27389d9e672c065e5fa2e15a5d8",
      artist: "SwuM",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15237",
      color: ["#2F3934", "#243232"],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Sunflower (Spider-man: Into the Spider-Verse)',
      cover: 'https://a10.gaanacdn.com/images/albums/66/2390766/crop_480x480_2390766.jpg',
      artist: 'Post Malone, Swae Lee',
      audio: 'https://mp3.filmisongs.com/Sunflower%20Mp3%20By%20Swae%20Lee%20and%20Post%20Malone.mp3',
      color: ['#211D40', '#3B3585'],
      id: uuidv4(),
      active: false
    }
  ];
}
