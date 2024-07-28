import "./assets/styles/tailwind.css";

const arrowUpwards: HTMLElement | null =
  document.getElementById("arrow-upward");
const arrowDownward: HTMLElement | null =
  document.getElementById("arrow-downward");
const arrowButton: HTMLElement | null = document.getElementById("arrow");
const infoModal: HTMLElement | null = document.getElementById("infoModal");
const openNewModal: HTMLElement | null =
  document.getElementById("open-new-modal");
const newModal: HTMLElement | null = document.getElementById("new-modal");
const editModal: HTMLElement | null = document.getElementById("edit-modal");

const openModalButtons: NodeListOf<Element> =
  document.querySelectorAll(".open-modal-btn");
const openEditModal: NodeListOf<Element> | null =
  document.querySelectorAll(".open-edit-modal");
const closeModalButtons: NodeListOf<Element> =
  document.querySelectorAll(".close");

const toggleVisibility = (element: HTMLElement | null, show: boolean) => {
  if (element) {
    element.classList.toggle("hidden", !show);
  }
};

const isElementHidden = (element: HTMLElement | null): boolean =>
  element ? element.classList.contains("hidden") : false;

openModalButtons.forEach((btn: Element) => {
  btn.addEventListener("click", () => toggleVisibility(infoModal, true));
});

openEditModal.forEach((btn: Element) => {
  btn.addEventListener("click", () => toggleVisibility(editModal, true));
});

closeModalButtons.forEach((btn: Element) => {
  btn.addEventListener("click", () => {
    toggleVisibility(infoModal, false);
    toggleVisibility(newModal, false);
    toggleVisibility(arrowUpwards, true);
    toggleVisibility(arrowDownward, false);
    toggleVisibility(arrowButton, false);
    toggleVisibility(editModal, false);
  });
});

arrowDownward?.addEventListener("click", () => {
  if (arrowButton) {
    const isHidden = arrowButton.classList.contains("hidden");
    toggleVisibility(arrowButton, isHidden);
    toggleVisibility(arrowUpwards, isHidden);
    toggleVisibility(arrowDownward, !isHidden);
  }
});

const toggleArrowVisibility = () => {
  if (arrowButton) {
    const isHidden = isElementHidden(arrowButton);
    toggleVisibility(arrowButton, isHidden);
    toggleVisibility(arrowUpwards, isHidden);
    toggleVisibility(arrowDownward, !isHidden);
  }
};

arrowUpwards?.addEventListener("click", toggleArrowVisibility);
openNewModal?.addEventListener("click", toggleArrowVisibility);
openNewModal?.addEventListener("click", () => toggleVisibility(newModal, true));
