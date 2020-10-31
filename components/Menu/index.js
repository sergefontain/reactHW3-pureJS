import ToggleMenu from "../ToggleMenu/index.js"

const e = React.createElement

export default class Menu extends React.Component {
    constructor() {
        super()
    }

    render() {
        const arrObj = [
            {url: "http://", name: "Почта"},
            {url: "http://", name: "Картинки"},
        ]
        return (
            e("div",{className:"container"},
                e("nav", {className: "main-nav"},
                    e("input", {id:"menu__toggle",
                                type:"checkbox"}),
                    e("ul", {id:"mainMenu"},
                        arrObj.map( (item,index) => (
                            e("li", {key: `MenuList${index}`}, 
                                e("a", {href: item.url}, item.name)
                            )
                        )),
                        e("li", {key:""},
                            e("label", {className:"menu__btn",
                            for:"menu__toggle"},
                                e("span")),
                            e(ToggleMenu)
                        )
                    )
                )
            )
        )
    }
}