export default function QuadroVideo() {
  return (
    <div>
      <div className="container mx-auto px-4 mt-10">
        <h3 className="text-2xl text-orange-700 text-center font-semibold mb-8">
          Velório de Padre Ramon
        </h3>
        <div className="flex justify-center">
          <iframe
            className="w-full object-cover max-w-3xl shadow-lg shadow-red-500 rounded-xl"
            height={450}
            src="https://www.youtube.com/embed/kA_NNhlya8U"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
