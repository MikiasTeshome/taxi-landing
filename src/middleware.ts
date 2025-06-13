// middleware.ts
import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
  publicRoutes: ['/', '/sign-in', '/sign-up'], // Add other public routes if needed
});

export const config = {
  matcher: ['/(.*)'], // Applies middleware only to /dashboard routes
};
