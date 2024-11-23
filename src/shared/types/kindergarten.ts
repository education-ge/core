import { z } from "zod";

export const kindergartenIdSchema = z.number().brand("KindergartenId");
export type KindergartenId = z.infer<typeof kindergartenIdSchema>;
