const xhr = new XMLHttpRequest()
xhr.open('GET', "https://jsonplaceholder.typicode.com/users", true)

xhr.responseType = 'json'
xhr.onload = () => {
    var data = xhr.response;
    for(var i = 0; i < 10; i++)
    {
        var name = data[i]['name'];
        var username = data[i]['username'];
        var company = data[i]['company']['name'];
        //document.getElementById('name').innerHTML=name;
        document.write("USER: " + name + ", USERNAME: "+ username + ", COMPANY: " + company + "<br \/>");
    }
}

xhr.send()
