export default function userSortByHealth(obj) {
  return obj.sort((a, b) => b.health - a.health);
}
