//recueration des rooms

    new Vue({
    el: "#app",
    data: {
        rooms: [],
    },
    methods: {
        mounted: function () {
            axios.get('https://springlight.herokuapp.com/api/rooms/api/rooms/')
                .then(response => {
                    this.rooms = response.data
                    console.log(this.rooms)
                })
        }
    }
})