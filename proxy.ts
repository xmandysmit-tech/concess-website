import { NextRequest, NextResponse } from "next/server";

const PASSWORD = "web26";
const COOKIE = "concess_access";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow the login page and its POST action through
  if (pathname === "/login") return NextResponse.next();

  // Check cookie
  if (req.cookies.get(COOKIE)?.value === PASSWORD) return NextResponse.next();

  // Redirect to login
  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = "/login";
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|images).*)"],
};
