import { motion } from "framer-motion";
import { useState } from "react";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {!open ? (
        <motion.div
          onClick={() => setOpen(true)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          style={openBtn}
        >
          อย่าลืมอ่านกงนี้นะจ้ะ 💌
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={card}
        >
          {/* ปุ่มปิด */}
          <div style={closeBtn} onClick={() => setOpen(false)}>
            ✕
          </div>

          {/* หัวข้อ */}
          <div style={title}>กดอ่าน = โอนเงินมาด้วย 200🥰🥰</div>

          {/* เส้นคั่น */}
          <div style={divider} />

          {/* เนื้อหา */}
          <div style={content}>
            <p>
              เค้ามีอะรัยอยากจะบอกอ้วนดั้ว 😙
              เค้าอยากขอบคุณอ้วนมากที่ยังอยู่ข้างเค้า😍
              ถึงเค้าจะเอาแต่ใจ(ไม่มาก) ^-^ ขี้น้อยใจ(ตรงไหน)
              วีนบ่อย(มึงน่ะแหละ)
            </p>

            <p>
              อ้วนเป็นคนที่ทำให้วันของเค้าพิเศษมาก ๆ ถึงอ้วนจะกวนตีนเค้าทุกวัน
              งงอะ ทัมมัย🫤🫤
            </p>

            <p>
              นี่เป็นครั้งแรกเลยที่เค้าทำอะไรแบบนี้ กิ้ดดดดด เขิรอะ ไม่ชิน
              เค้าทำรัยปัย แต่เค้าตั้งใจม้ากมากนะ
              เค้าหวังว่าอ้วนจะดีใจที่ได้เห็น
            </p>

            <p>
              {" "}
              แระก้สุดท้ายเค้าอยากให้อ้วนมีความสุขมากๆ ยิ้มเย้อๆ
              ขอบคุณที่เกิดมาให้เค้ารักนะคับ{" "}
            </p>
          </div>

          {/* เส้นคั่นล่าง */}
          <div style={divider} />

          <div style={footer}>สุดท้ายแยะ ขอตังสองร้อยคับ เอิ้กอ้าก</div>
          <div style={footer}>รักอ้วนมากมากยัยเด่กเร้ก 💖</div>
        </motion.div>
      )}
    </div>
  );
}

const openBtn = {
  padding: "18px 36px",
  borderRadius: 50,
  background: "#ffb7c5",
  color: "white",
  fontSize: 18,
  cursor: "pointer",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  fontWeight: "bold",
};

const card = {
  position: "relative",
  width: "100%",
  maxWidth: 720,
  background: "#fffaf7",
  borderRadius: 28,
  border: "2px solid #ffd3dc",
  padding: "48px 28px",
  boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
  color: "#5b3b36",
};

const title = {
  fontSize: "clamp(24px, 4vw, 34px)",
  fontWeight: "bold",
  color: "#ff7b93",
  textAlign: "center",
  marginBottom: 24,
};

const content = {
  fontSize: "clamp(16px, 3.8vw, 18px)",
  lineHeight: 2.1,
  letterSpacing: "0.3px",
};

const divider = {
  height: 2,
  background: "#ffe0e6",
  borderRadius: 10,
  margin: "28px 0",
};

const footer = {
  textAlign: "center",
  marginTop: 10,
  color: "#ff7b93",
  fontWeight: "bold",
  fontSize: 18,
};

const closeBtn = {
  position: "absolute",
  top: 16,
  right: 18,
  cursor: "pointer",
  fontSize: 18,
  opacity: 0.5,
};
