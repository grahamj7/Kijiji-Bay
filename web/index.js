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
    var quantity = document.getElementById('quantity').value;

    categoryId = null;


//    if(images.length == 0)
//        images.push('Images/NoImage.jpg');

    insertItem(price, title, desc, quantity, mainCat, subCat);
}

function createTable()        
{
    var id = (parent.document.URL.substring(parent.document.URL.indexOf('?')+4, parent.document.URL.length));

    var main = parseInt(id.substring(0,1));
    var sub  = parseInt(id.substring(1,3));
    var url = 'http://localhost:8084/Keybay/servlet?status=0';
    url=url+"&mainCat="+main+"&subCat="+sub;
    loadXMLDoc(url);


}

function insertItem(price, title, desc, quantity, mainCat, subCat)      
{
    // alert("insertItem");
    var div = document.getElementById('details');
    var email = getCookie("email");
    var url = 'http://localhost:8084/Keybay/servlet?status=1';
    url=url+"&title="+title+"&price="+price+"&desc="+desc+"&mainCat="+mainCat
            +"&subCat="+subCat+"&quantity="+quantity;
    loadXMLDoc(url);
    window.open("items.html?id="+categoryId+"", "_self");

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
    var email=getCookie("email");
    if (email == "")
    {
        window.open('signIn.html', '_self');
    }
}

function removeCookie()
{
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++)
    {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function checkItemsCookie()
{
    var email=getCookie("email");
    if (email == "")
    {
        var buttons = document.getElementsByName('button');
        for (var i = 0; i < buttons.length; i++)
            buttons[i].disabled = true;
    }
    else
    {
        var buttons = document.getElementsByName('button');
        for (var i = 0; i < buttons.length; i++)
            buttons[i].disabled = false;
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
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var url = 'http://localhost:8084/Keybay/servlet?status=6';
    url=url+"&email="+email+"&password="+password;
    
    var value = checkUserInDB(url);
    if(value.toString().trim() !== 't'){
        alert("Error: Invalid Email/Password");
        return false;
    }
    
    if(document.getElementById('remainSignedIn').checked)
        setCookie('email', email, 365);               // set cookie for 365 days  (1 year)
    else
        setCookie('email', email, 1);                 //set cookie for 1 day
    
    return true;
}

function checkPassword(password, pass)                           
{
    return password === pass;
}

/**
 *      FORGOT PASSWORD PAGE
 */

function onSubmit(form)
{
    var pass = checkEmail(form.email.value);

    if(!pass || pass.trim() == '')
    {
        alert("Error: Email doesn't exist in our database");
        form.email.focus();
        return false;
    }
    var success = sendTheMail(form.email.value, pass);
    if(!success)
        close();
    
    return false;
}
function checkEmail(email)                                              
{
    var url = 'http://localhost:8084/Keybay/servlet?status=7';
    url=url+"&email="+email;
    var responsePassword = checkUserInDB(url);

    return responsePassword;
}
function sendTheMail(email, pass)
{
    var m = new mandrill.Mandrill('dN409U_HBEg6330LDyiJfw');
    var params =
    {
        "message":
        {
            "from_email":"jhg257@mail.usask.ca",
            "to":[{"email": email}],
            "subject": "Your Current Password for JD CMPT350 Project",
            "html": "<p>Your current password for JD CMPT350 Project is: "+pass+"</p>",
            "autotext": true
        }
    };
    m.messages.send
        (params, function(){alert('Pass'); return true;}, function(err){alert('Email failed: '+err);return false;});
}


/**
 * MY PROFILE PAGE
 */

function getUserInfo()                                                 // todo get user data from database
{
    var email = getCookie('email');
  /*  var password = 'password';
    var fName = 'firstName';
    var lName = 'lastName';
    var phone = 'phone';
    var address = 'address';
    var city = 'city';
    var prov = 'province';
    var postal = 'postalCode'; */
    //alert(email);
    var url = 'http://localhost:8084/Keybay/servlet?status=8';
    url=url+"&email="+email;
    outputUserInfo(url);
    //displayUserInfo(email, password, fName, lName, phone, address, city, prov, postal);
}

function changeField()
{
    var field = document.getElementById('PasswordInfo');
    var text = field.value;

    if(field.type == 'password')
    {
        field.innerHTML = '<input type="text" id="PasswordInfo" value="'+text+'">';
        document.getElementById('showButton').value = 'Hide';
    }
    else
    {
        field.innerHTML = '<input type="password" id="PasswordInfo" value="'+text+'"';
        document.getElementById('showButton').value = 'Show';
    }
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
    var re = /\./;
    var email = form.email.value.toString().replace('@', '');
    while(re.test(email)){
        email = email.toString().replace('.','');
    }
    re = /_/;
    while(re.test(email)){
        email = email.toString().replace('_','');
    }
    
    re = /\W/;
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
    var url = 'http://localhost:8084/Keybay/servlet?status=4';
    url=url+"&email="+form.email.value.toString();
    var responseValue = checkUserInDB(url);
    if(responseValue.toString().trim() ==='t'){
        alert("Error: Email is already in use!");
        form.email.focus();
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
    setCookie('email', form.email.value.toString(), 1);
    insertUser(form);
    return true;
}

function insertUser(form)                                           
{
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    var password = document.getElementById('Opass').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var prov = document.getElementById('prov').value;
    var postal = document.getElementById('postal').value; 
    var url = 'http://localhost:8084/Keybay/servlet?status=3';
    url=url+"&fName="+fName+"&lName="+lName+"&password="+password+"&email="+email+"&phone="+phone
    +"&address="+address+"&city="+city+"&prov="+prov+"&postal="+postal;
    loadXMLDoc(url);

    window.open('myProfile.html','_self');
}
function buyItem(itemId, index){
    var quantitySelected = document.getElementById('quantityinput'+index).value;
    var url = 'http://localhost:8084/Keybay/servlet?status=5';
    url=url+"&ItemId="+itemId+"&quantity="+quantitySelected;
    loadXMLDoc(url);
    location.reload(true);
    
}
function updateUserInfo(){
    var email = getCookie('email');
    var firstname = document.getElementById('FirstnameInfo').value;
    var lastname = document.getElementById('LastnameInfo').value;
    var password = document.getElementById('PasswordInfo').value;
    var phone = document.getElementById('Phonenumber').value;
    var address = document.getElementById('Address').value;
    var city = document.getElementById('City').value;
    var prov = document.getElementById('Province').value;
    var postal = document.getElementById('PostalCode').value;
    var url = 'http://localhost:8084/Keybay/servlet?status=9';
    url=url+"&email="+email+"&firstname="+firstname+"&lastname="+lastname+"&password="+password+"&phone="+phone
            +"&address="+address+"&city="+city+"&prov="+prov+"&postal="+postal;
    loadXMLDoc(url);
    return true;
}        
var xmlhttp;
function loadXMLDoc(url)
{
    xmlhttp = null;
    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null)
    {
        xmlhttp.onreadystatechange = state_Change;
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        state_Change();
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}
function state_Change()
{
    if (xmlhttp.readyState == 4)
    {// 4 = "loaded"
        if (xmlhttp.status == 200)
        {// 200 = "OK"
            //  alert(xmlhttp.responseText);
            // document.getElementById('Status').innerHTML = xmlhttp.status;
            //                    document.getElementById('StatusText').innerHTML = xmlhttp.statusText
            
            document.getElementById("contentDiv").innerHTML = xmlhttp.responseText;
        }
        else
        {
            alert("Problem retrieving XML data:" + xmlhttp.statusText);
        }
    }
}

var xmlhttp1;
function checkUserInDB(url)
{
    xmlhttp1 = null;
    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp1 = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp1 != null)
    {
        xmlhttp1.onreadystatechange = state_Change;
        xmlhttp1.open("GET", url, false);
        xmlhttp1.send();
        var userCheck=returnMessage();
        return userCheck;
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

function returnMessage()
{
    if (xmlhttp1.readyState == 4)
    {// 4 = "loaded"
        if (xmlhttp1.status == 200)
        {// 200 = "OK"
            //  alert(xmlhttp.responseText);
            // document.getElementById('Status').innerHTML = xmlhttp.status;
            //                    document.getElementById('StatusText').innerHTML = xmlhttp.statusText
            
            return xmlhttp1.responseText;
        }
        else
        {
            alert("Problem retrieving XML data:" + xmlhttp1.statusText);
        }
    }
}

var xmlhttp2;
function outputUserInfo(url)
{
    xmlhttp2 = null;
    if (window.XMLHttpRequest)
    {// code for IE7, Firefox, Opera, etc.
        xmlhttp2 = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
        xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp2 != null)
    {
        xmlhttp2.onreadystatechange = state_Change;
        xmlhttp2.open("GET", url, false);
        xmlhttp2.send();
        getUserInfoMessage();
        
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
}

function getUserInfoMessage()
{
    if (xmlhttp2.readyState == 4)
    {// 4 = "loaded"
        if (xmlhttp2.status == 200)
        {// 200 = "OK"
            //  alert(xmlhttp.responseText);
            // document.getElementById('Status').innerHTML = xmlhttp.status;
            //                    document.getElementById('StatusText').innerHTML = xmlhttp.statusText
            
           document.getElementById("userinfo").innerHTML = xmlhttp2.responseText;
        }
        else
        {
            alert("Problem retrieving XML data:" + xmlhttp2.statusText);
        }
    }
}
