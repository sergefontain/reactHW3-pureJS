const e = React.createElement

const SearchButtons = () => {

    return (
        e("div", {id: "searchButtons"},
            e("input", {value:"Поиск в гугл",
                        type:"submit"}),
            e("input", {value:"Мне повезет!",
                        type:"submit"})
        )
    )

}

export default SearchButtons