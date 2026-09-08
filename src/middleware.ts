import { defineMiddleware } from 'astro:middleware';

// Astro 开发服务器不自动把 /admin/ 解析为 /admin/index.html（public 子目录）。
// 这里拦截 /admin 和 /admin/ 请求，重定向到 /admin/index.html。
export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  if (pathname === '/admin' || pathname === '/admin/') {
    return Response.redirect(new URL('/admin/index.html', context.url), 302);
  }
  return next();
});
