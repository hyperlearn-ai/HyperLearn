import { useState } from "react";

const ChatComponent = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [mode, setMode] = useState("general"); // Default mode

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        const res = await fetch("http://127.0.0.1:8000/ai/", {  // Update this URL after deploying backend
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_query: query, mode })
        });

        const data = await res.json();
        setResponse(data.response);
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
            <h2>Ask HyperLearn AI</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask a question..."
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />
                <select value={mode} onChange={(e) => setMode(e.target.value)} style={{ width: "100%", padding: "10px" }}>
                    <option value="general">General</option>
                    <option value="summarize">Summarize</option>
                    <option value="explain">Explain</option>
                    <option value="example">Example</option>
                    <option value="reformulate">Reformulate</option>
                    <option value="links">Useful Links</option>
                    <option value="quiz">Quiz</option>
                </select>
                <button type="submit" style={{ width: "100%", padding: "10px", marginTop: "10px" }}>Ask</button>
            </form>
            {response && (
                <div style={{ marginTop: "20px", padding: "15px", background: "#f4f4f4", borderRadius: "5px" }}>
                    <h3>AI Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default ChatComponent;
