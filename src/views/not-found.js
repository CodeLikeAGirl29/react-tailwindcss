import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./not-found.css";

export default function Error() {
  const history = useHistory();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
             <p className="text"> The page you’re looking for doesn’t exist.</p>
            </Typography>
            <Button
              variant="contained"
              className="btn"
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1695949881/noti-oops.png"
              alt=""
              width={500}
              height={340}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
