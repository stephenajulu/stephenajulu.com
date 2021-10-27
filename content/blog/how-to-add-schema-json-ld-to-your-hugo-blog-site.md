---
authors:
- Stephen Ajulu
categories:
- SEO
tags:
- schema
- jsonld
- schema markup
- search engine optimization
title: How To Add Schema JSON-LD to Your Hugo Blog/Site
excerpt: Here's a simple way to add schema json-ld markup to your hugo blog or site
date: 2021-06-26T17:53:00+03:00
hero: "/images/generative-social-image-1.png"

---
Here's the code:
```html
    {{ if .IsHome }}
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "Ajulu's Thoughts",
        "url": "https://ajulusthoughts.stephenajulu.com",
        "description": "Tech, Lifestyle, Cybersecurity, Finance, Design, Dev Among Other Thoughts with Ajulu.",
        "thumbnailUrl": "https://ajulusthoughts.stephenajulu.com/logo.png"
    }
    </script>
    {{ end }}
    
    {{ if eq .Section "post" }}
    <script type="application/ld+json">
    	{
    		"@context":"http://schema.org",
    		"@type": "BlogPosting", 
    		"image": "{{ .Params.hero | absURL }}", 
    		"url": "{{ .Permalink }}",
    		"headline": "{{ .Title }}",
    		"alternativeHeadline": "{{ .Title }}",
    		"dateCreated": {{ .Date.Format "2006-01-02T15:04:05-07:00" | safeHTML }},
    		"datePublished": {{ .PublishDate.Format "2006-01-02T15:04:05-07:00" | safeHTML }},
    		"dateModified": {{ .Lastmod.Format "2006-01-02T15:04:05-07:00" | safeHTML }},
    		"inLanguage": "{{ .Site.LanguageCode }}",
    		"isFamilyFriendly": "true",
    		"copyrightYear": "{{ .PublishDate.Format "2006" | safeHTML }}",
    		"copyrightHolder": "{{ .Site.Params.author }}",
    		"contentLocation": {
    			"@type": "Place",
    			"name": "Nairobi, Kenya"
    		},
    		"accountablePerson": {
    			"@type": "Person",
    			"name": "Stephen Ajulu",
    			"url": "https://stephenajulu.com"
    		},
    		"author": {
    			"@type": "Person",
    			"name": "Stephen Ajulu",
    			"url": "https://stephenajulu.com"
    		},
    		"creator": {
    			"@type": "Person",
    			"name": "Stephen Ajulu",
    			"url": "https://stephenajulu.com"
    		},
    		"publisher": {
    			"@type": "Organization",
    			"name": "Ajulu's Thoughts",
    			"url": "https://ajulusthoughts.stephenajulu.com",
    			"logo": {
    				"@type": "ImageObject",
    				"url": "https://ajulusthoughts2-1.netlify.app/logo.png",
    			}
    		},
    		"mainEntityOfPage": "True",
    		"articleBody": "{{ .Content | safeJS | htmlUnescape | plainify }}"
    	}
    </script>
    {{ end }}
    
    {{ if .IsPage }}
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "{{ .Title }}",
        "description": {{ .Summary }},
        "publisher": {
            "@type": "ProfilePage",
            "name": "Stephen Ajulu"
        }
    }
    </script>
    {{ end }}
```

Now before you go, kindly go check out these 3 companies
1. [Esntls](https://www.esntls.co/?ref=kuzqn53jomp-) - They sell great affordable clothing. 
2. [JadeBlack](https://www.jadeblack.co/?ref=kuzqn53jomp-) - They create and sell design level glasses(sunglasses and blue light blocking glasses) at affordable prices
3. [Santa Lucia Fragrance](https://santaluciafragrance.com/?ref=kuzqn53jomp-) - They sell absolutely amazing perfumes for men

Feel free to use my coupon code on the three sites, to get 10% off every purchase, coupon code: STEPHENAJULU
Don't miss out for JadeBlack's new products coming out on the 26th of June.

I'd like to introduce Skillshare, a wonderful place to learn all sorts of things from financial literacy to web development and much more. I personally have been learing how to manage my money through a course by Filipa Canelas. Here's the course's link: [Personal Finances - Manage Your Money and Your Financial Freedom](https://www.skillshare.com/classes/Personal-Finances-%E2%80%94-Manage-your-Money-and-your-Financial-Freedom/1240823317/projects?via=search-layout-grid)
To join and receive 1 free month, click here: [1 Free Premium Month Skillshare](https://skl.sh/3wxbE9O)

Thank you everyone, have a nice day!
