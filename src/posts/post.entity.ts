// Crear modelos con ORMS para monogoDB

enum PostStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
    DELETED = 'DELETED',
}

export class Post{
  title: string;
  body: string;
  // user_id: User;
  status: PostStatus
  // created_at timestamp
  // resources: Resource[];
}