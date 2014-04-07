/**
 * Created by JG on 23/03/14.
 */

var  specCat = [], specId = [], buyCat = [], servCat = [], carsCat = [], petsCat = [], commCat = [], rlEsCat = [], jobsCat = [], allArrays = [];
var categoryId;

function generateCategories()
{
    specCat.push('buy and sell');   specId.push(0);
    buyCat.push('art, collectibles');
    buyCat.push('baby items');
    buyCat.push('bikes');
    buyCat.push('books');
    buyCat.push('business, industrial');
    buyCat.push('cameras, camcorders');
    buyCat.push('cds, dvds, blu-ray');
    buyCat.push('clothing');
    buyCat.push('computers');
    buyCat.push('computer accessories');
    buyCat.push('electronics');
    buyCat.push('furniture');
    buyCat.push('garage sales');
    buyCat.push('health, special needs');
    buyCat.push('hobbies, crafts');
    buyCat.push('home appliances');
    buyCat.push('home - indoor');
    buyCat.push('home - outdoor');
    buyCat.push('home renovation materials');
    buyCat.push('iPods, mp3, headphones');
    buyCat.push('jewellery, watches');
    buyCat.push('musical instruments');
    buyCat.push('phones');
    buyCat.push('sporting goods, exercise');
    buyCat.push('tickets');
    buyCat.push('tools');
    buyCat.push('toys, games');
    buyCat.push('video games, consoles');
    buyCat.push('other');

    specCat.push('services');   specId.push(100);
    servCat.push('childcare, nanny');
    servCat.push('cleaners, cleaning');
    servCat.push('entertainment');
    servCat.push('financial, legal');
    servCat.push('fitness, personal trainer');
    servCat.push('health, beauty');
    servCat.push('moving, storage');
    servCat.push('music lessons');
    servCat.push('photography, video');
    servCat.push('skilled trades');
    servCat.push('tutors, languages');
    servCat.push('wedding');
    servCat.push('travel, vacations');
    servCat.push('other');

    specCat.push('cars & vehicles');   specId.push(200);
    carsCat.push('cars');
    carsCat.push('trucks');
    carsCat.push('SUVs');
    carsCat.push('SUVs / trucks');
    carsCat.push('classic cars');
    carsCat.push('auto parts, tires');
    carsCat.push('automotive services');
    carsCat.push('motorcycles');
    carsCat.push('ATVs, snowmobiles');
    carsCat.push('boats, watercraft');
    carsCat.push('RVs, campers, trailers');
    carsCat.push('heavy equipment');
    carsCat.push('other');

    specCat.push('pets');   specId.push(300);
    petsCat.push('accessories');
    petsCat.push('animal, pet services');
    petsCat.push('birds for sale');
    petsCat.push('cats, kittens for sale');
    petsCat.push('dogs, puppies for sale');
    petsCat.push('livestock for sale');
    petsCat.push('lost & found');
    petsCat.push('other pets for sale');
    petsCat.push('to give or donate');
    petsCat.push('other');

    specCat.push('community');   specId.push(400);
    commCat.push('activities, groups');
    commCat.push('artists, musicians');
    commCat.push('classes, lessons');
    commCat.push('discussions');
    commCat.push('events');
    commCat.push('friendship, networking');
    commCat.push('long lost relationships');
    commCat.push('lost & found');
    commCat.push('missed connections');
    commCat.push('ride-share');
    commCat.push('volunteers');
    commCat.push('other');

    specCat.push('real estate');   specId.push(500);
    rlEsCat.push('for rent:');
    rlEsCat.push('apartments, condos');
    rlEsCat.push('house rental');
    rlEsCat.push('room rental, roommates');
    rlEsCat.push('short term rentals');
    rlEsCat.push('commercial, office space');
    rlEsCat.push('vacation rentals');
    rlEsCat.push('storage, parking');
    rlEsCat.push('for sale:');
    rlEsCat.push('houses for sale');
    rlEsCat.push('condos for sale');
    rlEsCat.push('land for sale');
    rlEsCat.push('other:');
    rlEsCat.push('real estate services');
    rlEsCat.push('other');

    specCat.push('jobs');   specId.push(600);
    jobsCat.push('accounting, mgmt');
    jobsCat.push('child care');
    jobsCat.push('bar, food, hospitality');
    jobsCat.push('cleaning, housekeeper');
    jobsCat.push('construction, trades');
    jobsCat.push('customer service');
    jobsCat.push('driver, security');
    jobsCat.push('general labour');
    jobsCat.push('graphic, web design');
    jobsCat.push('hair stylist, salon');
    jobsCat.push('office mgr, receptionist');
    jobsCat.push('part time, students');
    jobsCat.push('programmers, computer');
    jobsCat.push('sales, retail sales');
    jobsCat.push('tv, media, fashion');
    jobsCat.push('other');

    allArrays.push(buyCat);
    allArrays.push(servCat);
    allArrays.push(carsCat);
    allArrays.push(petsCat);
    allArrays.push(commCat);
    allArrays.push(rlEsCat);
    allArrays.push(jobsCat);
}

function displayCategories()
{
    var i, div, section1, section2, section3, ul, li, innerDiv, heading, a;

    section1 = document.createElement('section');
    section2 = document.createElement('section');
    section3 = document.createElement('section');

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.style.display = "inline";
    li.style.font="14px/17px Arial,Verdana,sans-serif";
    li.style.margin=0;
    li.style.overflow="hidden";

    innerDiv = document.createElement('div');
    innerDiv.id = 'div'+specId[0];
    innerDiv.style.display = "inline";

    heading = document.createElement('h2');
    heading.style.display = "inline";

    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.float="left";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.id = '0'+parseInt((specId[0]));
    a.addEventListener('click',eventListener, false);
    a.textContent=specCat[0];

    heading.appendChild(a);
    li.appendChild(innerDiv);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < buyCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = '0'+parseInt((specId[0]+i+1));
        a.textContent=buyCat[i];
        a.addEventListener('click', eventListener, false);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section1.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.style.font="14px/17px Arial,Verdana,sans-serif";
    li.style.margin=0;
    li.style.overflow="hidden";
    li.style.display = "inline";

    innerDiv = document.createElement('div');
    innerDiv.id = 'div'+specId[1];
    innerDiv.style.display = "inline";

    heading = document.createElement('h2');

    heading.style.display = "inline";


    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.float="left";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.id = parseInt((specId[1]));
    a.addEventListener('click', eventListener, false);
    a.textContent=specCat[1];

    heading.appendChild(a);
    li.appendChild(innerDiv);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < servCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[1]+i+1));
        a.textContent=servCat[i];
        a.addEventListener('click', eventListener, false);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section1.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.style.font="14px/17px Arial,Verdana,sans-serif";
    li.style.margin=0;
    li.style.overflow="hidden";
    li.style.display = "inline";

    innerDiv = document.createElement('div');
    innerDiv.id = 'div'+specId[2];
    innerDiv.style.display = "inline";

    heading = document.createElement('h2');

    heading.style.display = "inline";


    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.float="left";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.id = parseInt((specId[2]));
    a.addEventListener('click', eventListener, false);
    a.textContent=specCat[2];

    heading.appendChild(a);
    li.appendChild(innerDiv);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < carsCat.length; i++)
    {
        li = document.createElement('li');

        a = document.createElement('a');
        a.id = parseInt((specId[2]+i+1));
        a.textContent=carsCat[i];
        a.addEventListener('click', eventListener, false);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section2.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.style.font="14px/17px Arial,Verdana,sans-serif";
    li.style.margin=0;
    li.style.overflow="hidden";
    li.style.display = "inline";

    innerDiv = document.createElement('div');
    innerDiv.style.display = "inline";
    innerDiv.id = 'div'+specId[3];

    heading = document.createElement('h2');

    heading.style.display = "inline";


    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.float="left";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.id = parseInt((specId[3]));
    a.addEventListener('click', eventListener, false);
    a.textContent=specCat[3];

    heading.appendChild(a);
    li.appendChild(innerDiv);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < petsCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[3]+i+1));
        a.textContent=petsCat[i];
        a.addEventListener('click', eventListener, false);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section2.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.style.font="14px/17px Arial,Verdana,sans-serif";
    li.style.margin=0;
    li.style.overflow="hidden";
    li.style.display = "inline";

    innerDiv = document.createElement('div');
    innerDiv.id = 'div'+specId[4];
    innerDiv.style.display = "inline";

    heading = document.createElement('h2');

    heading.style.display = "inline";


    a = document.createElement('a');
    a.style.color="#006";a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.float="left";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.id = parseInt((specId[4]));
    a.addEventListener('click', eventListener, false);
    a.textContent=specCat[4];

    heading.appendChild(a);
    li.appendChild(innerDiv);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < commCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[4]+i+1));
        a.textContent=commCat[i];
        a.addEventListener('click', eventListener, false);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section2.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.style.font="14px/17px Arial,Verdana,sans-serif";
    li.style.margin=0;
    li.style.overflow="hidden";
    li.style.display = "inline";

    innerDiv = document.createElement('div');
    innerDiv.id = 'div'+specId[5];
    innerDiv.style.display = "inline";

    heading = document.createElement('h2');

    heading.style.display = "inline";


    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.float="left";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.addEventListener('click', eventListener, false);
    a.textContent=specCat[5];
    a.id = parseInt((specId[5]));

    heading.appendChild(a);
    li.appendChild(innerDiv);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < rlEsCat.length; i++)
    {
        li = document.createElement('li');
        if (i == 0 || i == 8 || i == 12)
        {
            li.textContent=rlEsCat[i];
            li.id = parseInt((specId[5]+i+1));
            li.style.paddingLeft="5px";
        }
        else
        {
            a = document.createElement('a');
            a.id = parseInt((specId[5]+i+1));
            a.textContent=rlEsCat[i];
            a.addEventListener('click', eventListener, false);

            li.appendChild(a);
        }
        ul.appendChild(li);
    }
    section3.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.style.display = "inline";
    li.style.font="14px/17px Arial,Verdana,sans-serif";
    li.style.margin=0;
    li.style.overflow="hidden";
    li.listStyleType="none";

    innerDiv = document.createElement('div');
    innerDiv.id = 'div'+specId[6];
    innerDiv.style.display = "inline";

    heading = document.createElement('h2');
    heading.style.display = "inline";


    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.float="left";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.addEventListener('click', eventListener, false);
    a.textContent=specCat[6];
    a.id = parseInt((specId[6]));

    heading.appendChild(a);
    li.appendChild(innerDiv);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < jobsCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[6]+i+1));
        a.textContent=jobsCat[i];
        a.addEventListener('click', eventListener, false);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section3.appendChild(ul);

    div = document.getElementById('Categories');
    if(!div)
        div = document.getElementById('PostCategories');
    div.style.paddingLeft = "10%";
    div.appendChild(section1);
    div.appendChild(section2);
    div.appendChild(section3);
}

function displayImages()
{
    var img = null, div = null, heading = null;

    for (var i = 0; i <= 6; i++)
    {
        img = document.createElement('img');
        div = document.getElementById('div'+specId[i]);
        heading = document.getElementById('heading'+specId[i]);
        img.src = 'Images/'+i+'.png';
        div.style.margin=0;
        div.style.overflow="hidden";
        div.appendChild(img);
    }
}

function eventListener(event)
{
    window.location.assign("items.html?id="+event.target.id);
}

function postMainCategories()
{
    var i, div, br, a;

    div = document.getElementById('MainCategories');

    for (i = 0; i < specCat.length; i++)
    {
        br = document.createElement('br');

        a = document.createElement('a');
        a.style.color="#006";
        a.style.cursor="pointer";
        a.style.textDecoration="underline";
        a.style.display="block";
        a.style.paddingLeft="10%";
        a.style.fontWeight="bold";
        a.style.marginTop="4px";
        a.style.display = "inline";
        a.addEventListener('click', postSubCategories, false);
        a.textContent=specCat[i];
        a.id = parseInt((specId[i]));

        div.appendChild(a);
        div.appendChild(br);
    }
}

function postSubCategories(event)
{
    document.getElementById('ItemCategories').style.visibility='hidden';

    var div, br, a, array, index;
    index = event.target.id.substr(0,1);
    array = allArrays[index];

    div = document.getElementById('SubCategories');
    div.style.visibility = "visible";

    while(div.childElementCount > 1)
        div.removeChild(div.lastChild);

    if(index == 5)
        otherFunction(array, div);
    else
        for (var i = 0; i < array.length; i++)
        {
            br = document.createElement('br');

            a = document.createElement('a');
            a.style.color="#006";
            a.style.cursor="pointer";
            a.style.textDecoration="underline";
            a.style.display="block";
            a.style.paddingLeft="10%";
            a.style.fontWeight="bold";
            a.style.display = "inline";
            a.addEventListener('click', nextHeader, false);
            a.textContent=array[i];
            if(index == 0)
                a.id = '0'+parseInt(specId[index] +i +1);
            else
                a.id = parseInt(specId[index] +i +1);

            div.appendChild(a);
            div.appendChild(br);
        }
}

function otherFunction(array, div)
{
    var br, a;

    br = document.createElement('br');

    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.paddingLeft="10%";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.addEventListener('click', postOtherSubCategories, false);
    a.textContent=array[0];
    a.id=0;

    div.appendChild(a);
    div.appendChild(br);

    br = document.createElement('br');

    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.paddingLeft="10%";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.addEventListener('click', postOtherSubCategories, false);
    a.textContent=array[8];
    a.id=8;

    div.appendChild(a);
    div.appendChild(br);

    br = document.createElement('br');

    a = document.createElement('a');
    a.style.color="#006";
    a.style.cursor="pointer";
    a.style.textDecoration="underline";
    a.style.display="block";
    a.style.paddingLeft="10%";
    a.style.fontWeight="bold";
    a.style.marginTop="4px";
    a.style.display = "inline";
    a.addEventListener('click', postOtherSubCategories, false);
    a.textContent=array[12];
    a.id=12;

    div.appendChild(a);
    div.appendChild(br);
}

function postOtherSubCategories(event)
{
    var array = allArrays[5], br, a, div;
    div = document.getElementById('SubCategories');
    var index = event.target.id, final = array.length;

    if(index == 0)
        final = 8;
    else if (index == 8)
        final = 12;

    while(div.childElementCount > 1)
        div.removeChild(div.lastChild);

    for (var i = index; i < final; i++)
    {
        br = document.createElement('br');
        if (i != index)
        {
            a = document.createElement('a');
            a.style.color="#006";
            a.style.cursor="pointer";
            a.style.textDecoration="underline";
            a.style.display="block";
            a.style.paddingLeft="10%";
            a.style.fontWeight="bold";
            a.style.marginTop="4px";
            a.style.display = "inline";
            a.addEventListener('click', nextHeader, false);
            a.textContent=array[i];
            a.id = parseInt(specId[5] +(i + 1));
            div.appendChild(a);
            div.appendChild(br);
        }
        else
        {
            a = document.createElement('p');
            a.textContent=array[i];
            a.style.paddingLeft="5%";
            div.appendChild(a);
        }
    }
}

function nextHeader(event)
{
    document.getElementById('ItemCategories').style.visibility='visible';
    categoryId = event.target.id;
}

function getItemDetails()
{
    var price = document.getElementById('price').value;
    var title = document.getElementById('title').value;
    var desc = document.getElementById('desc').value;
    var images = document.getElementById('images').files;
    var mainCat = categoryId.substr(0,1);
    var subCat = categoryId.substr(1);

    if(images.length == 0)
        images.push('Images/NoImage.jpg');

    insertItem(price, title, desc, images, mainCat, subCat);
    window.open("items.html?id="+categoryId+"", "_self");
}

function createTable()
{
    var id = (parent.document.URL.substring(parent.document.URL.indexOf('?')+4, parent.document.URL.length));

    var main = parseInt(id.substring(0,1));
    var sub  = parseInt(id.substring(1,3));

    var items = DB[0];
    var titleArr = items[0], imageArr = items[1], descArr = items[2], priceArr = items[3], userArr = items[4], mainCatArr = items[5], subCatArr = items[6];
    var indexes = [], i, row;

    if(sub == 0)
    {
        alert('0');
        for(i = 0; i < mainCatArr.length; i++)
            if(main == mainCatArr[i])
                indexes.push(i);
    }
    else
    {
        alert('other');
        for(i = 0; i < mainCatArr.length; i++)
            if((mainCatArr[i] == main) && (subCatArr[i] == sub))
                indexes.push(i);
    }


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


function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0)
            return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie()
{
    var username=getCookie("username");
    if (username == "")
    {
        window.open('signIn.html', '_self');
    }
}

function checkItemsCookie()
{
    var username=getCookie("username");
    if (username == "")
    {
         alert('Items window');
    }
}


(function(d, s, id)
{                   // like on facebook
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;

    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";

    fjs.parentNode.insertBefore(js, fjs);
}(document, "script", 'facebook-jssdk'));


/**
 * SIGN IN PAGE
 */

// Popup window code
function newPopup()
{
    window.open(
        "forgotPass.html",
        'popUpWindow',
        'height=150,width=550,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes'
    );
}
function signIn()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var pass = checkUserName(username);
    if(pass)
        if(checkPassword(password, pass))
        {
            window.open('index.html','_self');
            if(document.getElementById('remainSignedIn').checked)
                setCookie('username', username, 365);               // set cookie for 365 days  (1 year)
            else
                setCookie('username', username, 1);                 //set cookie for 1 day

            return true;
        }
        else
            alert("Password is incorrect");
    else
        alert("Username doesn't exist");
    return false;
}
function checkUserName(username)                                        // todo database
{
    var table = DB[1];
    var array = table[0];
    var pass = table[1];
    for(var i = 0; i < array.length; i++)
        if (username == array[i])
            return pass[i];

    return false;
}

function checkPassword(password, pass)                                  // todo database
{
    return password == pass;
}

/**
 *      FORGOT PASSWORD PAGE
 */

function onSubmit(form)
{
    var pass = checkEmail(form.email.value);
    if(!pass)
    {
        alert("Error: Email doesn't exist in our database");
        form.email.focus();
        return false;
    }

    sendTheMail(form.email.value, pass);
    close();
    return false;
}
function checkEmail(user)                                              // todo get users password from database
{
    var table = DB[1];
    var email = table[0];
    var pass = table[1];
    for (var i = 0; i < email.length; i++)
        if(email[i] == user)
            return pass[i];
    return false;
}


function sendTheMail(email, pass) {

    if(!pass || pass == '')
        pass = 'Temp Pass';

    var m = new mandrill.Mandrill('dN409U_HBEg6330LDyiJfw');
    var params =
    {
        "message":
        {
            "from_email":"jhg257@mail.usask.ca",
            "to":[{"email": email}],
            "subject": "Your current Password for JD CMPT350 Project",
            "html": "<p>Your current password for JD CMPT350 Project is: "+pass+"</p>",
            "autotext": true
        }
    };
    m.messages.send
        (params, null, null);
}


/**
 * CHANGE INFO PAGE
 */

function submit(form)                                                   // todo Jordaen
{
    alert('test');
    return false;
}


/**
 * MY PROFILE PAGE
 */

function getUserInfo()                                                 // todo get user data from database
{
    var email = getCookie('username');
    var password = 'password';
    var fName = 'firstName';
    var lName = 'lastName';
    var phone = 'phone';
    var address = 'address';
    var city = 'city';
    var prov = 'province';
    var postal = 'postalCode';

    displayUserInfo(email, password, fName, lName, phone, address, city, prov, postal);
}

function displayUserInfo(email, password, fName, lName, phone, address, city, prov, postal)
{
    var div, ul, li, p, span, button;

    div = document.getElementById('info');
    ul = document.createElement('ul');
    ul.style.listStyleType="none";

    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='Username: ';
    p.textContent = username;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='username';
    button.addEventListener('click', changeListener, false);

    li.appendChild(p);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='Password: ';
    p.textContent = password;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='password';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='FirstName: ';
    p.textContent = fName;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='fName';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='LastName: ';
    p.textContent = lName;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='lName';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='Email: ';
    p.textContent = email;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='email';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='Phone Number: ';
    p.textContent = phone;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='phone';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='Address: ';
    p.textContent = address;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='address';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='City: ';
    p.textContent = city;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='city';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='Province: ';
    p.textContent = prov;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='prov';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);


    li = document.createElement('li');
    p = document.createElement('p');
    span = document.createElement('span');
    button = document.createElement('button');

    li.textContent='Postal Code: ';
    p.textContent = postal;
    p.style.paddingLeft='10%';
    span.style.paddingLeft = '10%';
    button.textContent = 'Change';
    button.id='postal';
    button.addEventListener('click', changeListener, false);

    span.appendChild(button);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);

    div.appendChild(ul);
}

function changeListener(event)
{
//        prompt(event.target.id);
    window.open(
        "changeInfo.html",
        'popUpWindow',
        'height=150,width=550,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes'
    );
}


/**
 *  REGISTER PAGE
 */

function getLabels()
{
    var labels = document.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor != '') {
            var elem = document.getElementById(labels[i].htmlFor);
            if (elem)
                elem.label = labels[i];
        }
    }
}

function checkForm(form)
{
    var re = /\W/;
    var email = form.email.value.replaceAll('@', '');
    email = email.replace('.', '');
    if(re.test(email))
    {
        alert("Error: We can't allow special characters in the emails!");
        form.email.focus();
        return false;
    }

    if(form.fName.value.length > 30)
    {
        alert("Error: FirstName must be less than 30 characters!");
        form.fName.focus();
        return false;
    }
    if(form.lName.value.length > 30)
    {
        alert("Error: LastName must be less than 30 characters!");
        form.lName.focus();
        return false;
    }

    var table = DB[1];
    var users = table[1];
    for(var i = 0; i < users.length; i++)
        if (form.username.value == users[i])
        {
            alert("Error: Username has already been taken!");
            form.username.focus();
            return false;
        }

    if(form.Opass.value != "" && form.Opass.value == form.Cpass.value)
    {
        if(form.Opass.value.length < 6 && form.Opass.value.length >= 20)
        {
            alert("Error: Password must contain at least 6 characters but be less than 20!");
            form.Opass.focus();
            return false;
        }
        if(form.Opass.value == form.username.value)
        {
            alert("Error: Password must be different from Username!");
            form.Opass.focus();
            return false;
        }
        re = /[0-9]/;
        if(!re.test(form.Opass.value))
        {
            alert("Error: password must contain at least one number (0-9)!");
            form.Opass.focus();
            return false;
        }
        re = /[a-z]/;
        if(!re.test(form.Opass.value))
        {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
            form.Opass.focus();
            return false;
        }
        re = /[A-Z]/;
        if(!re.test(form.Opass.value))
        {
            alert("Error: password must contain at least one uppercase letter (A-Z)!");
            form.Opass.focus();
            return false;
        }
    }
    else
    {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.Opass.focus();
        return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    re = /\b[0-9]{3}-[0-9]{3}-[0-9]{4}\b/;

    // validation fails if the input doesn't match our regular expression
    if(!re.test(form.phone.value))
    {
        alert("Error: Phone number is badly formatted");
        form.phone.focus();
        return false;
    }
    // regular expression to match only alphanumeric characters and spaces
    re = /\b\w\d\w\d\w\d\b/;

    // validation fails if the input doesn't match our regular expression
    if(!re.test(form.postal.value))
    {
        alert("Error: Postal code is badly formatted");
        form.postal.focus();
        return false;
    }
    insertUser(form);
    return true;
}

function insertUser(form)                                               // todo insert into database
{
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('Opass').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var prov = document.getElementById('prov').value;
    var postal = document.getElementById('postal').value;

    var table = DB[1];
    table[0].push(form.username.value);
    table[1].push(form.Opass.value);
    table[2].push(form.email.value);
    table[3].push(form.fName.value);
    table[4].push(form.lName.value);
    table[5].push(form.address.value);
    table[6].push(form.postal.value);
    table[7].push(form.prov.value);
    table[8].push(form.phone.value);
    table[9].push(form.age.value);

    window.open('myProfile.html','_self');
}







