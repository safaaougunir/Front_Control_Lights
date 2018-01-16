var app = new Vue({
    el: '#app',
    data: {
        rooms: [],
        buildings :[],
        currentBuildingID:"0",
    },
    mounted: function () {
        this.getBuildings();
        //this.currentBuildingID = this.$route.query.id;
        console.log(this.currentBuildingID);
        if (this.currentBuildingID == 0) {
            this.getRooms();
        } else {
            this.selectBuilding(currentBuildingID);
        }
    },
    methods : {
        getBuildings : function(){
            axios.get('https://controllights.herokuapp.com/api/buildings')
                .then(response => {
                    app.buildings = response.data})
                .catch(function(error)
                {console.log(error);})},
        getRooms : function() {
                axios.get('https://controllights.herokuapp.com/api/rooms')
                    .then(response => {
                        app.rooms = response.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
        }
        },

        switchRinger: function(id){
            axios.post('https://controllights.herokuapp.com/api/rooms/'+id+'/switch-noise/')
                .then(function (response) {
                    for(var i=0; i<app.rooms.length; i++){
                        if (id == app.rooms[i].id) {
                            app.rooms[i].noise = response.data.noise;}}})
                .catch(function (error) {
                    console.log(error);});},

        switchLight: function(id){
            axios.post('https://controllights.herokuapp.com/api/rooms/'+id+'/switch-light/')
                .then(function (response) {
                    for(var i=0; i<app.rooms.length; i++){
                        if (id == app.rooms[i].id) {
                            app.rooms[i].light = response.data.light;}}})
                .catch(function (error) {
                    console.log(error);});},


        selectBuilding : function(currentBuildingID) {
            console.log(currentBuildingID);
            if (currentBuildingID == 0) {
                this.getRooms();
            } else {
                this.currentBuildingID = currentBuildingID;
                axios.get('https://controllights.herokuapp.com/api/buildings/' + currentBuildingID)
                    .then(response => {
                        this.rooms = response.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }}

            })


var switchL = new Vue({
    el: '#app1',
    data: {rooms:[],
        selected1: 'ON',
        selected2: 'ON',
        selected: '*',
        num: 0,
        liist: [],
        options: [
            { text: 'ON', value: 'ON' },
            { text: 'OFF', value: 'OFF' },
        ],
    },
    mounted: function (){ this.getRooms();},
    methods : {
        getRooms : function(){
            axios.get('https://controllights.herokuapp.com/api/rooms')
                .then(response => {
                    switchL.rooms = response.data
                })
                .catch(function(error)
                {console.log(error);})},

        switchRinger: function(id){
            axios.post('https://controllights.herokuapp.com/api/rooms/'+id+'/switch-noise/')
                .then(function (response) {
                    switchL.rooms = response.data
                })
                .catch(function (error) {
                    console.log(error);});},

        switchLight: function(id){
            axios.post('https://controllights.herokuapp.com/api/rooms/'+id+'/switch-light/')
                .then(function (response) {
                    switchL.rooms = response.data
                })
                .catch(function (error) {
                    console.log(error);});},



        switchLightG: function(liist){
            for(var j=0; j<liist.length; j++) {
                axios.post('https://controllights.herokuapp.com/api/rooms/'+ liist[j].id+'switch-light/' )
                    .then(function (response) {
                        switchL.rooms = response.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }}
        ,}})

var appB = new Vue({
    el: '#appB',
    data: {
        buildings: [],
        },
    mounted: function (){ this.getBuildings();},
    methods : {
        getBuildings : function(){
            axios.get('https://controllights.herokuapp.com/api/buildings')
                .then(response => {
                    appB.buildings = response.data})
                .catch(function(error)
                {console.log(error);})},

}})

var switchR = new Vue({
    el: '#appR',
    data: {rooms:[],
        selected1: 'ON',
        selected2: 'ON',
        selected: '*',
        num: 0,
        liist: [],
        options: [
            { text: 'ON', value: 'ON' },
            { text: 'OFF', value: 'OFF' },
        ],
    },
    mounted: function (){ this.getRooms();},
    methods : {
        getRooms : function(){
            // axios.get('https://radiant-retreat-73612.herokuapp.com/api/rooms')
            axios.get('https://controllights.herokuapp.com/api/rooms')
                .then(response => {
                    switchL.rooms = response.data
                })
                .catch(function(error)
                {console.log(error);})},

        switchRinger: function(id){
            axios.post('https://controllights.herokuapp.com/api/rooms/'+id+'/switch-noise/')
                .then(function (response) {
                    switchL.rooms = response.data
                })
                .catch(function (error) {
                    console.log(error);});},

        switchLight: function(id){
            axios.post('https://controllights.herokuapp.com/api/rooms/'+id+'/switch-light/')
                .then(function (response) {
                    switchL.rooms = response.data
                })
                .catch(function (error) {
                    console.log(error);});},



        switchRingerG: function(liist){
            for(var j=0; j<liist.length; j++) {
                axios.post('https://controllights.herokuapp.com/api/rooms/'+liist[j].id+'switch-light/')
                    .then(function (response) {
                        switchL.rooms = response.data
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }}
        ,}})
