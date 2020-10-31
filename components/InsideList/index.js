
const e = React.createElement

export default class InsideList extends React.Component {
    constructor() {
        super()
    }

    render() {
        const arrObj = [
            {url: "http://", name: "English"},
            {url: "http://", name: "Українська"},
        ]
        return (
            e("ul", {id: "insideList"},
                arrObj.map( (item,index) => (
                    e("li", {key: `InsideList${index}`}, 
                        e("a", {href: item.url}, item.name)
                    )
                )),
            )
        )
    }
}