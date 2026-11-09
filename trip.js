// Trip sheet for this coach. Edit this file before the run; the portal
// reads it on load. Times are local 24-hour "HH:MM"; "day" counts days
// after the trip date (0 = departure day, 1 = next day, ...).
// The stops below are SAMPLE data - replace them with the real run.
window.TRIP = {
  service: "Florida Line Run",
  direction: "Southbound",
  coach: "412",
  driver: "",            // optional, e.g. "Dave"
  date: (function () { // demo copy: the sample run is always under way
    var n = new Date(); if (n.getHours() * 60 + n.getMinutes() < 330) n.setDate(n.getDate() - 1);
    var z = function (v) { return (v < 10 ? "0" : "") + v; };
    return n.getFullYear() + "-" + z(n.getMonth() + 1) + "-" + z(n.getDate());
  })(),    // departure date, YYYY-MM-DD
  wifi: {
    name: "PioneerTrails-Guest",
    password: "",        // leave blank for an open network
    // Where the Connect button sends the rider to get online.
    // - nodogsplash / openNDS splash pages: leave blank. The router adds
    //   ?authaction=...&tok=...&redir=... to this page and Connect uses them.
    // - Other routers: put the router's accept / login URL here. Any query
    //   string the router added to this page is passed along to it.
    connectUrl: "",
    // Where to send riders after they connect (blank = stay on this page).
    afterConnectUrl: ""
  },
  driverNote: "",        // optional line shown at the top, e.g. "Next rest stop in about an hour."
  // Photo across the top of the trip card. Blank = picked from the final
  // stop's state: "Sarasota, FL" uses img/dest/fl.jpg, an Alaska tour ending
  // ", AK" uses img/dest/ak.jpg. Set a path here for a specific tour photo.
  photo: "",
  // Live progress from Samsara Routes, through the relay (PioneerTrailsRelay).
  // The coach number above must match the vehicle name in Samsara.
  // Leave url blank to use only the scheduled stops below. If the relay can't
  // be reached (e.g. before a rider connects), the page falls back to them.
  live: {
    url: "",             // e.g. "https://<your-relay>.netlify.app/api/trip"
    refreshSeconds: 30
  },
  stops: [
    { name: "Millersburg, OH",    time: "05:30" },
    { name: "Wooster, OH",        time: "06:15" },
    { name: "Columbus, OH",       time: "08:00" },
    { name: "Marietta, OH",       time: "10:15" },
    { name: "Parkersburg, WV",    time: "10:45" },
    { name: "Charleston, WV",     time: "12:30" },
    { name: "Rest stop - Wytheville, VA", time: "15:00", rest: true },
    { name: "Rest stop - Santee, SC",     time: "21:30", rest: true },
    { name: "Tampa, FL",          time: "07:00", day: 1 },
    { name: "Sarasota, FL",       time: "08:30", day: 1 }
  ]
};
