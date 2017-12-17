# seppuku
A DoS script for browsers.

I hope your XSS is in order...

It is the user's responsibility to use this script wisely;
 The author takes ZERO responsibility for a user's use of
 this code for malicioius or unlawful purposes. This is
 just a proof of concept.
Don't break any laws; test only on yourself and/or
 consenting party(s) only.
 
If you really want to get arrested use this yourself
 on your own computer/server on an unconsenting 
 party; there is no proxy or Tor support; the DoS
 attack is in the clear.
 
A smart person would stick this script on as many
 websites as possible (XSS, WebApp exploits, SQL 
 injection upload, etc...), ideally on the homepage,
 and anyone going to those sites will become an
 unwitting participant in a DDoS attack. 
 This is good because the unwitting participants can't
  be arrested for something they had no idea they were
  part of.
  
This script uses AJAX to scream AJAX requests at a
 server, both on reply from the server, and at a
 setInterval (setInterval with a 0 parameter).
 This way if a website doesn't reply the setInterval
 AJAX will intervene. Combined it could be quite
 devastating. I used blobs because I wanted the
 script to be self-contained in one js file. If
 blobs don't work the script falls back on just the
 setInterval function. The SharedWorker is created
 from the blob created from the "background" code.
 This allows the DoS attack to continue no matter
 what page on the infected site the unwitting user
 is on, so long as a browser window is still open
 on the site.
  
Updates...
  
12/17/17 - Script is untested.
  
Love,
pareidolia
