require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

const {UserRoutes, AuthenticationRoutes, ReservationRoutes, StayRoutes, TourRoutes} = require("./src/routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth' , AuthenticationRoutes);

app.use('/users' , UserRoutes);
app.use('/reservations' , ReservationRoutes);
app.use('/stays' , StayRoutes);
app.use('/tours' , TourRoutes);

app.listen(PORT, () =>
  console.log(`server is running at : http://localhost:${PORT}`)
);