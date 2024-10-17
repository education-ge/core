import { GraduationCap } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <GraduationCap width={35} height={35} />
      <span className="font-bold inline-block">GeoSchool</span>
    </Link>
  );
};
