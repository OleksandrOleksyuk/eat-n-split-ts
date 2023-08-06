import { FormEvent, useState } from "react";
import Button from "./Button.tsx";
import { Friend, FormAddFriendProps } from "../types.ts";

const FormAddFriend = ({ onAddFriend }: FormAddFriendProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const id = crypto.randomUUID();
    const newFriend: Friend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend</label>
      <input
        type="text"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />

      <label>🎇 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(evt) => setImage(evt.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
