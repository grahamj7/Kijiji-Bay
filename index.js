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
    window.open("details.html", "_self");
}
