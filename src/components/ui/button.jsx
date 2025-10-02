export function Button({ variant='primary', className='', ...props }){
  const base = 'px-4 py-2 rounded-xl font-semibold transition-colors duration-150';
  const variants = {
    primary: 'text-night-900 bg-accent hover:bg-teal-300',
    ghost: 'text-muted border border-ring/50 hover:bg-night-800/70'
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
