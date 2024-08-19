import Image from "next/image";

export default async function Home() {
  const res = await fetch('https://registry.npmjs.org/-/v1/search?text=react');
  var data = await res.json();
  data = data.objects;

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <form></form>





    </main>
  );
}
