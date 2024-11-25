import { KindergartenListItem } from "@/entities/kindergarten/server";
import { Link } from "@/shared/i18n/routing";
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

interface Props {
  kindergarten: KindergartenListItem;
  className?: string;
}

export const KindergartenListCard: FC<Props> = ({
  kindergarten,
  className,
}) => {
  return (
    <Link
      href={`kindergartens/${kindergarten.id}`}
      className={cn("flex flex-col gap-2 w-full", className)}
      target="_blank"
    >
      <Card className="flex flex-grow h-48 rounded-xl group transition-shadow duration-400 hover:shadow-lg">
        <div className="w-[200px] h-full relative flex justify-center items-center bg-slate-200 rounded-l-xl overflow-hidden">
          {kindergarten.thumbnail ? (
            <>
              <Image
                src={`/${kindergarten.thumbnail}` || ""}
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
              {kindergarten.name}
            </CardTitle>
            <CardDescription>{kindergarten.address}</CardDescription>
          </CardHeader>

          <CardContent className="flex px-4 pb-4 justify-between">
            <div className="flex gap-1">
              {kindergarten.languages?.map((item) => (
                <Image
                  key={item.id}
                  src={`/flags/${item.code}.svg`}
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
