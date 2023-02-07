export default function Desativado() {
  return (
    <div className="bg-yellow-50 h-screen">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity={0.7}
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6"></stop>
                <stop offset="1" stopColor="#E935C1"></stop>
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h4 className="text-2xs text-white">Causa de beatificação</h4>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Pe. Ramón Sevillano Valencia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Voltamos em breve ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
