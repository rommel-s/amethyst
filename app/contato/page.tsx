import Link from 'next/link';

const Contato = () => {
  return (
    <main>
      <h1>Gostaria de entrar em contato conosco? Simples!</h1>

      <button>Fale diretamente via Whatsapp</button>
      <br />
      <p>ou</p>
      <br />
      <button>Envie-nos um e-mail!</button>

      <Link href={'/'}>Voltar</Link>
    </main>
  );
};

export default Contato;
