export default input => {
  const output = input
    .replace(/<script[^>]*?>.*?<\/script>/gi, "")
    .replace(/<style[^>]*?>.*?<\/style>/gi, "")
    .replace(/<[\/\!]*?[^<>]*?>/gi, "")
    .replace(/<![\s\S]*?--[ \t\n\r]*>/gi, "");
  return output;
};
