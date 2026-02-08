export default function ValentinePage() {
  return (
    <div style={wrapper}>
      {/* พลุ */}
      <div style={{ ...firework, left: "10%", animationDelay: "0s" }} />
      <div style={{ ...firework, left: "30%", animationDelay: "1.5s" }} />
      <div style={{ ...firework, left: "50%", animationDelay: "3s" }} />
      <div style={{ ...firework, left: "70%", animationDelay: "4.5s" }} />
      <div style={{ ...firework, left: "85%", animationDelay: "6s" }} />

      <div style={centerCard}>
        <h1 style={title}>Happy Valentine’s Day💖</h1>
        <p style={desc}>
          With you, every day feels like Valentine’s Day. I’m so lucky to have
          you.
        </p>
      </div>

      <style>{keyframes}</style>
    </div>
  );
}

/* =============== STYLE =============== */

const wrapper = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  display: "grid",
  placeItems: "center",
};

const centerCard = {
  zIndex: 2,
  textAlign: "center",
  padding: "40px 24px",
  borderRadius: 28,
  background: "#ffffffcc",
  backdropFilter: "blur(10px)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
};

const title = {
  fontSize: "clamp(28px, 6vw, 42px)",
  color: "#ff6f8e",
  marginBottom: 12,
};

const desc = {
  fontSize: "clamp(16px, 4vw, 20px)",
  color: "#b66b7a",
};

const firework = {
  position: "absolute",
  bottom: "-20px",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "#ff6f8e",
  boxShadow: `
    0 0 12px #ff6f8e,
    0 0 30px #ff8fb1,
    0 0 60px #ffc1d1
  `,
  animation: "shoot 7s linear infinite",
};

const keyframes = `
@keyframes shoot {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  70% {
    transform: translateY(-90vh) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(0.8);
    opacity: 0;
  }
}
`;
