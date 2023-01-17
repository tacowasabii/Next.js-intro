import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
          style={{ position: "relative" }}
        >
          <MovieImg>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="img"
              layout="fill"
              className="img"
            />
          </MovieImg>
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <span>{movie.original_title}</span>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 320px;
          padding: 20px;
          column-gap: 30px;
          row-gap: 70px;
        }
        .movie {
          cursor: pointer;
        }
        .movie .img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
          position: relative;
          top: 310px;
        }
      `}</style>
    </div>
  );
}

const MovieImg = styled.div`
  .img {
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    :hover {
      transform: scale(1.05) translateY(-10px);
    }
  }
`;

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
