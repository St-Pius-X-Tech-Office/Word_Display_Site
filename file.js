let words = [
  "address",
  "administrator",
  "application (app)",
  "avatar",
  "bandwidth",
  "banner",
  "bit",
  "blog",
  "bookmarks",
  "browse",
  "browser",
  "button",
  "byte",
  "cache",
  "case-sensitive",
  "chat",
  "clickbait",
  "clipart",
  "cloud computing",
  "comments",
  "cookie",
  "copyright",
  "database",
  "developer",
  "digital",
  "digital communication",
  "direct message, DM",
  "domain extension, domain suffix",
  "Country-code top-level domains",
  "domain name",
  "denial of service attack (DOS)",
  "Domain Name System (DNS)",
  "down",
  "download",
  "e-commerce",
  "email",
  "electromagnetic fields (EMF)",
  "field, form field",
  "filter, web filter",
  "firewall",
  "follow",
  "follower",
  "format, file format",
  "forum, web forum",
  "forward",
  "file transfer protocol (FTP)",
  "gigabyte (GB)",
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
  "Internet",
  "intranet",
  "Internet Protocol (IP)",
  "IP address",
  "internet service provider (ISP)",
  "information technology (IT)",
  "JPG, JPEG",
  "keyword, keyphrase",
  "local area network (LAN)",
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
  "platform (online/digital)",
  "podcast",
  "print out",
  "program",
  "programming language",
  "protocol",
  "router (wifi router)",
  "scroll up/down/sideways",
  "search",
  "search engine",
  "search engine optimization (SEO)",
  "share",
  "sign in",
  "social media",
  "software program",
  "spam",
  "spammer",
  "subscribe",
  "switch something off",
  "toolbar",
  "type in",
  "up",
  "upload",
  "URL",
  "uniform resource locator",
  "user ID",
  "username",
  "virus",
  "wide area network (WAN)",
  "web",
  "web hosting",
  "webmaster",
  "web page, webpage",
  "web server",
  "website",
  "Wi-Fi",
  "wireless LAN (WLAN)",
  "www",
];

let count = 0;

// Pull the variables from the HTML
var para = document.getElementById("changed_p");
var start_btn = document.getElementById("start_btn");
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

// Start the game
start_btn.onclick = function () {
  para.innerHTML = words[0];
  // Make the button disappear on start  
  start_btn.style.display = "none";
};

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
