let register = document.querySelector("form")
register.addEventListener( "submit", function(event){
    event.preventDefault() // Ngăn chặn hành vi mặc định của thẻ form(tải lại trang,...)

    //Trim là phương thức loại bỏ khoăng trắng ở đầu và cuối chuỗi
    //Value là thuộc tính lấy giá trị của thẻ input
    let name = document.getElementById("name").value.trim()
    let email= document.getElementById("email").value.trim()
    let password= document.getElementById("password").value.trim()

    if(localStorage.getItem("users")) {
        let users_data = JSON.parse(localStorage.getItem("users"))
        users_data.push(
            {
                name: name,
                email: email,
                password: password
            }
        )
        
        localStorage.setItem("users", JSON.stringify(users_data))
        location.href = "sign-in.html"
    } else {
        let users_data = [
            {
                name: name,
                email: email,
                password: password
            }
        ]

        localStorage.setItem("users", JSON.stringify(users_data))
        location.href = "sign-in.html"
     }
    
})
