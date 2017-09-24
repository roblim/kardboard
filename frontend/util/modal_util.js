export const openModal = () => {
  this.setState({ modalIsOpen: true });
}

export const afterOpenModal = () => {
  // this.subtitle.style.color = '#f00';
}

export const closeModal = () => {
  this.setState({ modalIsOpen: false });
}
