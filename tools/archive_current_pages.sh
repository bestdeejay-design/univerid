#!/bin/bash
# Archive current legacy pages before rewrite
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
ARCHIVE_ROOT="$ROOT_DIR/docs/archive"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
ARCHIVE_DIR="$ARCHIVE_ROOT/$TIMESTAMP"
mkdir -p "$ARCHIVE_DIR"
cp -r "$ROOT_DIR/univerid/pages" "$ARCHIVE_DIR/legacy_pages" 2>/dev/null || true
cp -r "$ROOT_DIR/univerid/css" "$ARCHIVE_DIR/legacy_css" 2>/dev/null || true
cp -r "$ROOT_DIR/univerid/images" "$ARCHIVE_DIR/legacy_images" 2>/dev/null || true
tar czf "$ARCHIVE_ROOT/legacy-$TIMESTAMP.tar.gz" -C "$ROOT_DIR" univerid 2>/dev/null || true
echo "Archived legacy pages and assets to $ARCHIVE_DIR and legacy-$TIMESTAMP.tar.gz"
