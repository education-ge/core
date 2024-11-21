"use client";

import { useGetKindergarten } from "@/entities/kindergarten/client";
import { Container } from "@/shared/ui";
import { useLocale } from "next-intl";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/shared/ui";
import Image from "next/image";

export default function KindergartenPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const locale = useLocale();
  const { data, isLoading } = useGetKindergarten({ locale, id });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Container className="mt-4 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="w-[200px] h-full relative flex justify-center items-center bg-slate-200">
            {data?.thumbnail ? (
              <Image
                src={`/${data.thumbnail}` || ""}
                alt="school logo"
                fill={true}
                className="object-cover"
              />
            ) : (
              <Image
                src={"/svg/no-image.svg"}
                alt="no-image-icon"
                width={40}
                height={40}
              />
            )}
          </div>
          <CardTitle>{data?.name}</CardTitle>
          <CardDescription>{data?.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Address:</strong> {data?.address}
          </p>
          <p>
            <strong>Phone:</strong> {data?.phone}
          </p>
          <p>
            <strong>Email:</strong> {data?.email}
          </p>
          <p>
            <strong>Website:</strong>
            <a href={data?.website} target="_blank" rel="noopener noreferrer">
              {data?.website}
            </a>
          </p>
          <div className="flex gap-1">
            {data?.languageCodes.map((item) => (
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
        <CardFooter className="flex justify-between">
          <div className="flex space-x-2">
            {data?.facebook && (
              <a href={data.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            )}
            {data?.instagram && (
              <a
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            )}
            {data?.twitter && (
              <a href={data.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            )}
            {data?.youtube && (
              <a href={data.youtube} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            )}
            {data?.telegram && (
              <a href={data.telegram} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            )}
            {data?.whatsapp && (
              <a href={data.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            )}
            {data?.viber && (
              <a href={data.viber} target="_blank" rel="noopener noreferrer">
                Viber
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
}
