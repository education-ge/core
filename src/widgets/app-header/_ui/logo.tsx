import { Link } from "@/shared/i18n/routing";

export const Logo = () => {
  return (
    <Link className="flex items-center text-white py-4" href="/">
      <span className="font-bold text-red-500">Geo</span>
      <span className="font-bold">Study</span>
    </Link>
  );
};
