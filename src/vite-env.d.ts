/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.mp4" {
    const src: string;
    export default src;
}

declare module "*.pdf" {
    const src: string;
    export default src;
}

declare module "*.webp" {
    const src: string;
    export default src;
}
