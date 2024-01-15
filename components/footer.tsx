import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center mt-10 border-t border-dotted border-slate-600 pb-8 pt-4">
        <ul className="flex flex-wrap items-center justify-center list-none mt-0">
    <li>
        <Link href="/" className="hover:underline me-4 hover:underline md:me-6">
        Home page
      </Link>
    </li>
    <li>
        <Link href="/about/" className="hover:underline me-4 hover:underline md:me-6">
        About this site
      </Link>
    </li>
    </ul>
      
    </div>
  );
};

export default Footer;