export type Friend = {
  id: number | string;
  name: string;
  image: string;
  balance: number;
};

export type FormAddFriendProps = {
  onAddFriend: (newFriend: Friend) => void;
};

export type FriendType = {
  name: string;
};

export type FormSplitBillProps = {
  selectedFriend: FriendType | null;
  key: React.Key;
  onSplitBill: (amount: number) => void;
};

export type FriendListProps = {
  friends: Friend[];
  onSelection: (friend: Friend) => void;
  selectedFriend: Friend | null;
};
export type FriendProps = {
  friend: Friend;
  onSelection: (friend: Friend) => void;
  selectedFriend: Friend | null;
};
