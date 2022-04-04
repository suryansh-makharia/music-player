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
      audio: "https://ip-h5-nf01-sycdn.kuwo.cn/84f526711465d1a5f2c49970460a359f/624b2bc3/resource/n3/10/11/2555318537.mp3",
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
      name: 'No Idea',
      cover: 'https://m.media-amazon.com/images/I/71JENaMrUQL._AA256._SX472_SY472_BL0_QL100_.jpg',
      artist: 'Don Toliver',
      audio: 'https://sq-sycdn.kuwo.cn/698ce10422a897dfe58b5e0a03763d08/624b2c3a/resource/n1/78/25/3416472294.mp3',
      color: ['#211D40', '#3B3585'],
      id: uuidv4(),
      active: false
    }
  ];
}
