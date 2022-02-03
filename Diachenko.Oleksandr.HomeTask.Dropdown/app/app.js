
function createMenu(arr){

    // створення dropdown кнопки
    const menuButton = document.createElement("button");
    menuButton.className = "btn btn-primary dropdown-toggle";
    menuButton.innerText = "Menu";

    // подія вiдкриття i закриття випадаючого меню по клiку на кнопці меню
    menuButton.addEventListener("click", function(){
        const element = document.querySelector('.dropdown-menu');
        if (element.id === "show") 
            element.id = "";
        else 
            element.id = "show";
    });

    // створення випадаючого меню, додавання до нього елементів з массиву
    const menuEl = document.createElement('div');
    menuEl.className = "dropdown-menu";
    
    for (let i=0, l=arr.length; i<l; i++){
        const menuItem = document.createElement("a");
        menuItem.className = "menu-item";
        menuItem.href = arr[i].link;
        menuItem.innerText = arr[i].displayName;

        // додавання події перевірки на вік при необхідності
        if (arr[i].onlyForAdults) {
            menuItem.addEventListener("click", function(event) {
                let result = confirm("Вам виповнилось 18 рокiв?");
                if (!result)
                    event.preventDefault();
            });
        }

        menuEl.appendChild(menuItem);
    }

    const dropdownContainer = document.querySelector(".dropdown-div");
    dropdownContainer.appendChild(menuButton);
    dropdownContainer.appendChild(menuEl);
}


const menuArray = [
                   { displayName: 'Google',
                     link: 'http://google.com',
                     onlyForAdults: false
                    },
                   { displayName: 'Facebook',
                     link: 'http://facebook.com',
                     onlyForAdults: true
                    }];
                    
createMenu(menuArray);

// подія для закриття випадаючого списку при кліку по зоні за його межами
document.addEventListener("click", function(event){
    const element = document.querySelector('.dropdown-menu');
    if (event.target.className !== "btn btn-primary dropdown-toggle" && element.id === "show") 
        element.id = "";
});


// Створити з допомогою JS функцію createMenu(), яка приймає на вхід масив і створює випадаючий список.
//  [{displayName: 'Google', link: 'http://google.com', onlyForAdults: false}, 
//   {displayName: 'Facebook', link: 'http://facebook.com', onlyForAdults: true}]
// Якщо властивість onlyForAdults === true, тоді при кліку по елементу  випадаючого списку потрібно показати
// confirm вікно, в якому користувач має підтвердити, що йому виповнилось 18 років. 
// Якщо onlyForAdults === false, тоді має відбутись перехід за адресою, вказаній у властивості link. 

// При кліку по будь-якій зоні за межами випадаючого списку, сам список має приховатись з екрану.
