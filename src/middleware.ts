// middleware.ts (na raiz do projeto)
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Verifica se está em modo de manutenção
  const isMaintenanceMode = true;

  // Se não está em manutenção, continua normalmente
  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  // Se já está na página de manutenção, não redireciona novamente
  if (request.nextUrl.pathname === "/manutencao") {
    return NextResponse.next();
  }

  // Permite acesso à página de registro de visita mesmo em manutenção
  if (
    request.nextUrl.pathname === "/registro-visita" ||
    request.nextUrl.pathname === "/registro-graca" ||
    request.nextUrl.pathname === "/terms" ||
    request.nextUrl.pathname === "/privacity"
  ) {
    return NextResponse.next();
  }

  // Permite acesso a arquivos estáticos necessários para a página de manutenção
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/favicon") ||
    request.nextUrl.pathname.startsWith("/icons")
  ) {
    return NextResponse.next();
  }

  // Redireciona todas as outras rotas para a página de manutenção
  return NextResponse.redirect(new URL("/manutencao", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
