import { NextRequest, NextResponse } from "next/server";
import PocketBase from "pocketbase";

import { getPocketbaseCookie } from "./lib/pbaseServer";

const adminPaths = ["/admin", "/testing"];
const authorizedPaths = ["/", "/profile"];

export async function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl.clone();

  const authStore = await getPocketbaseCookie();

  if (!authStore) {
    nextUrl.pathname = "/auth/login";

    return NextResponse.redirect(nextUrl);
  }
}

export const config = {
  matcher: ["/admin", "/testing", "/", "/profile"]
};
