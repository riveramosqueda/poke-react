export default function PokemonStatus({stats}){
    return (
        <table className="table table-striped">
            <tbody>
                {stats?.map((item, index)=>{
                    return (
                        <tr key={index}>
                            <td>{item.stat.name.replace('-',' ').toUpperCase()}</td>
                            <td>{item.base_stat}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}