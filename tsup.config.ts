import tailwindcss from '@tailwindcss/postcss'
import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import postcss from 'postcss'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  sourcemap: false,
  clean: true,
  tsconfig: 'tsconfig.build.json',
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
  async onSuccess() {
    const cssPath = resolve('src/index.css')
    const outPath = resolve('dist/index.css')

    const css = await readFile(cssPath, 'utf8')
    const result = await postcss([tailwindcss()]).process(css, {
      from: cssPath,
      to: outPath,
    })

    await writeFile(outPath, result.css)
    console.log('CSS processed with Tailwind CSS')
  },
})
