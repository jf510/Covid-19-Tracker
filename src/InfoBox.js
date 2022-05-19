import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@mui/material";

function InfoBox({ title, cases, total }) {
  return (
    <Card className="infobox">
      <CardContent>
        <Typography className="infobox__title" color="textSecondary">
          {title}
        </Typography>

        <h2 className="infobox__cases">{cases} today</h2>

        <Typography className="infobox__total" color="textSecondary">
          {total} total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
