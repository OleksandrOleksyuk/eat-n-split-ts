import { useState } from "react";
import FriendList from "./components/FriendList.tsx";
import Button from "./components/Button.tsx";
import FormAddFriend from "./components/FormAddFriend.tsx";
import FormSplitBill from "./components/FormSplitBill.tsx";
import { Friend } from "./types.ts";

export default function App() {
  const [showFormFriend, setShowFormFriend] = useState<boolean>(false);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  function handleShowFormFriend() {
    setShowFormFriend((show) => !show);
  }

  function handleAddFriend(friend: Friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFormFriend(false);
  }

  function handleSelection(friend: Friend | null) {
    setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
    setShowFormFriend(false);
  }

  function handleSplitBill(value: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend!.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showFormFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowFormFriend}>
          {showFormFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
