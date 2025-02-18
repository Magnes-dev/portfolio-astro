import type { Technologie } from "./technologies";

export interface Project {
  name: string,
  image: string,
  technologies: Technologie[]
}

export const projects: Project[] = [
  {
    name: 'Web personal',
    image: '/assets/project.png',
    technologies: [
      {
        name: 'Astro',
        image: '/assets/logos/astro.png'
      },
      {
        name: 'TypeScript',
        image: '/assets/logos/typescript.png'
      },
      {
        name: 'CSS',
        image: '/assets/logos/css.png'
      }
    ]
  },
  {
    name: 'Web personal 1',
    image: '/assets/project.png',
    technologies: [
      {
        name: 'Astro',
        image: '/assets/logos/astro.png'
      },
      {
        name: 'TypeScript',
        image: '/assets/logos/typescript.png'
      },
      {
        name: 'CSS',
        image: '/assets/logos/css.png'
      }
    ]
  },
  {
    name: 'Web personal 2',
    image: '/assets/project.png',
    technologies: [
      {
        name: 'Astro',
        image: '/assets/logos/astro.png'
      },
      {
        name: 'TypeScript',
        image: '/assets/logos/typescript.png'
      },
      {
        name: 'CSS',
        image: '/assets/logos/css.png'
      }
    ]
  },
  {
    name: 'Web personal 3',
    image: '/assets/project.png',
    technologies: [
      {
        name: 'Astro',
        image: '/assets/logos/astro.png'
      },
      {
        name: 'TypeScript',
        image: '/assets/logos/typescript.png'
      },
      {
        name: 'CSS',
        image: '/assets/logos/css.png'
      }
    ]
  }
]