let words = [
  "address",
  "admin",
  "administrator",
  "app",
  "application",
  "avatar",
  "bandwidth",
  "banner",
  "bit",
  "blog",
  "blog",
  "bookmarks",
  "browse",
  "browser",
  "button",
  "byte",
  "cache",
  "case-sensitive",
  "chat",
  "chat",
  "click",
  "click",
  "clickbait",
  "clipart",
  "cloud computing",
  "comments",
  "comment",
  "cookie",
  "copyright",
  "database",
  "developer, web developer",
  "digital",
  "digital communication",
  "direct message, DM",
  "domain extension, domain suffix",
  "Country-code top-level domains",
  "domain name",
  "DOS",
  "denial of service attack",
  "DNS",
  "Domain Name System",
  "down",
  "download",
  "e-commerce",
  "email",
  "EMF",
  "electromagnetic fields",
  "FAQ",
  "Frequently Asked Questions",
  "favouritesUK, favoritesUS",
  "field, form field",
  "filter, web filter",
  "firewall",
  "follow",
  "follower",
  "format, file format",
  "forum, web forum",
  "forward",
  "FTP",
  "file transfer protocol",
  "GB, gigabyte",
  "GIF",
  "go down",
  "hack",
  "hacker",
  "history",
  "homepage",
  "HTML",
  "https",
  "hyperlink",
  "icon",
  "inbox",
  "internet, Internet",
  "intranet",
  "IP",
  "Internet Protocol",
  "IP address",
  "ISP",
  "internet service provider",
  "IT",
  "information technology",
  "JPG, JPEG",
  "keyword, keyphrase",
  "LAN",
  "local area network",
  "link",
  "link",
  "log in/log on",
  "meme",
  "message",
  "modem",
  "net",
  "network",
  "offline",
  "online",
  "OP",
  "password",
  "phishing",
  "platform, online platform, digital platform",
  "podcast",
  "print out",
  "program",
  "programming language",
  "protocol",
  "router, wifi router",
  "scroll up/down/sideways",
  "search",
  "search engine",
  "SEO",
  "search engine optimization",
  "share",
  "sign in",
  "social media",
  "software program",
  "spam, spam mail",
  "spammer",
  "subscribe",
  "switch something off, switch off something",
  "toolbar",
  "type in",
  "up",
  "upload",
  "URL",
  "uniform resource locator",
  "user ID, userID",
  "username",
  "virus, computer virus",
  "WAN",
  "wide area network",
  "web",
  "web hosting",
  "webmaster",
  "web page, webpage",
  "web server",
  "website",
  "Wi-Fi, wifi",
  "wireless LAN, WLAN",
  "WWW, www",
  "World Wide Web, world wide web",
];

let count = 0;

// Pull the variables from the HTML
var para = document.getElementById("changed_p");
var prev_btn = document.getElementById("prev_btn");
var next_btn = document.getElementById("next_btn");

// Shuffle the array
function shuffle(shuffled_words) {
  let currentIndex = shuffled_words.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffled_words[currentIndex], shuffled_words[randomIndex]] = [
      shuffled_words[randomIndex],
      shuffled_words[currentIndex],
    ];
  }
  return shuffled_words;
}

shuffle(words);

// Show the previous word in the array on click
prev_btn.onclick = function () {
  // Don't underflow the array
  if (count == 0) {
    para.innerHTML = words[0];
  }
  // Use the last element in the array
  else {
    // para.innerHTML = seen[seen.length - count];
    count--;
    para.innerHTML = words[count];
  }
};

// Go to the next word when the button is pushed
next_btn.onclick = function () {
  if (count == words.length - 1) {
    // Use the last item in seen to prevent overflow
    para.innerHTML = words[words.length - 1];
  } else {
    count++;
    para.innerHTML = words[count];
  }
};
