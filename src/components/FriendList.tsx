import { FriendListProps } from "../types";
import Friend from "./Friend";

export default function FriendList({
  friends,
  onSelection,
  selectedFriend,
}: FriendListProps) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
