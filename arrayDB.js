/**
 * Created by JG on 29/03/14.
 */

// Database
var DB = [];

var itemTable = [], userTable = [];

var passArr = [],   emailArr = [],  firstArr = [],  lastArr = [],   addressArr = [];
//  password        email           firstName       lastName        address
var password,       email,          fName,          lName,          address;

var postalArr = [], provArr = [],   phoneArr = [];
//  postalCode      province        phone(10)
var postal,         prov,           phone;

{
    for (var i = 0; i < 5; i++)
    {
        password = 'pass'+i;
        email = 'email'+i+'@mail.usask.ca';
        fName = 'first'+i;
        lName = 'last'+i;
        address = 'add'+i;
        postal = 'post'+i;
        prov = 'prov'+i;
        phone = 'phone'+i;

        passArr.push(password);
        emailArr.push(email);
        firstArr.push(fName);
        lastArr.push(lName);
        addressArr.push(address);
        postalArr.push(postal);
        provArr.push(prov);
        phoneArr.push(phone);
    }

    userTable.push(emailArr);
    userTable.push(passArr);
    userTable.push(firstArr);
    userTable.push(lastArr);
    userTable.push(addressArr);
    userTable.push(postalArr);
    userTable.push(provArr);
    userTable.push(phoneArr);

    var titleArr = [], imageArr = [], descArr = [], priceArr = [], userArr = [], mainCatArr = [], subCatArr = [];
//  Title   Image   Desc    Price   userId   MainCat     SubCat
    var title,  image,  desc,   price,  userId,   mainCat,    subCat;
    for(var i = 0; i < 7; i++)
        for(var j = 0; j<30; j++)
        {
            title = 'Item'+i+' : '+j;    titleArr.push(title);
            image = 'Image1';   imageArr.push(image);
            desc  = 'Desc1';    descArr.push(desc);
            price = '1.01';     priceArr.push(price);
            userId = 'User1';    userArr.push(userId);
            mainCat = i;        mainCatArr.push(mainCat);
            subCat = j;         subCatArr.push(subCat);

            title = 'Item'+i+' : '+j;    titleArr.push(title);
            image = 'Image2';   imageArr.push(image);
            desc  = 'Desc2';    descArr.push(desc);
            price = '2.02';     priceArr.push(price);
            userId = 'User2';    userArr.push(userId);
            mainCat = i;        mainCatArr.push(mainCat);
            subCat = j;         subCatArr.push(subCat);

            title = 'Item'+i+' : '+j;    titleArr.push(title);
            image = 'Image3';   imageArr.push(image);
            desc  = 'Desc3';    descArr.push(desc);
            price = '3.03';     priceArr.push(price);
            userId = 'User3';    userArr.push(userId);
            mainCat = i;        mainCatArr.push(mainCat);
            subCat = j;         subCatArr.push(subCat);

            title = 'Item'+i+' : '+j;    titleArr.push(title);
            image = 'Image4';   imageArr.push(image);
            desc  = 'Desc4';    descArr.push(desc);
            price = '4.04';     priceArr.push(price);
            userId = 'User4';    userArr.push(userId);
            mainCat = i;        mainCatArr.push(mainCat);
            subCat = j;         subCatArr.push(subCat);
        }

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

