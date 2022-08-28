import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Chip,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import api from "../../services/api";

import { IWorkResponse } from "../../utils/types";

const Preview = () => {
  const [work, setWork] = useState<IWorkResponse | null>(null);

  const params = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/works/${params.id}`);

      if (response.data.status == 404) return (window.location.href = "/404");
      setWork(response.data.work);
    })();
  }, []);

  return (
    <Container>
      <Grid sx={{ my: 2 }} container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ display: { xs: "block", md: "flex" } }}>
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", md: 151 },
                height: { xs: 240, md: "auto" },
                objectPosition: { xs: "center top", md: "center" },
              }}
              image={work?.image}
              alt={"Image " + work?.id}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 1 auto" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  margin="normal"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "75ch",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {work?.name}
                </Typography>
                <Typography
                  gutterBottom
                  margin="normal"
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                  {work?.author}
                </Typography>
                <Stack
                  direction="row"
                  sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
                  spacing={0.5}
                >
                  {work?.genres.map((genre) => (
                    <Chip sx={{ justifyItems: "center" }} label={genre} />
                  ))}
                </Stack>
                <Paper elevation={0} sx={{ py: 3, px: 2, my: 1 }}>
                  <Typography component="p">{work?.sinopse}</Typography>
                </Paper>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
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
                Capítulos
              </Typography>
              <Paper elevation={0} sx={{ my: 1 }}>
                <List
                  sx={{
                    width: "100%",
                  }}
                  aria-label="contacts"
                >
                  {work?.chapters ? (
                    work?.chapters
                      .map((chapter, i) => (
                        <ListItem
                          disablePadding
                          secondaryAction={
                            <ListItemText
                              color="text.secondary"
                              primary={chapter?.date}
                            />
                          }
                        >
                          <ListItemButton>
                            <ListItemText primary={chapter?.title} />
                          </ListItemButton>
                        </ListItem>
                      ))
                      .reverse()
                  ) : (
                    <ListItem disablePadding>
                      <ListItemText primary="Não há capítulos lançados para essa obra..." />
                    </ListItem>
                  )}
                </List>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Preview;
