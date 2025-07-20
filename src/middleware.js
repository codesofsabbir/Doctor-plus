import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
const { auth } = NextAuth(authConfig);
import { LOGIN, ROOT, PATIENT_ROUTES, DOCTOR_ROUTES } from "@/lib/routes";
export async function middleware(request) {
  const { nextUrl } = request;
  const session = await auth();
  const isAuthenticated = !!session?.user;
  const userRole = session?.user?.role;
  const path = nextUrl.pathname;
  if (isAuthenticated) {
    if (
      userRole === "patient" &&
      DOCTOR_ROUTES.some((route) => path.startsWith(route))
    ) {
      return NextResponse.redirect(new URL("/patient-dashboard", request.url));
    }
    if (
      userRole === "doctor" &&
      PATIENT_ROUTES.some((route) => path.startsWith(route))
    ) {
      return NextResponse.redirect(new URL("/doctor-dashboard", request.url));
    }
  }
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL(LOGIN, request.url));
  }
  // return NextResponse.next();
}

export const config = {
  matcher: [
    "/patient-dashboard/:path*",
    "/patient-appoinment/:path*",
    "/patient-medical-records/:path*",
    "/prescriptions/:path*",
    "/patient-profile-setting/:path*",
    "/patient-support/:path*",
    "/doctor-dashboard/:path*",
    "/doctor-appoinment/:path*",
    "/patient-list/:path*",
    "/doctor-profile-setting/:path*",
    "/doctor-support/:path*",
  ],
};
