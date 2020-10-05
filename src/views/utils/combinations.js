export default function getPairs(users) {
  let results = [];

  for (let i = 0; i < users.length - 1; i++) {
    for (let j = i + 1; j < users.length; j++) {
      if (users[i].username !== 'Admin' && users[j].username !== 'Admin')
        results.push([users[i], users[j]]);
    }
  }
  return results;
}
