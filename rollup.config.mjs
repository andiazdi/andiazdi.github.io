import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/bundle.js',
            format: 'iife',
            sourcemap: true,
            name: 'myApp'
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript(),
            terser(),
            copy({
                targets: [
                    {src: 'src/*.html', dest: 'dist'},
                    {src: 'src/styles.css', dest: 'dist'},
                    {src: 'src/selfie.jpg', dest: 'dist'},
                    {src: 'src/loading.gif', dest: 'dist'},
                ]
            }),
        ]
    }
];