export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      className="fixed bottom-6 right-6 
                 bg-green-600 text-white 
                 px-5 py-3 rounded-xl shadow-lg 
                 animate-fade-in"
    >
      {message}
    </div>
  );
}