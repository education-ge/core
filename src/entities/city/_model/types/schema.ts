import { areaSchema, citySchema } from "@/shared/types/city";
import { z } from "zod";

export const cityListSchema = z.array(citySchema);

export const areaListSchema = z.array(areaSchema);
