export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#0d1117",
      color: "#ffffff",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>
        🚀 Welcome to HyperLearn AI
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "20px" }}>
        Your AI-powered personal learning assistant. Summarizing, explaining, and helping you learn smarter!
      </p>

      <a href="/chat">
        <button style={{
          padding: "12px 24px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#0d1117",
          backgroundColor: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#ddd"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#ffffff"}
        >
          Start Learning
        </button>
      </a>

      <p style={{ fontSize: "0.9rem", marginTop: "20px", opacity: "0.8" }}>
        Made with ❤️ for students, researchers, and lifelong learners.
      </p>

    </div>
  );
}
