import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-primary-800">404</h1>
      <p className="mt-4 text-xl text-neutral-600">Página não encontrada</p>
      <p className="mt-2 text-neutral-500">
        A página que você procura não existe ou foi movida.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Voltar para o Início
        </Button>
      </div>
    </div>
  );
}
