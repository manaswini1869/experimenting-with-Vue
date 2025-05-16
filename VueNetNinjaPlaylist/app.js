const app = Vue.createApp({
    // data, functions, component templates, etc.
    // template: '<h2> I am the template </h2>'
    data () {
        return {
            url: "https://www.google.com",
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'The Final Empire', author: 'Brandon Sanderson', img: './assets/image(1).png', isFav: true},
                { title: 'The Way of the Kings', author: 'Brandon Sanderson', img: './assets/image(2).png', isFav: false},
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: './assets/image(3).png', isFav: true},
            ]
        }
    },
    methods: {
        // changeTitle (title) {
        //     this.title = title
        // }
        changeAppearance () {
            this.showBooks = !this.showBooks
        },
        handleEvents (e, num) {
            console.log(e, e.type)
            if (num) {
                console.log(num)
            }
        },
        handleMouseMove (e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        changeFav (item) {
            item.isFav = !item.isFav
        }
    },
    computed: {
        filteredBooks () {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')