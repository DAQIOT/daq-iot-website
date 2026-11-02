/**
 * 全站字体样式（typography）—— 后台「网站基础文案 → 字体样式」配置
 *
 * 用户在后台为某个文本层级填写了字号和/或颜色后，这里生成对应 CSS 规则，
 * 由 BaseLayout 注入 <head>。规则带 !important 以覆盖 Tailwind utility 默认样式。
 *
 * 设计原则：留空 = 完全不生成规则 = 前台保持原样，零风险。
 */

/** 层级名 → 命中的 CSS 选择器 */
const TYPO_TARGETS: Record<string, string> = {
  body: 'body',
  heroEyebrow: '.hero-eyebrow',
  heroTitle: '.hero-title',
  heroSubtitle: '.hero-subtitle',
  sectionEyebrow: '.sec-eyebrow',
  sectionTitle: '.sec-title',
  sectionDesc: '.sec-desc',
  cardTitle: 'h3',
  nav: '.nav-link',
  footer: 'footer p, footer li',
};

/** 防止用户输入破坏 <style> 结构或注入 HTML */
function sanitize(v: string): string {
  return v.replace(/[<>"'`\\{}]/g, '').trim();
}

function isValidSize(v: string): boolean {
  return /^[0-9.]+(px|rem|em|pt|%|vw)$/i.test(v) || /^calc\(/i.test(v);
}

function isValidColor(v: string): boolean {
  return (
    /^#[0-9a-f]{3,8}$/i.test(v) ||
    /^rgba?\(\s*[0-9.\s,%]+\)$/i.test(v) ||
    /^[a-z]+$/i.test(v) // CSS 命名色：white、red 等
  );
}

/** 传入 settings 的 typography 数组，返回可注入的 CSS 文本（可能为空串） */
export function buildTypographyCss(typo: unknown): string {
  if (!Array.isArray(typo)) return '';
  const rules: string[] = [];
  for (const raw of typo) {
    if (!raw || typeof raw !== 'object') continue;
    const it = raw as Record<string, unknown>;
    const name = String(it.name || '');
    const sel = TYPO_TARGETS[name];
    if (!sel) continue;

    const decls: string[] = [];
    const fs = sanitize(String(it.fontSize || ''));
    const color = sanitize(String(it.color || ''));
    if (fs && isValidSize(fs)) decls.push(`font-size:${fs}!important`);
    if (color && isValidColor(color)) decls.push(`color:${color}!important`);
    if (decls.length) rules.push(`${sel}{${decls.join(';')}}`);
  }
  return rules.join('\n');
}
