import Hero from "../sections/Hero";
import ValentineGate from "../sections/ValentineGate";
import Timeline from "../sections/Timeline";
import Reasons from "../sections/Reasons";
import Letter from "../sections/Letter";
import ValentineBackground from "../sections/ValentineBackground";
export default function LoveStory() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "900px" }}>
        <ValentineGate>
          <ValentineBackground />
          <Hero />
          <Timeline />
          <Reasons />
          <Letter />
        </ValentineGate>
      </div>
    </div>
  );
}
