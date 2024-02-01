export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const headerNavLinks = [
  { href: '/', title: 'Articulos' },
  { href: '/articles', title: 'Lista' },
  { href: '/favorites', title: 'Favoritos' },
  { href: '/about', title: 'Acerca' },
]

export const siteMetadata = {
  title: 'Next.js Reto ImagineApps',
  author: 'Alexis Sanchez',
  headerTitle: 'Articulos',
  description: 'Un blog de articulos hecho con Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  locale: 'en-US',
}