"""本地静态预览（多线程 + no-cache），避免单线程卡死"""
import http.server
import socketserver
import sys
import os

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8097
DIRECTORY = sys.argv[2] if len(sys.argv) > 2 else r"C:\Users\张延飞\WorkBuddy\2026-07-30-15-19-42\foreign-trade-i18n\dist"


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, format, *args):
        pass  # 静默

    def handle(self):
        # 设置连接超时，避免单个慢连接阻塞整个进程
        self.connection.settimeout(30)
        try:
            super().handle()
        except Exception:
            pass


class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True
    request_queue_size = 64


if __name__ == "__main__":
    os.chdir(DIRECTORY)
    httpd = ThreadingHTTPServer(("0.0.0.0", PORT), NoCacheHandler)
    print(f"serving {DIRECTORY} at http://localhost:{PORT}/ (no-cache, threaded)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
