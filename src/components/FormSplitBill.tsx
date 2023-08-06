import React, { FormEvent, useState } from "react";
import Button from "./Button.jsx";
import { FormSplitBillProps } from "../types.js";

const FormSplitBill: React.FC<FormSplitBillProps> = ({
  selectedFriend,
  onSplitBill,
}) => {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const paidByFriend = bill ? bill - paidByUser : 0;
  const [whoIsPaid, setWhoIsPaid] = useState<string>("user");

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaid === "user" ? paidByFriend : -paidByUser);
  }
  return (
    selectedFriend && (
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill a value</label>
        <input
          type="number"
          value={bill === 0 ? "" : bill.toString()}
          onChange={(evt) => setBill(parseInt(evt.target.value))}
        />

        <label>🧍‍♂️ Your expense</label>
        <input
          type="number"
          value={paidByUser === 0 ? "" : paidByUser.toString()}
          onChange={(evt) =>
            setPaidByUser(
              +evt.target.value > bill ? paidByUser : +evt.target.value
            )
          }
        />

        <label>👫 {selectedFriend.name}'s expence</label>
        <input type="number" disabled value={paidByFriend} />

        <label>🤑 Who is paying the bill</label>
        <select
          value={whoIsPaid}
          onChange={(evt) => setWhoIsPaid(evt.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    )
  );
};
export default FormSplitBill;
