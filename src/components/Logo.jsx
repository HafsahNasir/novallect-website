// Official Novallect brand logo (tagline baked in).
// variant="light" => white logo  (for dark hero / nav-over-hero / footer)
// variant="dark"  => colour logo (for the solid white nav / light sections)
import logoColor from '../assets/novallect-logo-color.png'
import logoWhite from '../assets/novallect-logo-white.png'

export default function Logo({ variant = 'dark', height = 34 }) {
  const src = variant === 'light' ? logoWhite : logoColor
  return (
    <img
      src={src}
      alt="Novallect — Solutions · Services · Delivered"
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}
