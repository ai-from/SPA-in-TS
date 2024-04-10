import Component from "../../templates/component";
import { pageIds, pageTitles } from "../../../pages/app";

const Buttons = [
    {
        id: pageIds.mainPage,
        text: pageTitles.mainPage
    },
    {
        id: pageIds.settingsPage,
        text: pageTitles.settingsPage
    },
    {
        id: pageIds.statisticsPage,
        text: pageTitles.statisticsPage
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