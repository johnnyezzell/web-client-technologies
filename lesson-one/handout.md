Web Client Technologies
=======================

Lesson One - HTML and CSS (Structure and Beauty)
----------------

###Topics

####HTML - The Dos and Do Nots

Below are a list of things you should consider when defining your HTML pages.  

- HTML should define your documents structure
- HTML should provide your documents data
- Do use the *table* element for tabular data
- HTML should **NOT** define your documents visual appearance (Except for data related images)
    - **NO INLINE STYLES**
    - **NO BR TAGS**
    - **NO STYLE TAGS (FONT, CENTER, STYLE, etc.)**
- HTML should **NOT** define your documents visual layout
    - **NO WIDTH ATTRIBUTES**
    - **NO HEIGHT ATTRIBUTES**
- Do **NOT** use the *table* element for layout purposes
- Do place your JavaScript links at the bottom of your page
- Do use *id* and *class* attributes to identify your elements appropriately 
- Do **NOT** use the same id value more than once in a single page
- Do define your HTML with accessibility in mind
    - Do give you page a well written title
    - Do use H1-H6 to describe documents headings for structure
    - Tables
        - Do use the summary attribute to describe the table
        - Do use the scope attribute of th to describe groups of columns
        - Do use the headers attribute of the td to let the user know when header that cell belongs to
    - Forms
        - Do use fieldset and legend when creating forms
        - Do use the label's for attribute to link the label to the input field
    - Images
        - Do use the alt attribute to describe the image
        - If nessecary, use longdesc to link to a text file with additional information