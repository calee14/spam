// content.js
alert("Hello from your Chrome extension!")
// content.js
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);