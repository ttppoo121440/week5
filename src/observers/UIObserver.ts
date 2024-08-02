import { Observer } from "src/models/Observer";
import { UISubject } from "src/subjects/UISubject";

export class UIObserver implements Observer<UISubject> {
  private elements: { [key: string]: HTMLElement | null } = {};

  constructor() {
    this.elements = {
      arrowUpwards: document.getElementById("arrow-upward"),
      arrowDownward: document.getElementById("arrow-downward"),
      arrowButton: document.getElementById("arrow"),
      infoModal: document.getElementById("infoModal"),
      newModal: document.getElementById("new-modal"),
      editModal: document.getElementById("edit-modal"),
    };
  }
  update(subject: UISubject): void {
    for (const [key, element] of Object.entries(this.elements)) {
      if (element) {
        element.classList.toggle("hidden", !subject.getState(key));
      }
    }
  }
}
