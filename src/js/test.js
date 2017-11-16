var app = new Vue({
    el: '#app',
    data: {
        rooms: [],
    },

        getrooms: function () {
            axios.get('http://localhost:8080/api/rooms/')
                .then(function (response) {
                    app.rooms = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        switchLight: function (room) {
          ios.post('http://localhost:8080/api/rooms/' + room.id + '/switch-light')
                .then(function (response) {
                    app.rooms = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        switch_noise: function (room) {

            axios.post('localhost:8080/api/rooms/' + room.id + '/switch-noise')
                .then(function (response) {
                    app.rooms = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        mounted: function () {
            this.getrooms();
        }

})