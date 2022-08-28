const router = require("express").Router();

let works = [
  {
    id: 1,
    type: 2,
    image: "https://images-na.ssl-images-amazon.com/images/I/816QF6MMSrL.jpg",
    name: "Solo Leveling",
    author: "Chu-Gong",
    genres: ["Dark", "Aventura"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 2,
    type: 2,
    image:
      "https://static3.mangalivre.net/capas/UfImono9zPu7PTk5SrpSdw/7403/625b30e19b8b3_external_cover.jpg",
    name: "The Beginning After The End",
    author: "TurtleMe",
    genres: ["Ação", "Artes Marciais", "Romance"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 3,
    type: 2,
    image:
      "https://static3.mangalivre.net/capas/oDR4VtFL_puGVJtRT4Eymg/7302/6022e659a8e56external_cover.jpg",
    name: "Martial Peak",
    genres: ["Comédia", "Harém", "Artes Marciais"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 4,
    type: 2,
    image:
      "https://static3.mangalivre.net/capas/naw_RevX1wui0TYji2hQXw/11363/5fc679af10d19external_cover.jpg",
    name: "A Boy That Can't Stop Crossdressing",
    genres: ["Comédia", "Crossdressing"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 5,
    type: 2,
    image:
      "https://static3.mangalivre.net/capas/ukinmvmSyuo3O3CES-ENsw/2133/image_4_cut_hero_large_1.jpg",
    name: "4 Cut Hero",
    genres: ["Ação", "Fantasia", "Shounen"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 6,
    type: 2,
    image:
      "https://static3.mangalivre.net/capas/Sg7qJoM4cw5p8QeoR-rS9Q/9445/external_cover.jpg",
    name: "Solo Loging",
    genres: ["Shounen", "Sobrenatural", "Fantasia"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 7,
    type: 1,
    image: "https://images-na.ssl-images-amazon.com/images/I/81s8xJUzWGL.jpg",
    name: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    genres: ["Adulto", "Seinen", "Sangue"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
    chapters: [
      {
        id: 1,
        title: "A serra parte 1",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 2,
        title: "A serra parte 2",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 3,
        title: "A serra parte 3",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 4,
        title: "A serra parte 4",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 5,
        title: "A serra parte 5",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 6,
        title: "A serra parte 6",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 7,
        title: "A serra parte 7",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 8,
        title: "A serra parte 8",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 9,
        title: "A serra parte 9",
        chapter: 1,
        date: "29/08/2022",
      },
      {
        id: 10,
        title: "A serra parte 10",
        chapter: 1,
        date: "29/08/2022",
      },
    ],
  },
  {
    id: 8,
    type: 1,
    image: "https://m.media-amazon.com/images/I/81AVPbPbdtL._AC_SY879_.jpg",
    name: "One Punch Man",
    author: "Yusuke Murata",
    genres: ["Ação", "Herói", "Sci-Fi"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 9,
    type: 1,
    image: "https://images-na.ssl-images-amazon.com/images/I/91D07epNE9L.jpg",
    name: "Berserk",
    author: "Kentaro Miura",
    genres: ["Ação", "Adulto", "Horror"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 10,
    type: 1,
    image:
      "https://static3.mangalivre.net/capas/erg7K5BI0s__s3Uzx49tTw/70/external_cover.jpg",
    name: "Vagabond",
    genres: ["Ação", "Aventura", "Samurai"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 11,
    type: 1,
    image:
      "https://static3.mangalivre.net/capas/o_Y9o7SPup2sJMGCNhab3Q/7850/609d2777733e2external_cover.jpg",
    name: "Shuumatsu no Walkure",
    genres: ["Ação", "Herói", "Sci-Fi"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
  {
    id: 12,
    type: 1,
    image:
      "https://static3.mangalivre.net/capas/O41-pMhRWA-sNtrrhCH4uA/7797/external_cover.jpg",
    name: "The Last Human",
    author: "Moshi Fanren",
    genres: ["Ação", "Sobrenatural", "Shounen"],
    sinopse:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?",
  },
];

router.get("/", (req, res, next) => {
  let types = ["Mangas", "Manhwas"];

  res.send({
    status: 200,
    works: types.map((t, i) => ({
      title: t,
      works: works.filter((w) => w.type == i + 1),
    })),
  });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  let work = works.filter((w) => w.id == id)[0];

  res.send({
    status: 200,
    work,
  });
});

module.exports = {
  path: "/works",
  router,
};
