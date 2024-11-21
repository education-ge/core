import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { Institution } from "@/entities/institution/client";

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
      <Card className="flex flex-grow h-48 rounded-xl group transition-shadow duration-400 hover:shadow-lg">
        <div className="w-[200px] h-full relative flex justify-center items-center bg-slate-200 rounded-l-xl overflow-hidden">
          {institution.thumbnail ? (
            <>
              <Image
                src={`/${institution.thumbnail}` || ""}
                alt="school logo"
                fill={true}
                className="object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
            </>
          ) : (
            <Image
              src={"/svg/no-image.svg"}
              alt="no-image-icon"
              width={80}
              height={80}
            />
          )}
        </div>
        <div className="flex flex-grow flex-col justify-between rounded-r-xl">
          <CardHeader className="p-4">
            <CardTitle className="flex justify-between gap-2">
              {institution.name}
            </CardTitle>
            <CardDescription>{institution.address}</CardDescription>
          </CardHeader>

          <CardContent className="flex px-4 pb-4 justify-between">
            <div className="flex gap-1">
              {institution.languageCodes?.map((item) => (
                <Image
                  key={item}
                  src={`/flags/${item}.svg`}
                  alt="flag"
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </CardContent>
        </div>
        <CardFooter className="border-l">
          <Button variant={"link"}>
            <span className="font-bold">Смотреть</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
