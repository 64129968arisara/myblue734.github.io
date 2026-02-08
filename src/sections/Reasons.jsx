export default function Reasons() {
  const reasons = [
    "เค้าอยากให้อ้วนได้งานตามที่อ้วนหวังนะคับ เค้ารู้ว่าอ้วนตั้งใจและเต็มที่กับมันมาตลอด เค้ารู้ว่าคนเก่งของเค้านั้นเก่งขนาดไหน",
    "เค้าอยากให้อ้วนยิ้มเยอะ ๆ ถึงวันนี้มันจะเป็นเรื่องๆแย่ ๆ แต่ไม่เป็นไร เค้าจะอยู่ข้างอ้วน",
    "เค้าอยากให้อ้วนอยู่กับเค้าไปตลอดเลยนะคับ ไม่ว่าจะเจอเรื่องอะไร",
    "ขอบคุณอ้วนที่ทำให้เค้ารู้สึกอยากเป็นคนที่ดี(นิดหน่อย)",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",

        display: "flex",
        justifyContent: "center",
        padding: "100px 20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "850px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(30px, 6vw, 46px)",
            marginBottom: "80px",
            color: "#ff7b93",
            letterSpacing: "1px",
          }}
        >
          วาเลนไทน์ปีนี้ 💗
        </h2>

        {reasons.map((text, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              background: "#ffffff",
              borderRadius: "26px",
              padding: "34px 28px 34px 90px",
              marginBottom: "36px",
              fontSize: "20px",
              lineHeight: 1.9,
              boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
              border: "2px solid #ffd3dc",
              transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
            }}
          >
            {/* วงกลมเลข */}
            <div
              style={{
                position: "absolute",
                left: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #ff9fb3, #ff7b93)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "18px",
                boxShadow: "0 6px 16px rgba(255,123,147,0.4)",
              }}
            >
              {index + 1}
            </div>

            {/* ไอคอนหัวใจมุมขวาบน */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "18px",
                fontSize: "20px",
                opacity: 0.3,
              }}
            >
              💖
            </div>

            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
