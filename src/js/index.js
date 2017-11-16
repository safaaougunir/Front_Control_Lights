//recueration des rooms

    new Vue({
    el: "#app",
    data: {
        rooms: [],
    },
    methods: {
        mounted: function () {
            axios.get('http://localhost:8080/api/rooms/')
                .then(response => {
                    this.rooms = response.data
                    console.log(this.rooms)
                })
        }
    }
})