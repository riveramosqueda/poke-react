export default function PokemonSpritesItem({url, imageTag, visibleSprite}){
    imageTag=imageTag?.replace('_',' ').toUpperCase();
    return (
        <div style={{display:visibleSprite, textAlign:'center'}}>
            <img src={url} alt={imageTag} style={{width:'100%'}} />
            <span>{imageTag}</span>
        </div>
    );
}