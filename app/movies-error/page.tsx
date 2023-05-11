import { MoviesType } from "@/util/MovieTypes";
import getMovies from "@/util/getMovies";
import MovieList from "../MovieList"

export default async function Movieserror() {
    const movies: MoviesType = await getMovies(0, true);

  return (
    <main className="my-24 text-center">
      <h1 className="text-2xl flex justify-center items-center">
        Movies Fetched without
        <span className="inline-block bg-white/20 p-2 mx-2 rounded-md text-sm">
          loading.tsx
        </span>
      </h1>
      <div className="my-12">
        <MovieList page={movies.page} results={movies.results} />
      </div>
    </main>
  )
}
