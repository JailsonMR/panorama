export default function StatsCard({ title, value }) {
  return (
    <div className="card p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}