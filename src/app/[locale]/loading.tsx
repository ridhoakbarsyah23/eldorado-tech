export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
        <p className="mt-4 text-blue-600 font-medium animate-pulse">Memuat...</p>
      </div>
    </div>
  );
}
