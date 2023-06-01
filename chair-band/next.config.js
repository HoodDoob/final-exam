/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['chair.band', 'i.ytimg.com'],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
}
