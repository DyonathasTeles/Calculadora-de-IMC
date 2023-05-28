export const AlertError = {
  element: document.querySelector('.erro'),
  open() {
    AlertError.element.classList.add('open')
  },
  close() {
    AlertError.element.classList.remove('open')
  }
}
