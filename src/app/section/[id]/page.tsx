interface PageProps {
  params: {
    id: string;
  }
}

export default function Page({ params }: PageProps) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-2">Welcome to My Page</h1>
      <h2 className="text-xl text-gray-600 mb-4">Section: {params.id}</h2>
      <p className="text-gray-800">
        This is a simple page that demonstrates using dynamic route parameters in Next.js.
        The subtitle above is automatically generated from the URL path.
      </p>
    </main>
  );
}
