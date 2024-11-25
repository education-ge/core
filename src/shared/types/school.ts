import { z } from "zod";

export const schoolIdSchema = z.number().brand("SchoolId");
export type SchoolId = z.infer<typeof schoolIdSchema>;
