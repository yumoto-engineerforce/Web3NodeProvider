import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Web3NodeProvider
        </Typography>
        <Typography variant="body1" paragraph>
          Manage your Web3 nodes easily and efficiently.
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" component={Link} to="/login" style={{ marginRight: '10px' }}>
            Login
          </Button>
          <Button variant="outlined" color="secondary" component={Link} to="/register">
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
