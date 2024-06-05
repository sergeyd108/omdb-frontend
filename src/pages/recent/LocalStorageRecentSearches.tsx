import { useRecentSearches } from '../../hooks/useRecentSearches.ts'
import RecentSearches from './RecentSearches.tsx'

export default function LocalStorageRecentSearches() {
  const { searches } = useRecentSearches()
  return <RecentSearches searches={searches ?? []}/>
}
