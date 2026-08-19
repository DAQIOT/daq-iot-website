#!/usr/bin/env bash
# backup-aiiot.sh —— aiiot 网站「大改动前」双份备份工具（铁律①）
#
# 用法:
#   bash backup-aiiot.sh "改了产品页样式"
#   bash backup-aiiot.sh            # 不传描述时默认用 backup
#
# 行为:
#   1) 把整个项目打成 tar.gz 归档，命名 aiiot-website_日期_时间_描述.tar.gz
#   2) 双份落盘: C盘 一份 + F盘 一份（满足铁律①「双份 C盘+F盘」）
#   3) 自动排除可重新生成的产物(node_modules / dist / .astro / .git)，保持精简
#
# 命名规范:
#   归档名 = aiiot-website_{YYYY-MM-DD}_{HHMM}_{描述}.tar.gz
#   例:     aiiot-website_2026-08-18_0934_改了产品页样式.tar.gz
set -euo pipefail

DESC="${1:-backup}"
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
STAMP="$(date '+%Y-%m-%d_%H%M')"
NAME="aiiot-website_${STAMP}_${DESC}"

DEST_C="/c/Users/张延飞/backup/aiiot-website"
DEST_F="/f/上海数采/backup/aiiot-website"

mkdir -p "$DEST_C" "$DEST_F"

echo ">> 正在备份项目: $PROJECT_DIR"
echo ">> 命名: $NAME.tar.gz"

# C盘
tar czf "$DEST_C/$NAME.tar.gz" \
  --exclude=node_modules --exclude=dist --exclude=.astro --exclude=.git \
  -C "$PROJECT_DIR" .
echo "   C盘 -> $DEST_C/$NAME.tar.gz"

# F盘
tar czf "$DEST_F/$NAME.tar.gz" \
  --exclude=node_modules --exclude=dist --exclude=.astro --exclude=.git \
  -C "$PROJECT_DIR" .
echo "   F盘 -> $DEST_F/$NAME.tar.gz"

echo ">> 完成。双份备份已生成。"
