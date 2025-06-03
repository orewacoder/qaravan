'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-red-50 text-red-700">
      <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-4">{error.message}</p>
      <button 
        className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
        onClick={() => window.location.reload()}
      >
        Try again
      </button>
    </div>
  );
} 