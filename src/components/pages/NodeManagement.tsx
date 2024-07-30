import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

const NodeManagement: React.FC = () => {
  const handleAddNode = () => {
    // ノード追加の処理
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h4" component="h2" gutterBottom>
          Node Management
        </Typography>
        <Typography variant="body1" paragraph>
          Manage your Web3 nodes here.
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleAddNode}>
            Add Node
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NodeManagement;
