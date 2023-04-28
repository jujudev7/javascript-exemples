# RegEx (Regular Expressions)

Une expression régulière (RegEx) décrit un pattern que nous souhaitons rechercher et localiser dans du texte (y compris des chiffres).  

Sélectionner strictement un mot précis en l'encadrant avec **\b** :
**/\bman\b/g**
This is Roman, a mad **man** who eats mango in the mangroove. What a roman!

https://regexr.com/   
https://regex101.com/ 

# Cheatsheet

## Character classes
.	any character except newline  
\w\d\s	word, digit, whitespace  
\W\D\S	not word, digit, whitespace  
[abc]	any of a, b, or c  
[^abc]	not a, b, or c  
[a-g]	character between a & g

## Anchors
^abc$	start / end of the string  
\b\B	word, not-word boundary

## Escaped characters
\.\*\\	escaped special characters  
\t\n\r	tab, linefeed, carriage return

## Groups & Lookaround
(abc)	capture group  
\1	backreference to group #1  
(?:abc)	non-capturing group  
(?=abc)	positive lookahead  
(?!abc)	negative lookahead

## Quantifiers & Alternation
a*a+a?	    0 or more, 1 or more, 0 or 1  
a{5}a{2,}   exactly five, two or more  
a{1,3}	    between one & three  
a+?a{2,}?   match as few as possible  
ab|cd	    match ab or cd

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