export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange(false)}
      />
      <div className="p-4 fixed z-50 flex flex-col rounded-xl bg-slate-900 shadow-xl border border-slate-800 animate-in fade-in-0 zoom-in-95">
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children, className = "" }) => (
  <div className={`relative w-full max-w-lg p-6 text-slate-100 ${className}`}>
    {children}
  </div>
);

export const DialogHeader = ({ children }) => (
  <div className="mb-6 pb-4 border-b border-slate-800">{children}</div>
);

export const DialogTitle = ({ children }) => (
  <h2 className="text-3xl font-semibold tracking-tight text-slate-100">
    {children}
  </h2>
);

export default Dialog;
