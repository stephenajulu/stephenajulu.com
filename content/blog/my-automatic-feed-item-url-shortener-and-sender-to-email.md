---
authors:
- Stephen Ajulu
title: My Automatic Feed Item URL Shortener and Sender to Email
excerpt: "Yes, that's it's name \U0001F601. Made a tool i can't use. Come, read what
  this is about."
date: 2021-06-17T08:00:00+03:00
hero: "/images/afiussg.jpeg"

---
Hi there! Welcome back. I'm experiencing Nairobi's chilly morning. Woke up around 2.30 am. Anyway, i'd like to introduce a new tool. one I sadly can't use as it requires I upgrade to a professional account. It's a multistep zap.

Here's the low down.

It takes this blog's feed, extracts the post URL, and then feeds it into Zapier's URL shortener which then shortens the URL, passes it to the Email by Zapier which then email's me the shortened URL with buttons for sharing the new short URL.

It's a simple thing yet so  intriguing,

Zap apps used: 

* RSS by Zapier(can be replaced with other stuff like Netlify or google docs etc)
* Url Shortener by Zapier
* Email by Zapier(can be replaced with Gmail or your email provider of choice)

I have 2 free workarounds.

1. Create a zap that extracts the feed post URL and adds it to Google Sheets, 1st column, which then using scripts, shortens the URL and places it next to the long URL, column 2. After this, create another zap that takes the shortened URL from column 2 and sends it to Gmail with readily placed share buttons.
2. This follows a similar method as the first but branches off in that after the short URL is in the sheet, you can now make multiple zaps pulling that short URL then sending it to social media e.g twitter, facebook, Linkedin, etc
