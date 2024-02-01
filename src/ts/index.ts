
class CardLiga extends HTMLElement {
    constructor() {
        super();
        const shadow: ShadowRoot = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(): HTMLElement {
        const componentRoot:HTMLElement = document.createElement("section");
        componentRoot.classList.add("card");

        const capa = document.createElement("img");
        capa.classList.add("capa");
        capa.src = this.getAttribute("card-img") || "";
        componentRoot.appendChild(capa);

        const tag: any = document.createElement("span");
        // tag.classList.add("tag");
        tag.innerHTML = this.playOn(tag);
        componentRoot.appendChild(tag);

        const conteudo = document.createElement("div");
        conteudo.classList.add("content");

        const liga = document.createElement("p");
        liga.classList.add("liga");
        liga.innerHTML = this.getAttribute("card-liga") || "";
        conteudo.appendChild(liga);

        const title = document.createElement("p");
        title.classList.add("title");
        title.innerHTML = this.getAttribute("card-title") || "";
        conteudo.appendChild(title);

        const imgEspn = document.createElement("img");
        imgEspn.classList.add("espn-star");
        imgEspn.src ="/assets/img/logo.png";
        conteudo.appendChild(imgEspn);

        componentRoot.appendChild(conteudo);
        return componentRoot;
    }

    styles(): HTMLElement {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                background-color: #1F1A28;
                color: #fff;
                width: 350px;
                border-radius: 8px;
                padding-bottom: 30px;
                position: relative;
            }
            .card:hover {
                border: 7px solid #C8C6C9;
                border-radius: 8px;
                transition: 0.2s;
            }
            .card .capa {
                border-radius: 8px;
                width: 100%;
            }
            .card .tag-on {
                background-color: #FA1B5E;
                padding: 5px 6px;
                border-radius: 4px;
                text-transform: uppercase;
                font-size: 14px;
                position: absolute;
                left: 14px;
                top: 160px;
            }
            .card .tag-time {
                background-color: rgba(0,0,0, .7);
                padding: 5px 6px;
                border-radius: 4px;
                font-size: 14px;
                position: absolute;
                left: 14px;
                top: 160px;
            }
            .content {
                padding-top: 5px;
                padding-left: 17px
            }
            .card .liga {
                color: #A9A8AB;
                margin-bottom: 5px;
                font-weight: 300;
                font-size: 15px;
            }
            .card .title {
                margin-bottom: 5px;
            }
            .card .espn-star {
                width: 100px;
            }
        `;
        return style;
    }

    playOn(tag: any): any {
        const content = this.getAttribute("card-tag");
        if ("on" === content) {
            tag.classList.add("tag-on")
            return "Ao Vivo";
        }
        tag.classList.add("tag-time")
        return content;
    }
}

customElements.define("card-liga", CardLiga);