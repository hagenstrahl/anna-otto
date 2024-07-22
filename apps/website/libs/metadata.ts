import { Metadata } from "next";

export const getMetadata = (options: Metadata): Metadata => {
  return {
    ...options,
    title: (options.title ? options.title + " - " : "") + websiteTitle,
  };
};

export const websiteTitle = "ANNA & OTTO - Das Familiencafé";
