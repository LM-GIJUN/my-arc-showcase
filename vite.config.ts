import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 개발 서버 설정
  server: {
    host: "::",
    port: 8080,
  },
  
  // 플러그인 설정
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  
  // 경로 별칭 설정
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // 빌드 설정 (배포 최적화)
  build: {
    // 빌드 결과물 디렉토리
    outDir: 'dist',
    
    // 소스맵 생성 (프로덕션에서는 비활성화)
    sourcemap: mode !== 'production',
    
    // 청크 크기 경고 임계값 (KB)
    chunkSizeWarningLimit: 1000,
    
    // 빌드 최적화 설정
    rollupOptions: {
      output: {
        // 청크 파일명 설정
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        
        // 수동 청크 분할 (선택사항)
        manualChunks: {
          // React 관련 라이브러리를 별도 청크로 분리
          'react-vendor': ['react', 'react-dom'],
          // UI 라이브러리 청크
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar'],
        },
      },
    },
    
    // 압축 설정
    minify: 'terser',
    terserOptions: {
      compress: {
        // 콘솔 로그 제거 (프로덕션)
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
  },
  
  // 기본 경로 설정 (GitHub Pages 배포용)
  base: process.env.NODE_ENV === 'production' ? '/my-arc-showcase/' : '/',
}));
