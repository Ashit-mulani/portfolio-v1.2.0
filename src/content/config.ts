import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        status: z.string(),
        image: z.string(),
        github: z.string().optional(),
        live: z.string().optional(),
        techStack: z.array(z.string()),
    }),
});

const about = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        role: z.string(),
        location: z.string(),
        email: z.string(),
        phone: z.string(),
        techStack: z.array(z.string()),
    }),
});


export const collections = {
    projects,
    about,
};
