import React from "react";
import { Box, Paper, Rating  } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function ItemsListRate({ productRate }) {
  const theme = useTheme();
  const colorTitle = theme.palette.warning.light;
  return (
    <Paper elevation={6}>
      <List sx={{ width: "100%", backgroundColor: "#dafcfc" }}>
        <Typography
          variant="h6"
          align="center"
          color={colorTitle}
          component="div"
          sx={{ fontWeight: 600 , textDecoration:'underline' }}
        >
          MORE RATE
        </Typography>
        {productRate.map((item, index) => {
          return (
            <Box key={item.id} display={'flex'} flexDirection={'column'} minWidth={180}>
              <ListItem >
                <ListItemAvatar>
                  <Avatar
                    alt={item.title}
                    src={item.image}
                    sx={{xs:{width: 58, height: 58}, md:{width: 48, height: 48} }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title.split(" ", 2).join("")}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        align="center"
                        sx={{
                          color: "text.primary",
                          maxWidth: "100%",
                          display: "inline",
                          fontWeight: 600,
                        }}
                      >
                        Rate:
                      </Typography>
                      <Rating name="size-small" readOnly precision={0.5} defaultValue={3.5} size="small" />
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index < productRate.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </Box>
          );
        })}
      </List>
    </Paper>
  );
}

export default ItemsListRate;
