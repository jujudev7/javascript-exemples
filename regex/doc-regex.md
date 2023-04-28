# RegEx (Regular Expressions)

Une expression régulière (RegEx) décrit un pattern que nous souhaitons rechercher et localiser dans du texte (y compris des chiffres).  

Sélectionner strictement un mot précis en l'encadrant avec **\b** :  
**<code>/\bman\b/g</code>**  
This is Roman, a mad **man** who eats mango in the mangroove. What a roman!

https://regexr.com/   
https://regex101.com/ 

# Cheatsheet

## Character classes
<code>.</code> any character except newline  
<code>\w\d\s</code>   word, digit, whitespace   
<code>\W\D\S</code> not word, digit, whitespace  
<code>[abc]</code>    any of a, b, or c  
<code>[^abc]</code>    not a, b, or c  
<code>[a-g]</code>    character between a & g

## Anchors
<code>^abc$</code>   start / end of the string  
<code>\b\B</code>    word, not-word boundary

## Escaped characters
<code>\.\*\\</code>  escaped special characters  
<code>\t\n\r</code>  tab, linefeed, carriage return

## Groups & Lookaround
<code>(abc)</code>   capture group  
<code>\1</code>  backreference to group #1  
<code>(?:abc)</code> non-capturing group  
<code>(?=abc)</code> positive lookahead  
<code>(?!abc)</code> negative lookahead

## Quantifiers & Alternation
<code>a*a+a?</code>  0 or more, 1 or more, 0 or 1  
<code>a{5}a{2,}</code>   exactly five, two or more  
<code>a{1,3}</code>  between one & three  
<code>a+?a{2,}?</code>   match as few as possible  
<code>ab|cd</code>   match ab or cd

# Comment fonctionne regex ?
const exemplederegex =  /^(([^<>()[\]\\.,;:\

lachaineàtester = "blablabla"

exemplederegex.test(lachaineàtester)
Retourne Oui si c'est bon / NON si c'est pas bon

# ex à tester dans doc-regex.js

# regex pour tester les lettres de l'alphabet
/^[A-Z]+$/i  
/^[A-Za-z]+$/  
to match an input string of ASCII alphabets.

[A-Za-z] will match all the alphabets (both lowercase and uppercase).  
^ and $ will make sure that nothing but these alphabets will be matched.