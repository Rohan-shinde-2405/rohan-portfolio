export function Card({ className = '', children }) {
  return <div className={`card ${className}`}>{children}</div>;
}
export function CardHeader({ className = '', children }) {
  return <div className={`mb-3 ${className}`}>{children}</div>;
}
export function CardContent({ className = '', children }) {
  return <div className={`${className}`}>{children}</div>;
}
