function regularExp(string) {
  let match = /[a-z]+@[a-z]+.[a-z.]+/;
  return match.exec(string);
}

regularExp('name@example.com.');