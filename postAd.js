/**
 * Created by JG on 30/03/14.
 */



function postAdDisplay()
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
//        a.addEventListener('click',eventListener, false); 
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
            //a.addEventListener('click', eventListener, false);

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
//a.addEventListener('click', eventListener, false);
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
            //a.addEventListener('click', eventListener, false);

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
//a.addEventListener('click', eventListener, false);
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
            //a.addEventListener('click', eventListener, false);

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
        //a.addEventListener('click', eventListener, false);
        a.textContent=specCat[3];

        heading.appendChild(a);
        li.appendChild(innerDiv);
        li.appendChild(heading);
        ul.appendChild(li);

        //Normal Heading
        for(i = 0; i < commCat.length; i++)
        {
            li = document.createElement('li');
            a = document.createElement('a');
            a.id = parseInt((specId[3]+i+1));
            a.textContent=commCat[i];
            //a.addEventListener('click', eventListener, false);

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
        //a.addEventListener('click', eventListener, false);
        a.textContent=specCat[4];

        heading.appendChild(a);
        li.appendChild(innerDiv);
        li.appendChild(heading);
        ul.appendChild(li);

        //Normal Heading
        for(i = 0; i < petsCat.length; i++)
        {
            li = document.createElement('li');
            a = document.createElement('a');
            a.id = parseInt((specId[4]+i+1));
            a.textContent=petsCat[i];
            //a.addEventListener('click', eventListener, false);

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
        //a.addEventListener('click', eventListener, false);
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
                //a.addEventListener('click', eventListener, false);

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
        //a.addEventListener('click', eventListener, false);
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
            //a.addEventListener('click', eventListener, false);

            li.appendChild(a);
            ul.appendChild(li);
        }
        section3.appendChild(ul);

        div = document.getElementById('PostAddCategories');
        div.align="middle";
    //    div.style.paddingLeft = "100px";
        div.appendChild(section1);
        div.appendChild(section2);
        div.appendChild(section3);

}