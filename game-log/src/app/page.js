import Board from "./components/Board"
import GameCard from "./components/GameCard";
import GameForm from "./components/GameForm";
import GameList from "./components/GameList";

export default function Home() {
  return (
    <Board>
      {/* <GameCard /> */}
      <GameForm />
      <GameList />
    </Board>
  );
}