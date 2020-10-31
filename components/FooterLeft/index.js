
const e = React.createElement

export default class FooterLeft extends React.Component {
    constructor() {
        super()
    }

    render() {
        const arrObj = [
            {url: "http://", name: "Реклама"},
            {url: "http://", name: "Для бизнеса"},
            {url: "http://", name: "Все о гугл"},
            {url: "http://", name: "Как работает гугл поиск"},
        ]
        return (
            e("ul", {id: "footerLeft"},
                arrObj.map( (item,index) => (
                    e("li", {key: `FooterLeftItem${index}`}, 
                        e("a", {href: item.url}, item.name)
                    )
                )),
            )
        )
    }
}
