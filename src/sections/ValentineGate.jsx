import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-02-14T00:00:00");

export default function ValentineGate({ children }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = TARGET_DATE - new Date();
    if (diff <= 0) return null;

    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  if (!timeLeft) return children;

  return (
    <div style={wrapper}>
      <FloatingHearts />

      <div style={card}>
        <h2 style={title}>นับถอยหลัง 💗</h2>

        <div style={timerRow}>
          <TimeBox value={timeLeft.hours} label="ชั่วโมง" />
          <span style={colon}>:</span>
          <TimeBox value={timeLeft.minutes} label="นาที" />
          <span style={colon}>:</span>
          <TimeBox value={timeLeft.seconds} label="วินาที" />
        </div>

        <p style={hint}>ระบบจะเปิดทำการในวันที่ 14 กุมภาพันธ์ 2026</p>
      </div>

      {/* keyframes ใส่ตรงนี้ ปลอดภัย */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(-120vh) scale(1.4); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div style={timeBox}>
      <div style={timeNumber}>{String(value).padStart(2, "0")}</div>
      <div style={timeLabel}>{label}</div>
    </div>
  );
}

/* ===== Hearts (no random) ===== */

function FloatingHearts() {
  return (
    <div style={heartContainer}>
      <div
        style={{ ...heart, left: "10%", animationDelay: "0s", fontSize: 18 }}
      >
        💖
      </div>
      <div
        style={{ ...heart, left: "30%", animationDelay: "2s", fontSize: 22 }}
      >
        💗
      </div>
      <div
        style={{ ...heart, left: "50%", animationDelay: "4s", fontSize: 20 }}
      >
        💘
      </div>
      <div
        style={{ ...heart, left: "70%", animationDelay: "1s", fontSize: 24 }}
      >
        💝
      </div>
      <div
        style={{ ...heart, left: "85%", animationDelay: "3s", fontSize: 26 }}
      >
        💖
      </div>
    </div>
  );
}

/* ===== Styles ===== */

const wrapper = {
  position: "relative",
  overflow: "hidden",
  minHeight: "100dvh",
  display: "grid",
  placeItems: "center",
  background: `
    radial-gradient(circle at 20% 30%, #ffd6e0 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, #ffe3ec 0%, transparent 40%),
    linear-gradient(to bottom, #fff0f5, #ffe6ee)
  `,
};

const card = {
  width: "min(92vw, 520px)",
  background: "#ffffffcc",
  borderRadius: "clamp(20px, 5vw, 32px)",
  padding: "clamp(28px, 6vw, 48px)",
  textAlign: "center",
  backdropFilter: "blur(10px)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
  zIndex: 2,
};

const title = {
  fontSize: "clamp(20px, 5vw, 28px)",
  color: "#ff6f8e",
  marginBottom: "clamp(20px, 5vw, 32px)",
};

const timerRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "clamp(8px, 3vw, 16px)",
  marginBottom: "clamp(16px, 4vw, 24px)",
};

const timeBox = {
  flex: 1,
  aspectRatio: "1 / 1",
  borderRadius: "clamp(12px, 3vw, 20px)",
  background: "#fff",
  border: "2px solid #ffb7c5",
  display: "grid",
  placeItems: "center",
};

const timeNumber = {
  fontSize: "clamp(22px, 6vw, 34px)",
  fontWeight: "bold",
  color: "#ff6f8e",
  lineHeight: 1,
};

const timeLabel = {
  fontSize: "clamp(10px, 3vw, 14px)",
  color: "#b66b7a",
  marginTop: 6,
  letterSpacing: 1,
};

const colon = {
  fontSize: "clamp(18px, 5vw, 28px)",
  color: "#ff6f8e",
};

const hint = {
  fontSize: "clamp(14px, 3.5vw, 16px)",
  color: "#b66b7a",
};

const heartContainer = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  overflow: "hidden",
  zIndex: 1,
};

const heart = {
  position: "absolute",
  bottom: "-40px",
  animation: "floatUp 10s linear infinite",
  opacity: 0.7,
};
