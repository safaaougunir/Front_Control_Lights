var app = new Vue({
    el: '#app',
    data: {
        rooms: [],
    },
    mounted: function () {
        this.getrooms();
    },
    methods: {
        switchLight(room) {
            axios.post('https://springlight.herokuapp.com/api/rooms/' + room.id + '/switch-light')
                .then(function (response) {
                    app.rooms = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getrooms() {
            axios.get('https://springlight.herokuapp.com/api/rooms/')
                .then(function (response) {
                    app.rooms = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        switchNoise(room) {
            axios.post('https://springlight.herokuapp.com/api/rooms/' + room.id + '/switch-noise')
                .then(function (response) {
                    app.rooms = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
});