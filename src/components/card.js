export function UserCard(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("userCard");
  const userName = document.createElement("p");
  userName.innerText = user.name;
  userCard.appendChild(userName);
  this.userCard = userCard;
}
