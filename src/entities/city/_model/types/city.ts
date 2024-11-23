import { z } from "zod";
import { areaListSchema, cityListSchema } from "./schema";

export type CityList = z.infer<typeof cityListSchema>;

export type AreaList = z.infer<typeof areaListSchema>;
