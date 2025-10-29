import type { Comment } from "../types";

export const mockComments: Comment[] = [
  {
    id: "1",
    content: "This is a test comment",
    authorId: "user-1",
    authorName: "John Doe",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
    createdAt: new Date("2024-10-20T10:00:00"),
    parentId: null,
  },
  {
    id: "2",
    content: "Another test comment",
    authorId: "user-2",
    authorName: "Jane Smith",
    authorAvatar: "https://i.pravatar.cc/150?img=2",
    createdAt: new Date("2024-10-21T14:30:00"),
    parentId: null,
  },
];
