import { JSX } from "react";

export interface HomeSectionData {
  heading:string
  title: string;
  subtitle: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
  imageUrl: string;
}

export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

export interface WireframeData {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  subImageUrl: string;
}

export interface HORIZONTAL {
  id: number;
  title: string;
  description: string;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface SuccessStory {
  id: number;
  name: string;
  story: string;
  description: string;
  imageUrl: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface SocialIcon {
  icon: JSX.Element;
  link: string;
}
