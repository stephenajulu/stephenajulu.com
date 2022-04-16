<section id="content">
    <label for="search">Search</label>
    <input type="text" id="search" v-model="query" placeholder="Ketika kata kunci">
    <br>

    <li v-for="item in filteredItems">
        <a v-bind:href="item.link"> ${ item.title } </a>
        </li>
</section>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"> </script>
<script>

    (async () => {
    const res = await fetch('/SECTIONNAME/index.json');
    const itemsRaw = await res.json();
    const items = itemsRaw.data

    //check url query, if any DOMAIN/search/q?=something
    const urlParams = new URLSearchParams(window.location.search);
    var _query = urlParams.has('q') ? urlParams.get('q') : ""

    new Vue({
        delimiters: ['${', '}'],
        el: '#content',
        data: {
            items: items,
            query : _query
        },
        computed: {
            //if user type something in search box
            filteredItems: function() {
                let itemWithFilter = this.items.filter((item) => {
                                    return item.title.toLowerCase().includes(this.query)
                                })

            return itemWithFilter
            }
        }
    })
    })();
</script>
