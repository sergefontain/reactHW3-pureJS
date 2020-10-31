
import FooterLeft from "./components/FooterLeft/index.js"
import FooterRight from "./components/FooterRight/index.js"
import Logo from "./components/Logo/index.js"
import SearchBar from "./components/SearchBar/index.js"
import SearchButtons from "./components/SearchButtons/index.js"
import SearchInfo from "./components/SearchInfo/index.js"
import Menu from "./components/Menu/index.js"


const e = React.createElement

const App = () => {

    return (
        e("div", {id: "wrapper"},
            e("header", {id:"header"},
                e(Menu)
            ),
            e("main", {id: "main"},
                e("div", {className: "container"},
                    e(Logo),
                    e(SearchBar),
                    e(SearchButtons),
                    e(SearchInfo)
                )
            ),
            e("footer", {id: "footer"},
                e("div", {className: "container"},
                    e(FooterLeft),
                    e(FooterRight),
                )
            )
        )
    )
}

ReactDOM.render(App(), document.getElementById("root"))
