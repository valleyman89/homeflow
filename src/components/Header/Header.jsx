import SearchBox from "../SearchBox/SearchBox";

function Header({ setSearchFilter }) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <h1 className="text-8xl">Posh Properties</h1>

      <SearchBox setSearchFilter={setSearchFilter} />
    </header>
  );
}

export default Header;
