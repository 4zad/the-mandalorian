import { gsap } from 'gsap';

export const easeInOut: gsap.EaseFunction = gsap.parseEase(`0.9, 0.0, 0.1, 1.0`);
export const easeIn1: gsap.EaseFunction = gsap.parseEase(`1.0, 0.0, 0.7, 1.0`);
export const easeIn2: gsap.EaseFunction = gsap.parseEase(`0, 0.3, 0.0, 1.0`);
export const mainEase: gsap.EaseFunction = gsap.parseEase('0.14, 1.00, 0.34, 1.00');
export const linearEase: gsap.EaseFunction = gsap.parseEase('0.0, 0.0, 1.0, 1.0');
export const menuSnap: gsap.EaseFunction = gsap.parseEase('1.000, 0.290, 1.000, 0.490');
