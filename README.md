Tricky - Sticky overflow.

1 Create new project with React (typeScript optional(++))

2 Add section (width 600px, max-width 100vw)
 inside section create component which get paramter dataUrl (json  with data) where component get content & structure for render table. 

3 row & columns work only with string

4 if content more then width section -  inside table appear scroll-x, at the same time header with column name should be with parameters like position:sticky; top: 0;

5 I should be able to output multiple tables for each url transfer to my own json. (in the code, in the interface, you don't need to make a form for this).

6 json file structure should be flexsible for amount of columns and text inside table cell


<h1>text</h1>
<p>Lorem text…</p>
table cell
<p>Lorem text…</p>
table cell


Vertical scrolling of tables should not scroll, only the main body. Scrolling horizontally is displayed in the table as needed, without affecting the rest of the page content.
