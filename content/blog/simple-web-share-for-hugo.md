---
authors:
- Stephen Ajulu
title: Simple Web Share for Hugo
excerpt: Are you a blogger using hugo? Then here's how you can add a native share
  button built using the Web Share API simply
date: 2021-06-17T05:57:00.000+03:00
hero: "/images/web-share-api-small.png"
categories: []
tags: []

---
Hi guys, if you are a blogger using gohugo. This is for you!

Can be copied as is.

```html

<style>

  .webshare {

  justify-content: center;

  display:flex;

}

  #tip {

  display: none;

}

\#tip.show {

  display: block;

}

.wsbutton {

  border: 0;

  padding: 0;

  cursor: pointer;

  outline: 0;

  -webkit-appearance: none;

  display: inline-block;

  position: relative;

  padding: 10px 8px;

  top: 0;

  font-size: 15px;

  border-radius: 50px;

  border-bottom: 1px solid rgba(28, 227, 125, 0.5);

  background: rgba(22, 230, 137, 1);

  color: #fff;

  box-shadow: 0px 0px 0px rgba(15, 165, 60, 0.1);

}

</style>

<div class="webshare">

  <p id="tip">Your browser does not support the Web Share API! Try the other share buttons</p>

  <button id="share" class="wsbutton" title="Share This Post">Web Share</button>

</div>

<script>

  const share = e => {

  if (navigator.share) {

    navigator

      .share({

        title: "{{ .Title }}",

        text: "{{ .Params.excerpt }}",

        url: "{{ .RelPermalink }}"

      })

      .then(() => console.log("thanks for sharing"))

      .catch(error => console.log("error", error));

  }

};

if(!navigator.share) {

  document.getElementById('tip').className = 'show'

}

document.getElementById("share").addEventListener("click", share);

</script>
```

Save it as a partial and include it e.g {{ partial "share/webshare.html" . }}

Since I already have a fall back I will not include that here as I already mentioned it in  another post.

Check it out.

{{< articlepreview "/post/share-buttons-for-hugo" >}}