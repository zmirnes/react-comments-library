// src/lib/types/index.ts

// ============================================
// Core Comment Type
// ============================================
export interface Comment<TMeta = Record<string, unknown>> {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  parentId?: string | null;
  metadata?: TMeta;
}

// ============================================
// DTO (Data Transfer Objects)
// ============================================
export interface CreateCommentDTO {
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  parentId?: string | null;
  metadata?: Record<string, unknown>;
}

export interface UpdateCommentDTO {
  content: string;
}

// ============================================
// Adapter Interface
// ============================================
export interface CommentsAdapter<TComment = Comment> {
  fetchComments: () => Promise<TComment[]>;
  createComment: (data: CreateCommentDTO) => Promise<TComment>;
  updateComment: (id: string, data: UpdateCommentDTO) => Promise<TComment>;
  deleteComment: (id: string) => Promise<void>;
}

// ============================================
// Configuration
// ============================================
export interface CommentsConfig {
  adapter: CommentsAdapter;
  maxDepth?: number;
  sortOrder?: "asc" | "desc";
  enableOptimisticUpdates?: boolean;
}

// ============================================
// Component Props
// ============================================
export interface CommentsProps {
  children?: React.ReactNode;
  className?: string;
}
