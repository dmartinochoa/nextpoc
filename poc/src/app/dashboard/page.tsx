import SearchBar from './search-bar'
 
export const dynamic = 'force-dynamic'
 
export default function Page() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <h1>Dashboard</h1>
    </>
  )
}