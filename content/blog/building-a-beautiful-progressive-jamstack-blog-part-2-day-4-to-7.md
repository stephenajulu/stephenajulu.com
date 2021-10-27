+++
authors = ["Stephen Ajulu"]
date = 2020-04-05T12:15:00Z
excerpt = "Hey guys? Welcome to Part 2 of building the beautiful, fast, SEO optimized, progressive JAMstack blog."
hero = "/images/Screenshot_2020-03-31_20Stephen_20Ajulu_27s_20Blog_e31928d93e0d53d288cde238ac72207d.webp"
timeToRead = 5
title = " Building a Beautiful Progressive JAMstack Blog Part 2: Day 4 to 7"

+++
Hey guys? Welcome to Part 2 of building the beautiful, fast, SEO optimized, progressive JAMstack blog.

If you didn’t check out part 1, kindly go do so here: [**https://ajulusthoughts.wordpress.com/2020/03/31/building-a-beautiful-progressive-jamstack-blog-part-1/**](https://ajulusthoughts.wordpress.com/2020/03/31/building-a-beautiful-progressive-jamstack-blog-part-1/ "https://ajulusthoughts.wordpress.com/2020/03/31/building-a-beautiful-progressive-jamstack-blog-part-1/")

So we are continuing with Part 2.

Shall we begin?

## Day 4

Nothing much to do so i did a bit of research

## DAY 5

Here’s where the knowledge of Day 4 come to play.

* Linked the Manifest.json and all the app icons/favicons to the head section as you can remember i couldn’t do this because i was using the original theme’s layout folder so the only way was to copy their layout file to mine and that wasn’t an ideal situation. So i found a solution, Netlify’s Snippet Injection tool.(oh thank you [**netlify**](https://netlify.com)) I had heard of this tool but it was back then when i was using [**Jekyll**](https://jekyllrc.org)(another very good static site generator with thousands of themes), back then i only had 1 site deployed in netlify and i didn’t need to tool. So to continue i managed to link them successfully and the website began acting like and app.
* Linked the Service Worker Register to the bottom of the body using the same Netlify Snippet Tool
* Added the SEO meta tags together with the manifest.json and app icons
* Added more Hugo Shortcodes and paired them with forestry snippets(since am using forestry as my CMS there’s no need to add the shortcodes manually just create a ___.snippet file in /.forestry/snippets/……. as for shortcodes they go under /layouts/shortcodes/…….. I’ll show you how to do this in just a bit.
* Researched
* **End of Day 5**

## DAY 6

* Added more hugo shortcodes and their respective forestry snippets
* Added a [**json feed**](https://blog.stephenajulu.com/feed.json) because ……….. why not?
* Added a [**custom 404**](https://blog.stephenajulu.com/404/) page replacing Netlify’s version
* Added a Comment system that uses Github Issues as the base, the comments system is called [**Utterances**](https://utteranc.es)
* Researched
* **End of Day 6**

## DAY 7

* Did a few tweaks and hacks
* Added Google Analytics
* Turned all images to .webp format because of it’s compression and small file size therefore bringing the total homepage size to 432kb from 3.4mb
* Resized my author image from 1124×1024 to 160×60 or something there about(cant remember the correct sizes but they near those i have mentioned)
* Minified and Unified a few Javascript files
* Removed Google Analytics 🤣 It was slowing down my site because of the requests it made and also privacy issues
* Managed to make the PageSpeed Desktop Score 100 while Mobile is at 98 99(fluctuates)
* Increase page size from 432kb to 532kb(🤣 by adding an important images that was 50 49kb each that were required for SEO)

Now to the good relationship i have discovered between hugo shortcodes and forestry snippets.

![github hugo shortcodes](https://ajulusthoughts.files.wordpress.com/2020/04/screenshot_2020-04-05-stephenajulu-ajulusthoughts1-hugo-shortcodes.png?w=1012 "Hugo Shortcodes")

![github forestry snippets](https://ajulusthoughts.files.wordpress.com/2020/04/screenshot_2020-04-05-stephenajulu-ajulusthoughts1-forestry-snippets.png?w=1012 "Forestry Snippet")

As you can see for every shortcode there’s a snippet, that’s because shortcodes usually have a small piece of code to embed in the page you want it to be activated.

![](/images/Annotation 2020-04-05 164626-1.jpg)

So the first piece of code goes to the /layouts/shortcodes/shortcodename.html while the last one goes to .forestry/snippets/snippetname.snippet. This ensures that i don’t have to copy the last code everywhere manually, i just access them within forestry cms’s ui like this

{{< rawhtml >}}
<p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/M-P0lVXehWM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>
{{< /rawhtml >}}

So now instead of copying the shortcode link everywhere you can just add it as a forestry cms snippet and use it where you would like. Note: This only works if you use Forestry CMS

## UNFINISHED WORK

* Resize all images to a good size
* SEO Optimize the site
* Find a good free resource light analytic service
* Copy all posts from [**Ajulu’s Thoughts**](https://ajulusthoughts.wordpress.com) to [**Ajulu’s Blog**](https://blog.stephenajulu.com)
* Cache all assets
* Add Web Share
* Add Push Notifications
* Link back to [**https://stephenajulu.com**](https://stephenajulu.com "https://stephenajulu.com")
* Add Service Worker Version 3 that caches everything
* Debug
* Optimize
* Make changes to ui
* Release it back to the wild as Novela v3

### _PageSpeed Insights_ for blog.stephenajulu.com

**_Mobile Score_ : 98 99**  
TTT, First Meaningful Paint, First Contentful Paint, First CPU idle: 1.3 seconds  
**_Desktop Score_ : 100**  
TTT, First Meaningful Paint, First Contentful Paint, First CPU idle: 0.5 seconds  
**_Our Goal is 100 in Both_**

### [**Ajulu’s Thoughts**](https://ajulusthoughts.wordpress.com) – Delivering Quality Tech, Cybersecurity & Dev Content Since November 2016

Hey Devs? Found anything wrong with this info? Kindly write your comment down below on what to change.

I will appreciate it, if you take 10 seconds of your time to check out my donations page and donate to the blog and other causes. 40% of the donation goes to buying this blog an official domain name, the rest goes to charity eg supporting children homes. Any amount received will be shown, from whom and to where it went. I will also include screenshots of inflow and outflow. So go check it out: [**Donations**](https://ajulusthoughts.wordpress.com/donate/) and donate! You can also buy me something via the wishing list. Thank you and have a wonderful day.

Before i go, i would like to praise and thank all my favorite tools, products and companies

* [**Github**](https://github.com "GitHub")
* [**Netlify**](https://netlify.com "Netlify")
* [**Cloudflare**]()
* [**Forestry CMS**](https://forestry.io "Forestry")
* [**Formspree**](https://formspree.io "Formspree")
* [**PWAStarter**](https://pwastarter.love2dev.com "PWAStarter")
* [**PWABuilder**](https://pwabuilder.com "PWABuilder")
* [**Namecheap**](https://namecheap.com "NameCheap")
* [**Hugo**](https://gohugo.io "Hugo")
* [**Jekyll**](https://jekyllrc.org "Jekyll")

Il'l do a review of each but for now i can recommend anyone to these. They are the best.