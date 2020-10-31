const e = React.createElement

const SearchBar = () => {

    return (
        e("div", {id: "searchBar"},
            e("input")
        )
    )

}

export default SearchBar