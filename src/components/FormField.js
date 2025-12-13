export default function FormField({label, children}) {
  return (
    <label className="block">
      <span className="text-sm text-gray-700">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}