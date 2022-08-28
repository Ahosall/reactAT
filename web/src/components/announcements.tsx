import { Card, CardContent, Typography } from "@mui/material";

interface IAnnoucements {
  title: String;
  message: String;
}

const Announcements = ({ title, message }: IAnnoucements) => {
  return (
    <Card sx={{ minWidth: 215 }} color="secondary">
      <CardContent>
        <Typography variant="h5" component="div" margin="normal">
          {title}
        </Typography>
        <Typography variant="body2">{message}</Typography>
      </CardContent>
    </Card>
  );
};

export default Announcements;
