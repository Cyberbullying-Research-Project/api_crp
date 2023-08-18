// Crear modelos con ORMS para monogoDB 

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user', // Rol de usuario normal
  MODERATOR = 'moderator', // Moderador
  GUEST = 'guest', // Invitado o usuario no autenticado
  SUPPORT = 'support', // Soporte técnico
  MANAGER = 'manager', // Gerente o supervisor
  CONTRIBUTOR = 'contributor', // Colaborador o contribuyente
  EDITOR = 'editor', // Editor de contenido
  ANALYST = 'analyst', // Analista de datos o informes
  MARKETING = 'marketing', // Equipo de marketing
}

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    image: string;
    role: UserRole;
    // created_at: Date;
    // updated_at: Date;
    // deleted_at: Date;
}