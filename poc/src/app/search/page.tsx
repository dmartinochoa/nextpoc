import React from 'react'

async function getPkgs(searchTerm: string) {

    const res = await fetch('https://registry.npmjs.org/-/v1/search?text='+ searchTerm);
    var data = await res.json();
    data = data.objects;
    console.log(data);

    return data
}

export default async function PkgsPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string }
  }) {
    const pkgs = await getPkgs(searchParams.search);
    console.log(pkgs);

    return(
        <div>
            <h1>Packages</h1>
            {pkgs.map((pkg: { package: { name: React.Key | null | undefined; }; }) => (
                <Pkg key={pkg.package.name} pkg={pkg} />
            ))}
        </div>
    );
}

function Pkg({pkg}: {pkg: any}){
    return(
        <div>
            <h2>{pkg.package.name}</h2>
        </div>
    );
}