import Page from "../../core/templates/page";
import { pageTitles } from "../app";

class SettingsPage extends Page {
    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(pageTitles.settingsPage);
        this.container.append(title);
        return this.container;
    }
}

export default SettingsPage;