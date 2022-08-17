import "./Work.css";

type TWorks = {
  image: string;
  name: string;
  genres: Array<string>;
};

interface IWork {
  title: string;
  works: Array<TWorks>;
}

const Work = (props: IWork) => {
  return (
    <div className="work">
      <div className="header">
        <h3 className="title">{props.title}</h3>
      </div>
      <div className="content">
        {props.works.map((work, i) => (
          <div key={i} className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${work.image})` }}
            ></div>
            <div className="card-info">
              <p className="work-title">{work.name}</p>
              {work.genres.map((genres) => (
                <span className="work-genres">{genres}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
