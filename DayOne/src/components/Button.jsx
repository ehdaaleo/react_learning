export default function Button({ href, label, className = '' }) {
  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}