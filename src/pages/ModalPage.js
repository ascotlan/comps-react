import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        sapien ornare, interdum enim sit amet, fermentum velit. Sed sed posuere
        ipsum. Ut luctus interdum eros ut pellentesque. Donec in ligula lacus.
        Nunc semper, purus ut porta imperdiet, purus dui tincidunt purus, et
        sagittis lorem dolor id enim. Integer molestie arcu quam, et pulvinar
        risus condimentum vitae. Vestibulum eget mauris arcu. Proin tincidunt
        dignissim malesuada. Vivamus nec suscipit nunc, sagittis luctus odio.
      </p>
    </div>
  );
}

export default ModalPage;
