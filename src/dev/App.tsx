// src/dev/App.tsx
import { useEffect, useState } from "react";
import { Comment, createMockAdapter } from "../lib";

function App() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const adapter = createMockAdapter();

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await adapter.fetchComments();
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, []);

  if (loading) {
    return <div style={{ padding: "2rem" }}>Loading...</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Comments ({comments.length})</h1>

      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
          }}
        >
          <strong>{comment.authorName}</strong>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
