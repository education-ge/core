import { z } from "zod";

export const subareaIdSchema = z.number().brand("SubareaId");
export type SubareaId = z.infer<typeof subareaIdSchema>;

export const areaIdSchema = z.number().brand("AreaId");
export type AreaId = z.infer<typeof areaIdSchema>;

export const cityIdSchema = z.number().brand("CityId");
export type CityId = z.infer<typeof cityIdSchema>;

export const subareaSchema = z.object({
  id: subareaIdSchema,
  name: z.string(),
});
export type Subarea = z.infer<typeof subareaSchema>;

export const areaSchema = z.object({
  id: areaIdSchema,
  name: z.string(),
  subareas: z.array(subareaSchema),
});
export type Area = z.infer<typeof areaSchema>;

export const citySchema = z.object({
  id: cityIdSchema,
  name: z.string(),
});
export type City = z.infer<typeof citySchema>;
