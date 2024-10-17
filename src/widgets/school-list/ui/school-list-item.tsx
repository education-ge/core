import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { HoverIcon } from "./hover-icon";
import { ArrowRight, School } from "lucide-react";

interface Props {
  id: number;
  name: string;
  address: string;
  thumbnail: string;
  logo: string;
  className?: string;
}

export const SchoolListItem: FC<Props> = ({ className }) => {
  return (
    <Link
      href={"/school/1"}
      className={cn("flex flex-col gap-2 w-full", className)}
    >
      <Card className="flex flex-grow h-40">
        <div className="w-[200px] h-full relative">
          <Image
            src={"/school.png"}
            alt="school logo"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex flex-grow flex-col justify-between">
          <CardHeader className="p-4">
            <CardTitle className="flex justify-between gap-2">
              Грузино-американская средняя школа
              <HoverIcon icon={<School />} text="School" />
            </CardTitle>
            <CardDescription>
              ул. Георгия Чкондидели 18, Тбилиси, Грузия
            </CardDescription>
          </CardHeader>

          <CardContent className="flex px-4 pb-4 justify-between">
            <div className="flex gap-1">
              <Image src={"/flags/en.svg"} alt="flag" width={30} height={30} />
              <Image src={"/flags/ge.svg"} alt="flag" width={30} height={30} />
              <Image src={"/flags/ru.svg"} alt="flag" width={30} height={30} />
            </div>
            <Button variant={"link"}>
              <span className="font-bold">Смотреть</span>
              <ArrowRight />
            </Button>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
