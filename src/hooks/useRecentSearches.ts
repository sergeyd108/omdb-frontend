import { useLocalStorage } from 'react-use'

export interface SearchHistoryItem {
  query: string
  timestamp: number
}

export function useRecentSearches() {
  const [searches, setSearches] = useLocalStorage<SearchHistoryItem[]>('recent-searches', [])
  const add = (query: string) => {
    if (!query) {
      return
    }

    const _searches = [{ query, timestamp: Date.now() }, ...searches!]

    if (searches!.length >= 5) {
     _searches.pop()
    }

    setSearches(_searches)
  }

  return { searches, add }
}
