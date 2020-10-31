const e = React.createElement

export default class ToggleMenu extends React.Component {
    constructor() {
        super()
    }

    render() {
        const arrObj = [
            {url: "http://", title: "Аккаунт", id:"accaunt"},
            {url: "http://", title: "Поиск", id:"search"},
            {url: "http://", title: "Мой бизнесс", id:"myBusiness"},
            {url: "http://", title: "Карты", id:"maps"},
            {url: "http://", title: "YouTube", id:"YT"},
            {url: "http://", title: "Play", id:"play"},
            {url: "http://", title: "Новости", id:"news"},
            {url: "http://", title: "Почта", id:"mail"},
            {url: "http://", title: "Meet", id:"meet"},
            {url: "http://", title: "Контакты", id:"contacts"},
            {url: "http://", title: "Диск", id:"disc"},
            {url: "http://", title: "Календарь", id:"calend"},
        ]
        return (
            e("ul", {className: "menu__box"},
                arrObj.map( (item,index) => (
                    e("li", {key: `ToggleList${index}`},
                        e("div", {className: "menu__item"},
                            e("a", {href: item.url},
                                e("div", {id: item.id}),
                                e("p", null, item.title)
                            )
                        )
                    )
                ))
            )
        )
    }
}