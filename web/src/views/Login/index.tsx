import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormGroup,
  Grid,
  Link,
  Stack,
  Typography,
  TextField,
} from "@mui/material";

import { useAuth } from "../../contexts/auth";

const Login = () => {
  const { Login } = useAuth();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const el = e.target.elements;
    const user = {
      login: el.login.value,
      password: el.password.value,
    };

    (async () => {
      let r = await Login(user);
      if (r.status == 200) return (window.location.href = "/");
    })();
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card sx={{ minWidth: 415 }} color="secondary">
            <CardContent>
              <Typography
                align="center"
                variant="h5"
                component="div"
                margin="normal"
              >
                Entrar
              </Typography>
              <FormControl
                id="formLogin"
                sx={{ my: 3 }}
                component="form"
                variant="standard"
                onSubmit={handleLogin}
                fullWidth
              >
                <FormGroup>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      name="login"
                      label="Usuário"
                      variant="outlined"
                      autoComplete="off"
                      autoFocus
                      required
                    />
                    <TextField
                      fullWidth
                      name="password"
                      type="password"
                      label="Senha"
                      variant="outlined"
                      required
                    />
                  </Stack>
                </FormGroup>
              </FormControl>
              <Typography align="center" variant="body2" color="text.secondary">
                Não possui uma conta?{" "}
                <Link underline="none" href="#">
                  Clique aqui
                </Link>
                !
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                form="formLogin"
                variant="contained"
                fullWidth
              >
                Entrar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
