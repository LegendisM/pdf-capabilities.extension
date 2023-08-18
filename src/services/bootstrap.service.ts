import AbilityMenu from "../components/ability-menu.component";

export class BootstrapService {
    #root: HTMLElement | undefined;
    static events = {
        reset: new CustomEvent("bootstrap:reset"),
    };

    constructor() {
        this.init();
        this.bindReset();
    }

    init() {
        this.#root = AbilityMenu();
        document.body.appendChild(this.#root);
    }

    reset() {
        if (this.#root) {
            document.body.removeChild(this.#root);
        }
        this.init();
    }

    bindReset() {
        document.addEventListener("bootstrap:reset", () => {
            this.reset();
        });
    }
}

export default BootstrapService;