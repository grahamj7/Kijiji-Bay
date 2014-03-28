/**
 * Created by JG on 23/03/14.
 */


function generateCategories()
{               var  specCat = [], specId = [], buyCat = [], servCat = [], carsCat = [], petsCat = [], commCat = [], rlEsCat = [], jobsCat = [];

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

    var i, div, section1, section2, section3, ul, li, heading, a;

    section1 = document.createElement('section');
    section2 = document.createElement('section');
    section3 = document.createElement('section');

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.className="cat-name";

    heading = document.createElement('h2');
    heading.className="icon-link";

    a = document.createElement('a');
    a.className="category-selected";
    a.id = parseInt((specId[0]));
//    a.onclick = alert(specCat[0] + ' : ' + specId[0]);
    a.textContent=specCat[0];
    heading.appendChild(a);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < buyCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[0]+i));
        a.textContent=buyCat[i];
//        a.onclick = alert(buyCat[i] + ' : ' +specId[0]+i);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section1.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.className="cat-name";

    heading = document.createElement('h2');
    heading.className="icon-link";

    a = document.createElement('a');
    a.className="category-selected";
    a.id = parseInt((specId[1]));
//    a.onclick = alert(specCat[1] + ' : ' + specId[1]);
    a.textContent=specCat[1];
    heading.appendChild(a);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < servCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[1]+i));
        a.textContent=servCat[i];
//        a.onclick = alert(servCat[i] + ' : ' +specId[1]+i);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section1.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.className="cat-name";

    heading = document.createElement('h2');
    heading.className="icon-link";

    a = document.createElement('a');
    a.className="category-selected";
    a.id = parseInt((specId[2]));
//    a.onclick = alert(specCat[2] + ' : ' + specId[2]);
    a.textContent=specCat[2];
    heading.appendChild(a);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < carsCat.length; i++)
    {
        li = document.createElement('li');

        a = document.createElement('a');
        a.id = parseInt((specId[2]+i));
        a.textContent=carsCat[i];
//        a.onclick = alert(carsCat[i] + ' : ' +specId[2]+i);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section2.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.className="cat-name";

    heading = document.createElement('h2');
    heading.className="icon-link";

    a = document.createElement('a');
    a.className="category-selected";
    a.id = parseInt((specId[3]));
//    a.onclick = alert(specCat[3] + ' : ' + specId[3]);
    a.textContent=specCat[3];
    heading.appendChild(a);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < commCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[3]+i));
        a.textContent=commCat[i];
//        a.onclick = alert(commCat[i] + ' : ' +specId[3]+i);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section2.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.className="cat-name";

    heading = document.createElement('h2');
    heading.className="icon-link";

    a = document.createElement('a');
    a.className="category-selected";
    a.id = parseInt((specId[4]));
//    a.onclick = alert(specCat[4] + ' : ' + specId[4]);
    a.textContent=specCat[4];
    heading.appendChild(a);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < petsCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[4]+i));
        a.textContent=petsCat[i];
//        a.onclick = alert(petsCat[i] + ' : ' +specId[4]+i);

        li.appendChild(a);
        ul.appendChild(li);
    }
    section2.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.className="cat-name";

    heading = document.createElement('h2');
    heading.className="icon-link";

    a = document.createElement('a');
//    a.onclick = alert(specCat[5] + ' : ' + specId[5]);
    a.textContent=specCat[5];
    a.id = parseInt((specId[5]));

    heading.appendChild(a);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < rlEsCat.length; i++)
    {
        li = document.createElement('li');
        if (i == 0 || i == 8 || i == 12)
        {
            li.className="cat-sub";
            li.textContent=rlEsCat[i];
            li.id = parseInt((specId[5]+i));
        }
        else
        {
            a = document.createElement('a');
            a.id = parseInt((specId[5]+i));
            a.textContent=rlEsCat[i];

//            a.onclick = alert(rlEsCat[i] + ' : ' +specId[5]+i);

            li.appendChild(a);
        }
        ul.appendChild(li);
    }
    section3.appendChild(ul);

    // Special Heading
    ul = document.createElement('ul');

    li = document.createElement('li');
    li.className="cat-name";

    heading = document.createElement('h2');
    heading.className="icon-link";

    a = document.createElement('a');
//    a.onclick = alert(specCat[6] + ' : ' + specId[6]);
    a.textContent=specCat[6];
    a.id = parseInt((specId[6]));

    heading.appendChild(a);
    li.appendChild(heading);
    ul.appendChild(li);

    //Normal Heading
    for(i = 0; i < jobsCat.length; i++)
    {
        li = document.createElement('li');
        a = document.createElement('a');
        a.id = parseInt((specId[6]+i));
        a.textContent=jobsCat[i];
//        a.onclick = console.log(jobsCat[i] + ' : ' +parseInt(specId[6]+i));

        li.appendChild(a);
        ul.appendChild(li);
   }
    section3.appendChild(ul);

    div = document.getElementById('Categories');
    div.style.paddingLeft = "100px";
    div.appendChild(section1);
    div.appendChild(section2);
    div.appendChild(section3);

}


























