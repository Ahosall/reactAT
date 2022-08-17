import Work from "../../components/Work";

import "./style.css";

const Home = () => {
  let works = [
    {
      title: "Manhwas",
      works: [
        {
          image:
            "https://images-na.ssl-images-amazon.com/images/I/816QF6MMSrL.jpg",
          name: "Solo Leveling",
          genres: ["Sci-Fi"],
        },
      ],
    },
  ];
  return (
    <div className="home">
      <div className="annoucements">
        <div className="header"></div>
      </div>

      <div className="contents">
        {works.map((w) => (
          <Work title={w.title} works={w.works} />
        ))}
      </div>
    </div>
  );
};

export default Home;
