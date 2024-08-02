export function getElement<T extends HTMLElement = HTMLElement>(
  id: string,
): T | null {
  return document.getElementById(id) as T | null;
}

export function getElements<T extends Element = Element>(
  selector: string,
): NodeListOf<T> {
  return document.querySelectorAll(selector);
}
