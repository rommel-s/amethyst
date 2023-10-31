import Construction from "@/components/Construction";
import Link from "next/link";

const DesignProjects = () => {
  return (
    <>
      <h2>Projetos Design aqui</h2>

      <Construction/>

      <p>
        <Link href={"/"}>Voltar</Link>
      </p>
    </>
  );
};

export default DesignProjects;