
const e = React.createElement

export default class FooterRight extends React.Component {
    constructor() {
        super()
    }

    render() {
        const arrObj = [
            {url: "http://", name: "Конфиденциальность"},
            {url: "http://", name: "Условия"},
            {url: "http://", name: "Настройки"},
        ]
        return (
            e("ul", {id: "footerRight"},
                arrObj.map( (item,index) => (
                    e("li", {key: `FooterRightItem${index}`}, 
                        e("a", {href: item.url}, item.name)
                    )
                )),
            )
        )
    }
}
