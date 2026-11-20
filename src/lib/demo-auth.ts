/**
 * DEMO AUTH — NO ES PRODUCCIÓN
 * --------------------------
 * Este módulo implementa un acceso de demostración usando sessionStorage.
 * NO es autenticación segura. En producción se debe sustituir por:
 * - NextAuth / Auth.js, Clerk, Supabase Auth, o similar
 * - Credenciales hasheadas en servidor
 * - Sesiones firmadas / JWT con httpOnly cookies
 * - Variables de entorno (nunca secretos en el cliente)
 *
 * Contraseña de demo actual: solo para presentaciones comerciales.
 */

const DEMO_SESSION_KEY = "tipico-business-demo-session";
const DEMO_PASSWORDS = ["demo", "tipico2026"]; // Solo demo. Eliminar en producción.

export function isDemoAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(DEMO_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function demoLogin(password: string): { ok: boolean; message: string } {
  if (DEMO_PASSWORDS.includes(password.trim().toLowerCase())) {
    try {
      sessionStorage.setItem(DEMO_SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    return { ok: true, message: "Acceso demo concedido (sesión de navegador)" };
  }
  return {
    ok: false,
    message: "Contraseña incorrecta. Usa la contraseña de demostración.",
  };
}

export function demoLogout() {
  try {
    sessionStorage.removeItem(DEMO_SESSION_KEY);
  } catch {
    /* ignore */
  }
}
