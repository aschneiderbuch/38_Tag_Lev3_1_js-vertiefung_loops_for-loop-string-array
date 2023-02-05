"use strict";
console.log("test");

/* 

Frage

Variable mit text

funktion 
    text nach 100 zeichen trennen

    nach 100 zeichen      - 1 of ???Gesamt???,    - 2 of ??Gesamt??, ....

       dann in array push()
             diese 100 zeichen + 1 of ??Gesamt??,
             usw 


    ruf die funktion mit der Variable als Argument auf

        function (text){}

*/

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

let array = [];

let testa = [];
testa.every

function blockSortieren(x) {
    console.log(x);
    let text = x
    console.log(text);

    // Gesamtlänge ?
    let länge = text.length;
    console.log(länge); // 2630 / 100  = 26,3 = 27 durchläufe = rundenIndex

    let rundenZähler = 0 // müssen am Ende gleich sein
    let arrayLänge = 0;  // müssen am Ende gleich sein


    while (text.length > 0) {  // hier dan text.length > 0 rein
        console.log(text);

        rundenZähler = rundenZähler + 1;
        console.log(rundenZähler);

        console.log(text)



        // macht eine kopie der ersten 100 zeichen 
      let  ausschnitt = ` ${text.slice(0, 100)} - ${rundenZähler} of`;
        console.log(ausschnitt);
        console.log(text);
        console.log(text.length);

        // löscht 100 zeichen aus text
        text = text.substring(100, text.length);
        console.log(ausschnitt);
        console.log(text);
        console.log(text.length);

        // fügt die 100 Zeichen zu array hinzu 
        array.push(ausschnitt);
        console.log(array);
        console.table(array);
        console.log(array.length);

        arrayLänge = array.length;
        console.log(rundenZähler);
        console.log(arrayLänge);


    }

    console.log(rundenZähler);
    for (let rundenIndex = 0; rundenIndex < rundenZähler; rundenIndex = rundenIndex + 1) {
      // array[rundenIndex.push(String(27))];
      array[rundenIndex] += String(" " + rundenZähler + "<br></br>");  // damit leer Zeile bei jedem IndexPlatz entsteth
            console.log(rundenIndex);
            console.log(rundenZähler); // 27
            console.log(array.length);
            console.log(array);
            console.table(array);
            console.log(array[rundenIndex]);

        };

        // jetzt in jedes array rein, und die gesammtlänge hinzufügen
        //array.forEach( () => {array.push(String(rundenZähler))}) ;

        document.write(array + "<br>" + "<br> ");
    };

    blockSortieren(text);

