/**
 * Created by JG on 29/03/14.
 */

// Database
var DB = [];

var itemTable = [], userTable = [];

var userIdArr = [], userNameArr = [],   passArr = [],   emailArr = [],  firstArr = [],  lastArr = [],   addressArr = [];
//  usersId         username            password        email           firstName       lastName        address
var userID,         userName,           password,       email,          fName,          lName,          address;

var postalArr = [], provArr = [],   phoneArr = [],  ageArr = [];
//  postalCode      province        phone(10)       age
var postal,         prov,           phone,          age;
{
    for (var i = 0; i < 5; i++)
    {
        userID = i;
        userName = 'user'+i;
        password = 'pass'+i;
        email = 'email'+i+'@mail.usask.ca';
        fName = 'first'+i;
        lName = 'last'+i;
        address = 'add'+i;
        postal = 'post'+i;
        prov = 'prov'+i;
        phone = 'phone'+i;
        age = 'age'+i;

        userIdArr.push(userID);
        userNameArr.push(userName);
        passArr.push(password);
        emailArr.push(email);
        firstArr.push(fName);
        lastArr.push(lName);
        addressArr.push(address);
        postalArr.push(postal);
        provArr.push(prov);
        phoneArr.push(phone);
        ageArr.push(age);
    }
    userTable.push(userIdArr);
    userTable.push(userNameArr);
    userTable.push(passArr);
    userTable.push(emailArr);
    userTable.push(firstArr);
    userTable.push(lastArr);
    userTable.push(addressArr);
    userTable.push(postalArr);
    userTable.push(provArr);
    userTable.push(phoneArr);
    userTable.push(ageArr);

    var titleArr = [], imageArr = [], descArr = [], priceArr = [], userArr = [], mainCatArr = [], subCatArr = [];
//  Title   Image   Desc    Price   userId   MainCat     SubCat
    var title,  image,  desc,   price,  userId,   mainCat,    subCat;

    title = 'Item1';    titleArr.push(title);
    image = 'Image1';   imageArr.push(image);
    desc  = 'Desc1';    descArr.push(desc);
    price = '1.01';     priceArr.push(price);
    userId = 'User1';    userArr.push(userId);
    mainCat = 0;        mainCatArr.push(mainCat);
    subCat = 1;         subCatArr.push(subCat);

    title = 'Item2';    titleArr.push(title);
    image = 'Image2';   imageArr.push(image);
    desc  = 'Desc2';    descArr.push(desc);
    price = '2.02';     priceArr.push(price);
    userId = 'User2';    userArr.push(userId);
    mainCat = 0;        mainCatArr.push(mainCat);
    subCat = 1;         subCatArr.push(subCat);

    title = 'Item3';    titleArr.push(title);
    image = 'Image3';   imageArr.push(image);
    desc  = 'Desc3';    descArr.push(desc);
    price = '3.03';     priceArr.push(price);
    userId = 'User3';    userArr.push(userId);
    mainCat = 0;        mainCatArr.push(mainCat);
    subCat = 1;         subCatArr.push(subCat);

    title = 'Item4';    titleArr.push(title);
    image = 'Image4';   imageArr.push(image);
    desc  = 'Desc4';    descArr.push(desc);
    price = '4.04';     priceArr.push(price);
    userId = 'User4';    userArr.push(userId);
    mainCat = 0;        mainCatArr.push(mainCat);
    subCat = 1;         subCatArr.push(subCat);


    itemTable.push(titleArr);
    itemTable.push(imageArr);
    itemTable.push(descArr);
    itemTable.push(priceArr);
    itemTable.push(userArr);
    itemTable.push(mainCatArr);
    itemTable.push(subCatArr);

    DB.push(itemTable);
    DB.push(userTable);
}

function createTable()
{
    var id = (parent.document.URL.substring(parent.document.URL.indexOf('?')+4, parent.document.URL.length));
    var main = parseInt(id.substring(0,1));
    var sub  = parseInt(id.substring(1,3));

    var items = DB[0];
    titleArr = items[0]; imageArr = items[1]; descArr = items[2]; priceArr = items[3]; userArr = items[4]; mainCatArr = items[5]; subCatArr = items[6];
    var indexes = [], i, row;

    if(sub == 0)
        for (i = 0; i < mainCatArr.length; i++)
            if (mainCatArr[i] == main)
                indexes.push(i);
    else
        for (i = 0; i < mainCatArr.length; i++)
            if (mainCatArr[i] == main && subCatArr[i] == sub)
                indexes.push(i);

    var contentDiv  = document.getElementById('contentDiv');
    var tbl         = document.createElement("table");
    var tblBody     = document.createElement("tbody");
    var titleCell, imageCell, descCell, priceCell, userCell, mainCatCell, subCatCell;
    for(i = 0; i < indexes.length; i++)
    {
        row = document.createElement('tr');

        titleCell = document.createElement('td');
        imageCell = document.createElement('td');
        priceCell = document.createElement('td');

        titleCell.textContent = titleArr[i];
        imageCell.textContent = imageArr[i];
        priceCell.textContent = '$'+priceArr[i];

        row.appendChild(imageCell);
        row.appendChild(titleCell);
        row.appendChild(priceCell);
        tblBody.appendChild(row);
    }



    tbl.appendChild(tblBody);
    contentDiv.appendChild(tbl);
}

function insertItem(price, title, desc, images, mainCat, subCat)
{
    var div = document.getElementById('details');


}





