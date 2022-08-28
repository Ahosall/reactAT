import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Chip,
  Typography,
  Stack,
} from "@mui/material";

import { IWorkResponse } from "../utils/types";

const WorkItem = ({ work }: { work: IWorkResponse }) => {
  const handlePreview = (id: number) => {
    window.location.href = `/preview/${id}`;
  };

  return (
    <Card
      onClick={() => handlePreview(work.id)}
      sx={{ cursor: "pointer", height: "100%" }}
    >
      <CardMedia
        height="75%"
        component="img"
        image={work.image}
        alt={"image " + work.id}
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          margin="normal"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "75ch",
          }}
        >
          {work.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {work?.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WorkItem;
