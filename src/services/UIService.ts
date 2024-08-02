import { UISubject } from "../subjects/UISubject";
import { UIObserver } from "../observers/UIObserver";
import { getElements, getElement } from "../utils/DOMUtils";

export class UIService {
  private subject: UISubject;
  private observer: UIObserver;

  constructor() {
    this.subject = new UISubject();
    this.observer = new UIObserver();
    this.subject.attach(this.observer);
    this.subject.setState("arrowDownward", true);
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    this.addClickEvent(".open-modal-btn", () => this.showElement("infoModal"));
    this.addClickEvent(".open-edit-modal", () => this.showElement("editModal"));
    this.addClickEvent(".close", () => {
      this.hideElement("infoModal");
      this.hideElement("newModal");
      this.showElement("arrowUpwards");
      this.hideElement("arrowDownward");
      this.hideElement("arrowButton");
      this.hideElement("editModal");
    });

    const toggleArrowVisibility = () => {
      this.toggleElementVisibility("arrowButton");
      this.toggleElementVisibility("arrowUpwards");
      this.toggleElementVisibility("arrowDownward");
    };

    getElement<HTMLElement>("arrow-downward")?.addEventListener(
      "click",
      toggleArrowVisibility,
    );
    getElement<HTMLElement>("arrow-upward")?.addEventListener(
      "click",
      toggleArrowVisibility,
    );
    getElement<HTMLElement>("open-new-modal")?.addEventListener(
      "click",
      toggleArrowVisibility,
    );
    getElement<HTMLElement>("open-new-modal")?.addEventListener("click", () =>
      this.showElement("newModal"),
    );
  }

  private addClickEvent(selector: string, callback: () => void): void {
    const elements = getElements<HTMLElement>(selector);
    elements.forEach((element) => {
      element.addEventListener("click", callback);
    });
  }

  public showElement(elementKey: string): void {
    this.subject.setState(elementKey, true);
  }

  public hideElement(elementKey: string): void {
    this.subject.setState(elementKey, false);
  }

  public toggleElementVisibility(elementKey: string): void {
    const currentState = this.subject.getState(elementKey);
    this.subject.setState(elementKey, !currentState);
  }
}
