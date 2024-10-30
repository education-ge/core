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
import { ArrowRight, ImageOff } from "lucide-react";
import { Institution } from "@/entities/institution/client";
import { InstitutionTypeIcon } from "@/entities/institution/server";

interface Props {
  institution: Institution;
  className?: string;
}

export const InstitutionListItem: FC<Props> = ({ institution, className }) => {
  return (
    <Link
      href={`${institution.type}s/${institution.id}`}
      className={cn("flex flex-col gap-2 w-full", className)}
    >
      <Card className="flex flex-grow h-40">
        <div className="w-[200px] h-full relative flex justify-center items-center bg-slate-200">
          {institution.thumbnail ? (
            <Image
              src={`/${institution.thumbnail}` || ""}
              alt="school logo"
              fill={true}
              className="object-cover"
            />
          ) : (
            <ImageOff size={120} className="text-slate-400" />
          )}
        </div>
        <div className="flex flex-grow flex-col justify-between">
          <CardHeader className="p-4">
            <CardTitle className="flex justify-between gap-2">
              {institution.name}
              <InstitutionTypeIcon type={institution.type} />
            </CardTitle>
            <CardDescription>{institution.address}</CardDescription>
          </CardHeader>

          <CardContent className="flex px-4 pb-4 justify-between">
            <div className="flex gap-1">
              {institution.languageCodes.map((item) => (
                <Image
                  key={item}
                  src={`/flags/${item}.svg`}
                  alt="flag"
                  width={30}
                  height={30}
                />
              ))}
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
