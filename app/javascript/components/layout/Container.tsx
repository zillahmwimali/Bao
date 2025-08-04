import { ContainerProps } from '../../types/ui'

export default function Container({
  children,
  className = '',
  size = 'full',
}: ContainerProps) {
  const containerClass = size === 'full' ? 'w-full' : 'max-w-[104rem] mx-auto'
  const bgClass = className.includes('bg-') ? '' : 'bg-white' // Add bg-white only if no other bg color is specified

  return (
    <div className={`${containerClass} ${bgClass} ${className}`}>
      <div className="w-full">{children}</div>
    </div>
  )
}
