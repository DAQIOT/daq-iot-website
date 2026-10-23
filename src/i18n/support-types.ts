/**
 * 技术支持资源页（文档中心 / RMA 服务 / 培训资源）三语定义
 *
 * - 服务与支持页「技术支持」三张卡片通过 link 字段跳到 /{lang}/support/{key}
 * - 内容来自内容集合 resources（src/content/resources），category 字段存这里的 key
 * - 后台「⑦ 资源库」的 category 下拉选项也对应这三个 key
 */
export interface SupportType {
  key: 'docs' | 'rma' | 'training';
  zh: string;
  en: string;
  de: string;
  zhDesc: string;
  enDesc: string;
  deDesc: string;
}

export const SUPPORT_TYPES: SupportType[] = [
  {
    key: 'docs',
    zh: '文档中心',
    en: 'Documentation',
    de: 'Dokumentation',
    zhDesc: '产品手册、接线图、配置指南与 API 文档',
    enDesc: 'Product manuals, wiring diagrams, configuration guides and API docs',
    deDesc: 'Produkthandbücher, Schaltpläne, Konfigurationsleitfäden und API-Dokumentation'
  },
  {
    key: 'rma',
    zh: 'RMA 服务',
    en: 'RMA Service',
    de: 'RMA-Service',
    zhDesc: '售后返修与质保流程，快速响应故障设备',
    enDesc: 'After-sales repair and warranty process with fast response for faulty devices',
    deDesc: 'After-Sales-Reparatur und Garantieprozess mit schneller Reaktion auf defekte Geräte'
  },
  {
    key: 'training',
    zh: '培训资源',
    en: 'Training Resources',
    de: 'Schulungsressourcen',
    zhDesc: '在线视频与现场培训，提升运维能力',
    enDesc: 'Online videos and on-site training to boost O&M capability',
    deDesc: 'Online-Videos und Vor-Ort-Schulungen zur Stärkung der O&M-Kompetenz'
  }
];

export function supportTypeByKey(key: string): SupportType | undefined {
  return SUPPORT_TYPES.find((t) => t.key === key);
}

export function supportTypeLabel(t: SupportType, lang: string): string {
  return (lang === 'zh' ? t.zh : lang === 'de' ? t.de : t.en) || t.zh;
}

export function supportTypeDesc(t: SupportType, lang: string): string {
  return (lang === 'zh' ? t.zhDesc : lang === 'de' ? t.deDesc : t.enDesc) || t.zhDesc;
}
