import { useNavigate } from 'react-router-dom'
import { useRecentSearches } from '../hooks/useRecentSearches.ts'
import SearchInput from './SearchInput.tsx'

export default function AppSearchInput() {
  const navigate = useNavigate()
  const { add } = useRecentSearches()
  const handleSearchClick = (query: string) => {
    add(query)
    navigate(`/search/${query}`)
  }

  return (
    <SearchInput onSubmit={handleSearchClick}/>
  )
}
