import { Observer } from "../models/Observer";

export class UISubject {
  private observers: Observer<UISubject>[] = [];
  private state: { [key: string]: boolean } = {};

  attach(observer: Observer<UISubject>): void {
    this.observers.push(observer);
  }

  detach(observer: Observer<UISubject>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  setState(key: string, value: boolean): void {
    this.state[key] = value;
    this.notify();
  }

  getState(key: string): boolean {
    return this.state[key] || false;
  }
}
