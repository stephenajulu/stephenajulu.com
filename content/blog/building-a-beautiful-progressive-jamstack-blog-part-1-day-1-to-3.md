+++
authors = ["stephen-ajulu"]
date = 2020-03-31T15:25:00Z
excerpt = "Hey guys? Today we will be building a beautiful, fast, SEO optimized, progressive JAMstack blog for free. Step by step."
hero = "/images/Screenshot_2020-03-31_20Stephen_20Ajulu_27s_20Blog_e31928d93e0d53d288cde238ac72207d.webp"
timeToRead = 5
title = "Building a Beautiful Progressive JAMstack Blog Part 1: Day 1 to 3"

+++
Hey guys? Today we will be building a beautiful, fast, SEO optimized, progressive JAMstack blog for free. Step by step.

Shall we begin?

### **Day 1**

Choose The Best Static Site Generator. Weigh Pros and Cons. Research.

* **_Choice 1: Jekyll_** – Built on Ruby on Rails, Very Good Community, Extensive Knowledge, Used and Endorsed by [**GitHub**](https://github.com), Very Slow Build. Not good with large blogs(over 30 posts) due to slow build time. Hence not suitable.  
  ❌
* **_Choice 2: Gatsby_** – Built on React, GraphQl and Webpack, Excellent Community, Lack of Sufficient Knowledge, Used and Endorsed by [**Contentful**](https://contentful.com), Lighting Fast Build, Good With Everything, But Not Suitable Due To Time Constraint. However Further Research to Be Done For Future Purposes.  
  ✖️
* **_Choice 3: Hugo_** – Built on Go, Excellent Community, Sufficient Knowledge, Used and Endorsed by [**Forestry.io**](https://forestry.io), Fast Build, Very Good for Big Blogs, In fact its Built for Large Websites and Blogs.  
  ✔️
* Choice? **Hugo**
* **End of Day 1**

### **Day 2**

* Find a good Hugo theme
* Build the blog
* Host on GitHub
* Create 2 branches(Master and Test Features)
* Add to netlify for continuous deployment
* Assign master branch domain name: blog.stephenajulu.com
* Research
* **End of Day 2**

### **Day 3**

* Create a manifest.json
* Generate favicons and app icons for Android, IOS, and Windows
* Create a splashscreen
* Build the “Add To Homescreen” script(a2hs.js, .min.js & .css)
* Build the Service Worker(sw.js) with precache on
* Upload to GitHub (110 icons, manifest.json, sw.js)
* Research
* **End of Day 3**

Now you are up to date.  
The reason i documented my process here is so that anyone can learn.  
I am a crappy dev, i don’t know as much js as i wish i knew.  
But i believe we all have something to learn from each other.  
Ask me questions in the comment section and I’ll answer them to the best of my knowledge.  
I am building a Progressive JAMstack Blog.  
You can view the up to date version here: [**https://blog.stephenajulu.com**](https://blog.stephenajulu.com "https://blog.stephenajulu.com")

### **Unfinished Work**

* Linking the manifest.json to the head
* Adding a few meta tags for SEO
* Add the Service Worker register to the bottom of the body tag
* Add the Add to Homescreen below the service worker register
* Add the Web Share API
* Add the Push Notifications API
* Link the blog back to [**stephenajulu.com**](https://stephenajulu.com)
* Debug and make sure everything works well including the service worker.
* Copy all blog posts from [**https://ajulusthoughts.wordpress.com**](https://ajulusthoughts.wordpress.com "https://ajulusthoughts.wordpress.com") to [**https://blog.stephenajulu.com**](https://blog.stephenajulu.com "https://blog.stephenajulu.com")
* Optimize Image Assets
* Add gzip

Once all the steps are done, the blog should be able to be installed (like a native app), viewed offline (no internet thanks to the Service Worker), and when there’s internet i should be able to inform those who’ve installed it (thanks to the Push Notifications API) that there’s a new blog post, and inform them on the coming give away that is strictly reserved for them, among other things.

**NOTE:** I keep reiterating my personal site every year, working on a new design, using hugo as well but still haven’t assigned the domain name, so you can get the sneak peak of the new design here: [**https://stephenajulu.nelify.com**](https://stephenajulu.nelify.com "https://stephenajulu.nelify.com") it’s version 5. The previous versions are in the footer of [**https://stephenajulu.com**](https://stephenajulu.com "https://stephenajulu.com"). Now why do i do this? To learn new technologies while doing something meaningful and also to make sure my site is up-to date. **Also note** [**ajulusthoughts.wordpress.com**](https://ajulusthoughts.wordpress.com) **is my sweetheart nothing would ever replace it unless it looks exactly like it and promises better performance**. It took me 5 years to build this blog, i am not throwing it away. It will still be updated and will remain great, might even get it’s domain name(ajulusthoughts.com) but [**blog.stephenajulu.com**](https://blog.stephenajulu.com) will be more like a personal blog while this remains a brand blog.

### **Important things to know**

A **progressive web application** is just a website that behaves like a native app(like the ones installed from google play store). Thanks to a service worker, the website can be accessed online because the sw caches the site. It can be installed upon visiting the website, you’ll either see a pop-up(thanks to the Add to Homescreen script) or see a home icon with a plus on it(if Firefox). Progressive Web Apps are faster than any website you’ve seen because of the cache feature. This new blog uses a headless cms: [**Forestry.io**](https://forestry.io)

Those things left should take 2 days. I run into a bit of a hiccup, an issue with the blog that needs to be fixed. Already submitted an issue via github, so it should be resolved by tomorrow. It’s the reason i didn’t complete the process today. I can’t add the scripts to the head and body section because i forgot to include the “layouts/partials/head.html” and “layouts/index.md”  
I also forgot, I’ll be adding a newsletter section to every page but that’s until the above issues are fixed.

To experience PWAs, visit this link: [**https://tomango.co.uk**](https://tomango.co.uk "https://tomango.co.uk")

Static Site Generators, Headless CMS, JAMstack, Progressive Web Applications and Serverless are the Future!Why?

* Cost effective
* Lighting fast
* Can be used on any device(cross platform)
* No servers
* Feature Rich
* Can increase engagement way more than native apps and traditional websites

For security and even faster speeds, I have passed it through Cloudflare and enabled all of Netlify’s asset optimization. The site isn’t as fast as it should be due to the fact that i haven’t added the service worker register.

#### 

Also note PWAs don’t have a good desktop support yet, only Desktop Chromiums(Chrome, Brave, Opera etc) support PWAs(according to my tests, Firefox is yet to release an update with support but PWAs are fully supported by Android, Smart TVs, Smart Watches, KAIOS, Linux, Chrome OS and such. PWAs can also be uploaded to all the stores (Google Play, Microsoft, KAIOS Stores and among others)

### PageSpeed Insights For blog.stephenajulu.com

**_Mobile Score_ : 96**  
TTT, First Meaningful Paint, First Contentful Paint, First CPU idle: 2 seconds  
**_Desktop Score_ : 97**  
TTT, First Meaningful Paint, First Contentful Paint, First CPU idle: 0.7 seconds  
**_Our Goal is 98 or 99_**  
Sadly Day 4 will start tomorrow as i am working on fixing the hiccup we encountered myself, no response on the issue.

### [**Ajulu’s Thoughts**](https://ajulusthoughts.wordpress.com) – Delivering Quality Tech, Cybersecurity & Dev Content Since November 2016

Hey Devs? Found anything wrong with this info? Kindly write your comment down below on what to change.

I will appreciate it, if you take 10 seconds of your time to check out my donations page and donate to the blog and other causes. 40% of the donation goes to buying this blog an official domain name, the rest goes to charity eg supporting children homes. Any amount received will be shown, from whom and to where it went. I will also include screenshots of inflow and outflow. So go check it out: [**Donations**](https://ajulusthoughts.wordpress.com/donate/) and donate! You can also buy me something via the wishing list. Thank you and have a wonderful day.

OwlSec Technologies design and develop fast, secure and search engine optimized progressive websites that use JAMstack or CMS based technologies e.g WordPress, Drupal and more. Making sure a business or individual has not just an online presence but also a lead generation strategy.  
Get a quote: [**info@owlsectechnologies.co.ke**](mailto:info@owlsectechnologies.co.ke)  
Visit our website: [**owlsectechnologies.co.ke**](https://owlsectechnologies.co.ke)

# **SOURCE:** [**AJULU'S THOUGHTS**](https://ajulusthoughts.wordpress.com/2020/03/31/building-a-beautiful-progressive-jamstack-blog-part-1/)

<p>

{{< subscribe email="ajulu@stephenajulu.com" >}}

</p>

{{< rawhtml >}}

<p>

<script src="https://utteranc.es/client.js"

repo="stephenajulu/ajulusthoughts1"

issue-term="pathname"

label="Comment"

theme="github-light"

crossorigin="anonymous" async>

</script>

</p>

{{< /rawhtml >}}