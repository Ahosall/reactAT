import { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";

import Work from "./../../components/work";
import Announcements from "./../../components/announcements";
import { IWorksResponse } from "../../utils/types";

import api from "../../services/api";

const Home = () => {
  const [works, setWorks] = useState<IWorksResponse | null>(null);

  useEffect(() => {
    (async () => {
      const response = await api.get(`/works/`);

      if (response.data.status == 404) return (window.location.href = "/404");
      setWorks(response.data.works);
    })();
  }, []);

  return (
    <Container>
      <Grid sx={{ my: 2 }} container spacing={2}>
        <Grid item xs={12}>
          <Announcements
            title={"Teste"}
            message={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem numquam hic modi sit? Esse exercitationem recusandae deleniti a similique delectus sunt illo omnis quo, nihil magni qui soluta veritatis?"
            }
          />
        </Grid>
        <Grid item xs={12}>
          {works?.map((w, i) => (
            <Work key={i} title={w.title} works={w.works} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
