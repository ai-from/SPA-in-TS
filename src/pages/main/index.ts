import Page from "../../core/templates/page";
import { pageTitles } from "../app";

class mainPage extends Page {
    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(pageTitles.mainPage);
        this.container.append(title);
        return this.container;
    }
}

export default mainPage;