'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Projects } from '@/data/dev-projects-data';
import { generateStaticParams } from '@/data/dev-projects';

export default function ProjectPage({
  params,
}: {
  params: { link_name: string };
}) {
  const projects = generateStaticParams();

  const { link_name } = params;

  // console.log(
  //   projects.map((project) => ({
  //     projTitle: project.name,
  //     projLink: project.link_name,
  //     projDescription: project.description,
  //     projIcon: project.icon,
  //   }))
  // );

  return (
    <main className="bg-light_grey_01 p-40">
      <h1>Página do Projeto:{}</h1>

      <Link href={'/dev-projects'}>voltar</Link>
    </main>
  );
}
