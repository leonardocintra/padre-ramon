interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div className="container mx-auto px-4 border-t border-gray-300 mt-10">
      <div className="flex flex-col justify-center items-center sm:flex-row text-green-600 font-extralight py-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
        &nbsp; Desenvolvido por
        <span className="font-light hover:font-bold">&nbsp; Leonardo Nascimento Cintra</span>
        &nbsp; - 2023
      </div>
    </div>
  );
}
