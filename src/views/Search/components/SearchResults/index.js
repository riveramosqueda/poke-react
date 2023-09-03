import SearchResultItem from "./SearchResultItem";

export default function SearchResults({searchResults, activeSearch}){
    return (
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {activeSearch && searchResults?.length===0 && <tr><td colSpan={4}><div className="alert alert-info">Sin resultados</div></td></tr>}
                    {searchResults?.map((item)=>{
                        return <SearchResultItem item={item} key={item.id} />
                    })}
                </tbody>
            </table>
        </div>
    );
}