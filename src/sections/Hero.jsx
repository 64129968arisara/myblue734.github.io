import { motion } from "framer-motion";
import img1 from "../assets/images/pic1.jpg";
import img2 from "../assets/images/pic2.jpg";
import img3 from "../assets/images/pic3.jpg";
import img4 from "../assets/images/pic4.jpg";
import img5 from "../assets/images/pic5.jpg";
import img6 from "../assets/images/pic6.jpg";

export default function Hero() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div style={wrapper}>
      <div style={title}>ขอบคุณที่โลกนี้มีอ้วน 📸</div>

      <div style={grid}>
        {images.map((src, i) => {
          return (
            <motion.div
              key={i}
              style={{ ...film }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
              }}
            >
              <div style={holes} />
              <img src={src} alt="" style={image} />
              <div style={holes} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ================= style ================= */

const wrapper = {
  minHeight: "100vh",
  padding: "100px 20px",
  background: "linear-gradient(to bottom, #fff6f3, #ffeef3)",
};

const title = {
  textAlign: "center",
  fontSize: "clamp(28px,5vw,44px)",
  color: "#ff6f8e",
  marginBottom: 80,
  fontWeight: "bold",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 40,
  maxWidth: 780,
  margin: "0 auto",
  justifyItems: "center",
};

if (window.innerWidth < 900) {
  grid.gridTemplateColumns = "repeat(2, 1fr)";
}
if (window.innerWidth < 600) {
  grid.gridTemplateColumns = "repeat(1, 1fr)";
}

/* ฟิล์มสีขาว */
const film = {
  background: "#ffffff",
  padding: "22px 18px",
  borderRadius: 20,
  boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
  width: 260,
  transition: "0.3s",
};

/* รูฟิล์ม */
const holes = {
  height: 12,
  background:
    "repeating-linear-gradient(to right, #ddd 0 16px, transparent 16px 32px)",
  margin: "10px 0",
  borderRadius: 6,
};

const image = {
  width: "100%",
  height: 260,
  objectFit: "cover",
  borderRadius: 12,
};
