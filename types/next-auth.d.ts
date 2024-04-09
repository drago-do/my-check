// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  /**
   * Extiende los tipos por defecto de la sesión de NextAuth
   */
  interface Session {
    userId?: string; // Opcional, dependiendo de tu caso de uso
    businessId?: string; // Opcional, dependiendo de tu caso de uso
  }

  /**
   * Extiende el tipo de usuario para incluir cualquier propiedad adicional que necesites.
   */
  interface User {
    userId?: string;
    businessId?: string;
  }
}
