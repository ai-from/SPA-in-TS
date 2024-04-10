import Page from "../../core/templates/page";
import { pageTitles } from "../app";

class StatisticsPage extends Page {
    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(pageTitles.statisticsPage);
        this.container.append(title);
        return this.container;
    }
}

export default StatisticsPage;