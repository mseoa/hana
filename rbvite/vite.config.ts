import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // NOTE: tsc를 할 필요가 없음. 역할을 vite가 해줌
});
