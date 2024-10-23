import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui";
import { cn } from "@/shared/ui/utils";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  return (
    <Card className={cn("w-80 sticky top-[72px] self-start", className)}>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-bold mb-3">Язык преподавания</p>
        <div className="flex flex-col gap-2">
          {/* {data?.map((item) => {
            return (
              <FilterCheckbox
                key={item.id}
                text={item.name}
                value={item.code}
              />
            );
          })} */}
        </div>
        <CheckboxFiltersGroup
          title="Районы"
          className="mt-5"
          limit={5}
          defaultItems={[
            {
              text: "Сабуртало",
              value: "1",
            },
            {
              text: "Ваке",
              value: "2",
            },
            {
              text: "Исани",
              value: "3",
            },
            {
              text: "Самгори",
              value: "4",
            },
            {
              text: "Варкетили",
              value: "5",
            },
            {
              text: "Дигоми",
              value: "6",
            },
          ]}
          items={[
            {
              text: "Сабуртало",
              value: "1",
            },
            {
              text: "Ваке",
              value: "2",
            },
            {
              text: "Исани",
              value: "3",
            },
            {
              text: "Самгори",
              value: "4",
            },
            {
              text: "Варкетили",
              value: "5",
            },
            {
              text: "Дигоми",
              value: "6",
            },
            {
              text: "Сабуртало",
              value: "1",
            },
            {
              text: "Ваке",
              value: "2",
            },
            {
              text: "Исани",
              value: "3",
            },
            {
              text: "Самгори",
              value: "4",
            },
            {
              text: "Варкетили",
              value: "5",
            },
            {
              text: "Дигоми",
              value: "6",
            },
          ]}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
};
