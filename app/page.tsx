import { AmethystLogo } from '@/components/Logo/Amethyst';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-main text-white flex min-h-screen flex-col items-center justify-center p-12">
      <div className="mb-20">
        <AmethystLogo width={300} />
      </div>

      <button className="bg-secondary_dark_01 h-20 max-w-lg container rounded-md mx-auto items-center justify-center text-center my-3 p-5">
        <Link href={'/design-projects'}>Projetos de Design Gráfico</Link>
      </button>
      <button className="bg-secondary_dark_01 h-20 max-w-lg container rounded-md mx-auto items-center justify-center text-center my-3 p-5">
        <Link href={'/dev-projects'}>Projetos de Desenvolvimento</Link>
      </button>

      <p className="text-light-grey">
        <Link href={'/geode'}>Link do Geode que vai sair</Link>
      </p>

      <p className="text-light-grey">
        <Link href={'/blog'}>Link do Blog que vai sair</Link>
      </p>
    </main>
  );
}
