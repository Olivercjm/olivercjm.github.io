function news() {
                document.getElementById("news").scrollIntoView({ behavior: 'smooth' });
            }

            function men() {
                document.getElementById("mens").scrollIntoView({ behavior: 'smooth' });
            }

            function woman() {
                document.getElementById("womans").scrollIntoView({ behavior: 'smooth' });
            }

            function kid() {
                document.getElementById("kids").scrollIntoView({ behavior: 'smooth' });
            }

            function sale() {
                document.getElementById("sales").scrollIntoView({ behavior: 'smooth' });
            }

            function btt() {
                document.getElementById("btts").scrollIntoView({ behavior: 'smooth' });
            }

            function btm()
            {
                window.location.href = 'LIKE.html';
            }

            function ajn()
            {
                window.location.href = 'ajn.html';
            }

            function aj1()
            {
                window.location.href = 'aj1.html';
            }

            function aj2()
            {
                window.location.href = 'aj2.html';
            }

            function aj3()
            {
                window.location.href = 'aj3.html';
            }

            function aj4()
            {
                window.location.href = 'aj4.html';
            }

            function aj5()
            {
                window.location.href = 'aj5.html';
            }

            function ajw1()
            {
                window.location.href = 'ajw1.html';
            }

            function ajw2()
            {
                window.location.href = 'ajw2.html';
            }

            function ajw3()
            {
                window.location.href = 'ajw3.html';
            }

            function ajw4()
            {
                window.location.href = 'ajw4.html';
            }

            function ajw5()
            {
                window.location.href = 'ajw5.html';
            }

            function ajs1()
            {
                window.location.href = 'ajs1.html';
            }

            function ajs2()
            {
                window.location.href = 'ajs2.html';
            }

            function ajs3()
            {
                window.location.href = 'ajs3.html';
            }

            function ajs4()
            {
                window.location.href = 'ajs4.html';
            }

            function ajs5()
            {
                window.location.href = 'ajs5.html';
            }

            function ajk1()
            {
                window.location.href = 'ajk1.html';
            }

            function ajk2()
            {
                window.location.href = 'ajk2.html';
            }

            function ajk3()
            {
                window.location.href = 'ajk3.html';
            }

            function ajk4()
            {
                window.location.href = 'ajk4.html';
            }

            function ajk5()
            {
                window.location.href = 'ajk5.html';
            }

            function home()
            {
                window.location.href = 'home.html';
            }

            function acc()
            {
                window.location.href = 'acc.html';
            }

            function fav() {
                const itemName = document.querySelector('h1.aj').innerText;
                const itemGender = document.querySelector('h1.gender').innerText;
                const itemPrice = document.querySelector('h1.price').innerText;
                const itemDescription = document.querySelector('p.des').innerText;

                const newItem = {
                    name: itemName,
                    gender: itemGender,
                    price: itemPrice,
                    description: itemDescription
                };
            
                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            
                const existingItem = favorites.find(item => item.name === itemName);
                if (!existingItem) {

                    favorites.push(newItem);

                    localStorage.setItem('favorites', JSON.stringify(favorites));

                    alert(`"${itemName}"added to favorites successfully.`);
                } else {
                    alert(`"${itemName}" is already available in favorites.`);
                }
            }
            
            function atc() {
                const itemName = document.querySelector('h1.aj').innerText;
                const itemGender = document.querySelector('h1.gender').innerText;
                const itemPrice = document.querySelector('h1.price').innerText;

                const newItem = {
                    name: itemName,
                    gender: itemGender,
                    price: itemPrice,
                };
            
                let addtocart = JSON.parse(localStorage.getItem('addtocart')) || [];
            
                const existingItem = addtocart.find(item => item.name === itemName);
                if (!existingItem) {

                    addtocart.push(newItem);

                    localStorage.setItem('addtocart', JSON.stringify(addtocart));

                    alert(`"${itemName}"added to cart successfully.`);
                } else {
                    alert(`"${itemName}" is already available in cart.`);
                }
            }
            

            function gmail()
            {
                window.location.href = "mailto:chanjienmeng123@gmail.com";
            }

            function goback()
                {
                    window.location.href = 'LIKE.html';
                }

                function favh() {
                    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                    let tableContent = '<table border="1">';
                    tableContent += '<tr><th>Name</th><th>Gender</th><th>Price</th><th>Description</th><th>Action</th></tr>';
                
                    favorites.forEach((item, index) => {
                        tableContent += `
                            <tr>
                                <td>${item.name}</td>
                                <td>${item.gender}</td>
                                <td>${item.price}</td>
                                <td>${item.description}</td>
                                <td><button onclick="deleteItem(${index})">Delete</button></td>
                            </tr>`;
                    });
                
                    tableContent += '</table>';
                    const favorite = window.open('');
                    favorite.document.write(`
                        <style>
                            body {
                                background-image: url('likebg.png');
                                font-family: Arial, Helvetica, sans-serif;
                            }
                            .fav {
                                background-color: white;
                                border: double 1px;
                                text-align: center;
                                padding: 10px;
                            }
                            table {
                                border: double 3px;
                                background-color: white;
                                width: 80%;
                                margin-left:15%;
                            }
                            th, td {
                                text-align: left;
                            }
                            button{
                                border-radius: 10%;
                                background-color: white;
                            }
                            button:hover{
                                border-radius: 20%;
                                background-color: red;
                            }
                        </style>
                        <h1 class="fav">Favorites</h1>
                        ${tableContent}
                        <script>
                            function deleteItem(index) {
                                let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                                favorites.splice(index, 1);
                                localStorage.setItem('favorites', JSON.stringify(favorites));
                                const table = window.document.querySelector('table');
                                table.deleteRow(index + 1);
                            }
                        </script>
                    `);
                }
                
                
                
                function carth() {
                    const addtocart = JSON.parse(localStorage.getItem('addtocart')) || [];
                    let tableContent = '<table border="1">';
                    tableContent += '<tr><th>Name</th><th>Gender</th><th>Price</th><th>Action</th></tr>';
                
                    addtocart.forEach((item, index) => {
                        tableContent += `
                            <tr>
                                <td>${item.name}</td>
                                <td>${item.gender}</td>
                                <td>${item.price}</td>
                                <td onclick="deleteItem(${index})" class="r">Remove</td>
                            </tr>`;
                    });
                
                    tableContent += '</table>';
                
                    const atc = window.open('');
                    atc.document.write(`
                        <style>
                            body {
                                background-image: url('likebg.png');
                                font-family: Arial, Helvetica, sans-serif;
                            }
                            .fav {
                                background-color: white;
                                border: double 1px;
                                text-align: center;
                                padding: 10px;
                            }
                            table {
                                border: double 3px;
                                background-color: white;
                                width: 100%;
                            }
                            th, td {
                                text-align: left;
                            }
                            td.r{
                                background-color: white;
                            }
                            td.r:hover{
                                background-color: red;
                            }
                        </style>
                        <h1 class="fav">Cart</h1>
                        ${tableContent}
                        <script>
                            function deleteItem(index) {
                                let addtocart = JSON.parse(localStorage.getItem('addtocart')) || [];
                                addtocart.splice(index, 1);
                                localStorage.setItem('addtocart', JSON.stringify(addtocart));
                                const table = window.document.querySelector('table');
                                table.deleteRow(index + 1);
                            }
                        </script>
                    `);
                }
