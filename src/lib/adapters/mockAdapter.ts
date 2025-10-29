import type {
  Comment,
  CommentsAdapter,
  CreateCommentDTO,
  UpdateCommentDTO,
} from "../types";
import { mockComments } from "../utils/mockData";

export function createMockAdapter(): CommentsAdapter {
  // In-memory storage - simulira bazu podataka
  let comments: Comment[] = [...mockComments];

  return {
    fetchComments: async () => {
      // Simuliraj network delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      console.log("📥 Fetching comments...", comments.length);
      return [...comments];
    },

    createComment: async (data: CreateCommentDTO) => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newComment: Comment = {
        id: Math.random().toString(36).substr(2, 9),
        content: data.content,
        authorId: data.authorId,
        authorName: data.authorName,
        authorAvatar: data.authorAvatar,
        createdAt: new Date(),
        parentId: data.parentId || null,
        metadata: data.metadata,
      };

      comments.push(newComment);
      console.log("✅ Comment created:", newComment);

      return newComment;
    },

    updateComment: async (id: string, data: UpdateCommentDTO) => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const comment = comments.find((c) => c.id === id);
      if (!comment) {
        throw new Error(`Comment ${id} not found`);
      }

      comment.content = data.content;
      comment.updatedAt = new Date();

      console.log("✏️ Comment updated:", comment);
      return comment;
    },

    deleteComment: async (id: string) => {
      await new Promise((resolve) => setTimeout(resolve, 500));

      comments = comments.filter((c) => c.id !== id);
      console.log("🗑️ Comment deleted:", id);
    },
  };
}
