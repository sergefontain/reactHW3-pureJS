import InsideList from "../InsideList/index.js"

const e = React.createElement

const SearchInfo = () => {

    return (
        e("div", {id: "searchInfo"},
            e("span",null,"Сервисы Google доступны на разных языках:",
                e(InsideList)
            )
        )
    )

}

export default SearchInfo