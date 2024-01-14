let x = prompt('Enter your birthday: ## ')
        let z = document.getElementById('bday')
        z.innerHTML = x;
        let y = prompt('Enter your birthmonth: ##')
        let t = document.getElementById('bmonth')
        t.innerHTML = y;
        let w = prompt('Enter your birthryar: 19## ')
        let u = document.getElementById('byear')
        u.innerHTML = w;

        let flag = x

        let flag2 = y

        let flag3 = w
        function _day(a) {

            if (a == '+') {
                flag++
            } else if (a == '-') {
                flag--
            } else {
                flag = 0
            }

            z.innerHTML = flag;
            if (flag < 31) {
                z.style.color = 'green'
            }
            else if (flag > 31) {
                z.style.color = 'red'
            }
            else {
                z.style.color = 'black'
            }
        }
        function _day2(a) {

            if (a == '+') {
                flag2++
            } else if (a == '-') {
                flag2--
            } else {
                flag2 = 0
            }

            t.innerHTML = flag2;
            if (flag2 < 12) {
                t.style.color = 'green'
            }
            else if (flag2 > 12) {
                t.style.color = 'red'
            }
            else {
                t.style.color = 'black'
            }
        }
        function _day3(a) {

            if (a == '+') {
                flag3++
            } else if (a == '-') {
                flag3--
            } else {
                flag3 = 0
            }

            u.innerHTML = flag3;
            if (flag3 > 1900) {
                u.style.color = 'green'
            }
            else if (flag3 < 1900) {
                u.style.color = 'red'
            }
            else {
                u.style.color = 'black'
            }
        }

        function submit() {
            let d = new Date()
            let e = d.getDate()
            let f = d.getMonth()
            let g = d.getFullYear()
            e = e - flag
            f =  f - flag2
            g =  g - flag3
            if(e<0){
                
                e = 31 + e 
            }
            if(f<0){
                
                f = 12 + f 
                g= g - 1
            }
            document.getElementById('sub').innerHTML =  ' your age is :  '+g+'years , '+f+'months , '+e+' days'
        }
    