var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "./index.c87d935b.js";
import "./index.1486dff4.js";
import { m as modal, c as closeModal, d as dismissModal } from "./modal-utils-aecbcba5.95724bc3.js";
import "./init.c2e061d0.js";
import "./icon-c659fc0f.a670d01b.js";
import "./logical-filter-operator-92531263.182856a9.js";
import "./flip-tile-state-051bb2fd.b2524409.js";
import "./upload-file-state-532a36d3.458c962a.js";
import "./theme-switcher-7498e4f2.143499f1.js";
import "./typed-event-a230184a.ccfb44d2.js";
function createExampleModal() {
  const name = "modal-example";
  window.customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();
        __publicField(this, "isInitalRender", false);
      }
      connectedCallback() {
        if (this.isInitalRender) {
          return;
        }
        this.isInitalRender = true;
        this.firstRender();
      }
      firstRender() {
        const modalTemplate = document.createElement("template");
        modalTemplate.innerHTML = `
              <div>
                <div class="modal-header">
                Message headline
                <ix-icon-button
                  data-button-close
                  ghost
                  icon="close"
                  class="dismiss-modal"
                ></ix-icon-button>
                </div>
                <div class="modal-body">Message text lorem ipsum</div>
                <div class="modal-footer">
                  <ix-button outline class="dismiss-modal"> Cancel </ix-button>
                  <ix-button class="close-modal">OK</ix-button>
                </div>
              </div>
              `;
        const template = modalTemplate.content.cloneNode(true);
        this.append(template);
      }
    }
  );
  return name;
}
(async function() {
  const exampleModalName = createExampleModal();
  await window.customElements.whenDefined("ix-button");
  const button = document.querySelector("ix-button");
  button.addEventListener("click", async () => {
    const customModal = document.createElement(exampleModalName);
    const m = await modal({
      content: customModal
    });
    m.htmlElement.querySelector(".close-modal").addEventListener("click", () => {
      closeModal(customModal, "Done!");
    });
    m.htmlElement.querySelectorAll(".dismiss-modal").forEach(
      (item) => item.addEventListener("click", () => {
        dismissModal(customModal, "cancelled!");
      })
    );
    m.htmlElement.addEventListener("keydown", (keyEvent) => {
      console.log(keyEvent.key);
    });
  });
})();