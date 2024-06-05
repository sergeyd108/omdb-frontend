import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout.tsx'
import SearchPage from './pages/search/SearchPage.tsx'
import ErrorPage from './pages/error/ErrorPage.tsx'
import MoviePage from './pages/movie/MoviePage.tsx'
import LocalStorageRecentSearches from './pages/recent/LocalStorageRecentSearches.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <LocalStorageRecentSearches/>,
      },
      {
        path: 'search/:title/:page?',
        element: <SearchPage/>,
      },
      {
        path: 'movie/:id',
        element: <MoviePage/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>,
)
