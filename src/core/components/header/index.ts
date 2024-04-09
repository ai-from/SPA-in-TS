import Component from "../../templates/component";
import { pageIds } from "../../../pages/app";

const Buttons = [
    {
        id: pageIds.mainPage,
        text: 'Main page'
    },
    {
        id: pageIds.settingsPage,
        text: 'Settings page'
    },
    {
        id: pageIds.statisticsPage,
        text: 'Statistics page'
    }
]

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        Buttons.forEach(btn => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${btn.id}`;
            buttonHTML.innerText = btn.text;
            pageButtons.append(buttonHTML);
        });
        this.container.append(pageButtons);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;