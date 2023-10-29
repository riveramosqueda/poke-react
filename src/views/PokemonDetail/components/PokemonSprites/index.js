import PokemonSpritesItem from "./PokemonSpritesItem";

export default function PokemonSprites({sprites}){
    return (
        <div className="sprites-gallery">
            <div className="sprites-gallery-images">
                {Object.keys(sprites).map((item, index)=>{
                    const visibleSprite=(item==='front_default')?('block'):('none')
                    return (typeof(sprites[item])=='string')?(<PokemonSpritesItem url={sprites[item]} imageTag={item} visibleSprite={visibleSprite} key={index} />):(null);
                })}
            </div>
            <div className="sprites-gallery-images" style={{textAlign:'center'}}>
                <button className="btn btn-sm btn-info m-2">{'<<<'} </button>
                <button className="btn btn-sm btn-info m-2">{'>>>'} </button>
            </div>
        </div>
    );
}