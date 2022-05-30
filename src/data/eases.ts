import { gsap } from 'gsap';

export const easeInOut: gsap.EaseFunction = gsap.parseEase(`0.9, 0.0, 0.1, 1.0`);
export const easeInHero1: gsap.EaseFunction = gsap.parseEase(`1.0, 0.0, 0.7, 1.0`);
export const easeInHero2: gsap.EaseFunction = gsap.parseEase(`0, 0.3, 0.0, 1.0`);
