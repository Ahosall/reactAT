import { Grid, Card, CardContent, Typography } from "@mui/material";

import WorkItem from "./workItem";

import { IWorkResponse } from "../utils/types";

interface IWork {
  title: string;
  works: Array<IWorkResponse>;
}

const Work = ({ title, works }: IWork) => {
  return (
    <Card sx={{ mb: 2 }} color="secondary">
      <CardContent>
        <Typography variant="h5" component="div" margin="normal">
          {title}
        </Typography>
        <Grid
          sx={{ my: 2 }}
          container
          spacing={2}
          columnSpacing={{ sm: 2, xs: 2 }}
        >
          {works.map((work: IWorkResponse, i) => (
            <Grid item xl={2} lg={2} md={2} xs={6}>
              <WorkItem key={i} work={work} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Work;
