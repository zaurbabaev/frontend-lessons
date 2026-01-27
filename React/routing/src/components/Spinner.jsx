function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 border-r-blue-500"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 animate-spin rounded-full border-4 border-gray-100 border-b-purple-600 [animation-direction:reverse] [animation-duration:1s]"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-blue-600 animate-pulse"></div>
      </div>
    </div>
  );
}

export default Spinner;
