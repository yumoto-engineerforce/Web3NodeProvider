import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";

const TransactionHistory: React.FC = () => {
  const transactions = [
    { id: 1, detail: "Transaction 1" },
    { id: 2, detail: "Transaction 2" },
    { id: 3, detail: "Transaction 3" },
  ];

  return (
    <Container>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h4" component="h2" gutterBottom>
          Transaction History
        </Typography>
        <List>
          {transactions.map((transaction) => (
            <ListItem key={transaction.id}>
              <ListItemText primary={transaction.detail} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TransactionHistory;
