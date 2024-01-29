import Link from "next/link";

const Header = () => {
  return (
    <div className="text-center mt-8 border-b border-dotted border-zinc-600 pb-8 text-4xl">
      <Link href="/" className="hover:underline font-semibold text-magenta">
        Why Pictures Work
      </Link>
      <div className="text-sm mt-2">A look at why pictures and designs are effective</div>
    </div>
  );
};

export default Header;