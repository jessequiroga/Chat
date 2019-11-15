var socket = io.connect('http://localhost:5000'); 


socket.on('add-users', function (data) {
    for (var i = 0; i < data.users.length; i++) {
        var el = document.createElement('div'),
            id = data.users[i];
        el.setAttribute('id', id);
        el.innerHTML = id;
        el.addEventListener('click', function () {
          	// TODO: We will create this method
            createOffer(id);
        });
        document.getElementById('users').appendChild(el);
    }
});
