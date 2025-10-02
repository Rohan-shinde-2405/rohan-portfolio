export default function Badge({ children }){
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[12px] font-medium bg-sage-100 text-sage-800 border border-sage-200">
      {children}
    </span>
  );
}
