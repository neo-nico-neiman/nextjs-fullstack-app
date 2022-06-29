import Link from 'next/link';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full px-5 py-2 bg-slate-100 text-slate-500 flex justify-between items-center flex-col sm:flex-row ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline">Advertising</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Business</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">How Search Works</a>
        </Link>
      </div>

      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline sm:inline">Privacy</a>
        </Link>
        <Link href="/">
          <a className="hover:underline sm:inline">Terms</a>
        </Link>
        <Link href="/">
          <a className="hover:underline sm:inline">Settings</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
