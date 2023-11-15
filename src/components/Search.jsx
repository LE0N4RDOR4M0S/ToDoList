// eslint-disable-next-line react/prop-types
const Search = ({ search , setSearch }) => {
  return <div className="search">
    <input
    type="text"
    value={search}
    placeholder="Pesquisar tarefa..."
    onChange={(e) => setSearch(e.target.value)}
    />
  </div>
};

export default Search