import Page from "../../core/templates/page";
import MainPage from "../main";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";
import Header from "../../core/components/header";
import ErrorPage from "../error";

export const enum pageIds {
    mainPage = 'main-page',
    settingsPage ='settings-page',
    statisticsPage = 'statistics-page'
}

export const enum pageTitles {
    mainPage = 'Main page',
    settingsPage = 'Settings page',
    statisticsPage = 'Statistics page',
    errorPage = 'Error! The page was not found'
}

class App {
    private static container: HTMLElement = document.body;
    private initialPage: MainPage;
    private header: Header;
    private static defaultPageId: string = 'current-page';
    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if(currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;
        if(idPage === pageIds.mainPage) {
            page = new MainPage(idPage);
        }
        else if(idPage === pageIds.settingsPage) {
            page = new SettingsPage(idPage);
        }
        else if(idPage === pageIds.statisticsPage) {
            page = new StatisticsPage(idPage);
        }
        else {
            page = new ErrorPage(idPage);
        }

        if(page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    private goToMainPage() {
        window.location.hash = pageIds.mainPage;
        App.renderNewPage(pageIds.mainPage);
    }

    constructor() {
        this.initialPage = new MainPage(pageIds.mainPage);
        this.header = new Header('header', 'header');
    }

    run() {
        App.container.append(this.header.render());
        this.goToMainPage();
        this.enableRouteChange();
    }
}

export default App;