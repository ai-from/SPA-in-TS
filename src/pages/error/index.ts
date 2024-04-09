import Page from "../../core/templates/page";
import { pageTitles } from "../app";

class ErrorPage extends Page {
    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(pageTitles.errorPage);
        this.container.append(title);
        return this.container;
    }
}

export default ErrorPage;