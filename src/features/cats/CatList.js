// write your CatList component here
function CatList({picInfo}) {
    return (
        <div>
            <img src={picInfo.url} alt="cat"/>
        </div>
    )
}

export default CatList;