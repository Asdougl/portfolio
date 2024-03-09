import { type ImageMetadata } from 'astro';

export type Project = {
  title: string;
  description: string;
  repository: string;
  link?: string;
  tools: string[];
  screenshots?: ImageMetadata[];
};
