import PokemonProvider from './context/pokemons/PokemonProvider';
import Routing from './routes';

function App() {
  return (
    <PokemonProvider>
      <Routing />
    </PokemonProvider>
  );
}

export default App;
