import AbilityMenu from "../components/ability-menu.component";

export class BootstrapService {
    #root: HTMLElement | undefined;
    static events = {
        reset: new CustomEvent("bootstrap:reset"),
        exit: new CustomEvent("bootstrap:exit")
    };

    constructor() {
        this.init();
        this.bindReset();
        this.bindExit();
    }

    init() {
        this.#root = AbilityMenu();
        document.body.appendChild(this.#root);
    }

    reset() {
        this.exit();
        this.init();
    }

    exit() {
        if (this.#root) {
            document.body.removeChild(this.#root);
        }
    }

    bindReset() {
        document.addEventListener("bootstrap:reset", () => {
            this.reset();
        });
    }

    bindExit() {
        document.addEventListener("bootstrap:exit", () => {
            this.exit();
        });
    }
}

export default BootstrapService;