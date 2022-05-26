---
authors:
- Stephen Ajulu
categories:
- Technology
- Web3
- Finance
tags:
- technology
- web3
- finance
- bat
- basicattentiontoken
- netlify
- fleek
- heroku
title: Host Your Website For Free, Make It Web3 Compliant and Earn Money From It
date: 2022-05-26T20:30:00+03:00
hero: "/images/le-buzz-kieii2b9gku-unsplash.jpg"
description: How to host your website for free, make it web3 friendly, and earn money
  from your content

---
### Host Your Website For Free

#### Static Websites

Assuming the source code is in a git repository online(GitHub, GitLab, BitBucket, etc)

1. Go to [netlify.com](https://netlify.com) and create an account
2. Click "**_Add new site_**"
3. Select "**_Import an existing project_**"
4. Select Git provider_([_I'm on github_](https://github.com/stephenajulu))_
5. Authenticate and Authorize
6. Select the repository
7. Enter build command e.g this site's build command is "**_hugo --gc --minify_**"
8. Enter publish directory e.g this site's publish directory is "**_public_**"
9. Click "**_Deploy site_**"

That's it. Depending on the static version you used. It will take some time.

**NB:** _Just plain HTML, CSS, and Javascript will take less than 3 seconds and does not need a specified build command or publish directory, Hugo takes anywhere from 10 seconds to 1 minute depending on how large your site is._

#### Dynamic Websites

Now, this depends on what tech stack you are using. I won't lay down the details. Rather I'll provide you with a few hosting solutions.

1. [Heroku](https://heroku.com)
2. [Digital Ocean](https://digitalocean.com)
3. [Truehost(Affordable)](https://truehost.co.ke/cloud/aff.php?aff=1738)
4. [Namecheap](https://namecheap.com)

### Making Your Website Web3 Compliant

As far as I know, the only possible way is by making a static site web3 compliant. I don't know how to make a dynamic site web3 compliant hence will only cover static sites.

There are three URL options:

1\. **Constant Hashes** => serve as links within ipfs and have been discussed in my previous article.

2\. **DNSLink** => Simply put, a regular Web2.0 domain name from a DNS record.

3\. **ENS** => Dynamic Url with a ' _.eth_ ' ending and that is more readable than IPNs links. I would argue that this is the best domain choice for establishing a website, but the first option is free :)

#### Static Sites

1. Go to [fleek.co](https://fleek.co) and create an account
2. Follow the same process as Netlify
3. Select either IPFS or Internet Computer. Your choice.

### Earn Money From Your Content Website

Here I won't cover affiliate marketing and other popular ways to monetize your website as there are enough resources in the web.

#### 1. Web Monetization

To monetize your site, you must:

1. Set up a web monetized receiver (wallet) for receiving payments. [Supported wallets.](https://webmonetization.org/docs/ilp-wallets)
2. Get your wallet's payment pointer. E.g. $wallet.example.com/alice
3. Create a special `<meta>` tag that tells [Web Monetization providers](https://webmonetization.org/#providers) how to pay you. e.g.

       <meta name="monetization" content="$wallet.example.com/alice">
4. Add the `<meta>` tag to each page of your website that you want to monetize. E.g.

       <!doctype html>
       <html>
       <head>
       <title>Web Monetized Site</title>
       <meta name="monetization" content="$wallet.example.com/alice">
       </head>
       </html>
5. For a more detailed look at web monetizing your site, see the [Web Monetization explainer](https://webmonetization.org/docs/explainer#getting-started).
6. Congratulations! Your website is now web monetized.

#### 2. Basic Attention Tokens

Follow [**this**](https://basicattentiontoken.org/publisher-terms-of-service/) and [**this**](https://creators.brave.com/)**.**

#### 3. Digital Product

Create an account on Gumroad, and start creating digital products and selling. Then use their overlay widget on your website

Photo by [Le Buzz](https://unsplash.com/@le_buzz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/website?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)