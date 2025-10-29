// src/lib/components/Comments/Comments.tsx
import React from "react";
import type { CommentsProps } from "../../types";

export const Comments: React.FC<CommentsProps> = ({
  children,
  className = "",
}) => (
  <div className={`react-comments ${className}`}>
    <h2>Comments Library</h2>
    <p>Setup complete! 🎉</p>
    {children}
  </div>
);
