/**
 * Created by JG on 29/03/14.
 */

// Database
var DB = [];

var titleArr = [], imageArr = [], descArr = [], priceArr = [], userArr = [], mainCatArr = [], subCatArr = [];
//  Title   Image   Desc    Price   User    MainCat     SubCat
var title,  image,  desc,   price,  user,   mainCat,    subCat;

title = 'Item1';    titleArr.push(title);
image = '';         imageArr.push(image);
desc  = 'Desc1';    descArr.push(desc);
price = '1.01';     priceArr.push(price);
user  = 'User1';    userArr.push(user);
mainCat = 0;        mainCatArr.push(mainCat);
subCat = 1;         subCatArr.push(subCat);

title = 'Item2';    titleArr.push(title);
image = '';         imageArr.push(image);
desc  = 'Desc2';    descArr.push(desc);
price = '2.02';     priceArr.push(price);
user  = 'User2';    userArr.push(user);
mainCat = 0;        mainCatArr.push(mainCat);
subCat = 1;         subCatArr.push(subCat);

title = 'Item3';    titleArr.push(title);
image = '';         imageArr.push(image);
desc  = 'Desc3';    descArr.push(desc);
price = '3.03';     priceArr.push(price);
user  = 'User3';    userArr.push(user);
mainCat = 0;        mainCatArr.push(mainCat);
subCat = 1;         subCatArr.push(subCat);

title = 'Item4';    titleArr.push(title);
image = '';         imageArr.push(image);
desc  = 'Desc4';    descArr.push(desc);
price = '4.04';     priceArr.push(price);
user  = 'User4';    userArr.push(user);
mainCat = 0;        mainCatArr.push(mainCat);
subCat = 1;         subCatArr.push(subCat);


DB.push(titleArr);
DB.push(imageArr);
DB.push(descArr);
DB.push(priceArr);
DB.push(userArr);
DB.push(mainCatArr);
DB.push(subCatArr);


function createTable()
{
    var id = (parent.document.URL.substring(parent.document.URL.indexOf('?')+4, parent.document.URL.length));
    var main = id.substring(0,1);
    var sub  = id.substring(1,3);

        titleArr = DB[0]; imageArr = DB[1], descArr = DB[2], priceArr = DB[3], userArr = DB[4], mainCatArr = DB[5], subCatArr = DB[6];
    var indexes = [], i, row;

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
        descCell = document.createElement('td');
        priceCell = document.createElement('td');
        userCell = document.createElement('td');
        mainCatCell = document.createElement('td');
        subCatCell = document.createElement('td');

        titleCell.textContent = titleArr[i];
        imageCell.textContent = imageArr[i];
        descCell.textContent = descArr[i];
        priceCell.textContent = '$'+priceArr[i];
        userCell.textContent = userArr[i];
        mainCatCell.textContent = mainCatArr[i];
        subCatCell.textContent = subCatArr[i];

        row.appendChild(titleCell);
        row.appendChild(imageCell);
        row.appendChild(descCell);
        row.appendChild(priceCell);
        row.appendChild(userCell);
        row.appendChild(mainCatCell);
        row.appendChild(subCatCell);
        tblBody.appendChild(row);
    }



    tbl.appendChild(tblBody);
    contentDiv.appendChild(tbl);
}







