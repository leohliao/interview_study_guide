function URLify(string) {
  return string.trim().replace(/\s+/g, "%20");
}

console.log(URLify("Mr  John Smith"));
