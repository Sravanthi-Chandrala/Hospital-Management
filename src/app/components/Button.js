export default function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-medium transition"
    >
      {title}
    </button>
  );
}
