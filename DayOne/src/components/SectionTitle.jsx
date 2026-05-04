export default function SectionTitle({ title, className = '' }) {
  return (
    <h2
      className={`section-title mb-4 ${className}`}
    >
      {title}
    </h2>
  )
}
