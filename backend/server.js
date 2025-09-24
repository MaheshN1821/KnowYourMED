import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import handleUserAuth from "./routes/user.auth.route.js";
import handlePharmacistAuth from "./routes/pharmacist.auth.route.js";
import handleRefreshToken from "./routes/refreshToken.route.js";
import handleTranslation from "./routes/translate.route.js";
import handleQrCode from "./routes/qrcode.route.js";
import handleMedicineInfo from "./routes/medicineInfo.route.js";
import handlePill from "./routes/addPill.route.js";
import handleManufactureInfo from "./routes/manufacture.route.js";
import handleContact from "./routes/contact.route.js";

dotenv.config();
const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "https://know-your-med-lake.vercel.app",
      "https://www.know-your-med-lake.vercel.app",
      "https://know-your-medicine.vercel.app",
      "https://www.know-your-medicine.vercel.app",
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  maxAge: 86400,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth/user", handleUserAuth);
app.use("/auth/manufacture", handlePharmacistAuth);
app.use("/refreshToken", handleRefreshToken);
app.use("/translate", handleTranslation);
app.use("/generate-qr", handleQrCode);
app.use("/medicine", handleMedicineInfo);
app.use("/maintain", handlePill);
app.use("/manufacture", handleManufactureInfo);
app.use("/contact", handleContact);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3300;

if (!process.env.MONGO_URL) {
  console.error("MONGO_URL is not defined in environment variables!");
}

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
