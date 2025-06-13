// middleware.ts
import { authMiddleware } from '@clerk/nextjs/server'; // ✅ Edge-safe

export default authMiddleware({
  publicRoutes: ['/', '/sign-in', '/sign-up'],
});

export const config = {
  matcher: ['/dashboard(.*)'],
};
