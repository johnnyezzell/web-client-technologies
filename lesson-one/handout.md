Web Client Technologies
=======================

Lesson One - HTML and CSS (Structure and Beauty)
----------------

###Topics

####HTML - The Dos and Do Nots

Below are a few of the things you should consider when defining your HTML pages.  Accessibility is beyond the scope of this lesson.  However, I have listed a few things that are really helpful for screen readers below.

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
    - Do give your page a well written title
    - Do use *H1*-*H6* to describe documents headings for structure
    - Tables
        - Do use the *caption* element to describe the table
        - Do use the *scope* attribute of th to describe groups of columns
        - Do use the *headers* attribute of the td to let the user know when header that cell belongs to
    - Forms
        - Do use *fieldset* and *legend* when creating forms
        - Do use the *for* attribute of the *label* to link the *label* to the *input*
    - Images
        - Do use the *alt* attribute to describe the image

####CSS - The Dos and Do Nots

Below are a few things that will help you write maintainable CSS.

- Do keep your CSS grouped by ancestry
- Do use CSS for all images that are not part of the data (background images, etc.)
- DO NOT USE CSS
- Do USE A CSS TRANSPILER

####CSS - A Lesson in Less

{less} is one of a few CSS transpilers that extends the capabilities of CSS by adding features like:

- Variables
- Mixins
- Functions
- Nesting
- Operations
- Importing
- Better Comments
- **BACKWARDS COMPATIBILITY WITH CSS (NO EXCUSES TO NOT START TODAY!)**

Another popular CSS pre-processor is SASS.  I prefer less for it's simplicity and documentation.  You can start using LESS right away by simply linking to a JavaScript library.  SASS requires Ruby and has to be processed on the server-side.  However, they are both great choices and you can't go wrong with either.

Microsoft provides the Web Essentials extension for Web Developers.  The Visual Studio 2012 (Update 4) and Visual Studio 2013 versions of these extensions provide us with top-notch less support.  Though at the end of the day, you'll still want to transpile the {less} into CSS as part of your build process, it makes developing with {less} very convenient.

####Browser Developer Tools - If you can't be with the one you love, love the one you're with!

So we're stuck using an extremely outdated Chromium build.  We have to move on, and we'll learn to love it!

In Windows, (F12) will open the developer tools in both IE and Chromium.  We'll be focussing on the developer tools in Chromium, because the ones in IE are extremely slow and simply not as helpful.  However, if you're fighting with specific IE issues, it's good to know those slow tools are available.

Below are a few things that the browser's developers tools bring to the table:

- Easy navigation of your HTML structure
- Ability to click an element on the page and be taken directly from the HTML element
- Ability to change a value in the debugger and instantly see the result in the browser (HTML and CSS)
- A debugger that allows you to break and step through your JavaScript code
- A console that can be used to see logs as well as see and update JavaScript variables that are currently in scope of the debugger
- CSS viewer that allows you to easily see which CSS styles are attached to a specified HTML element
- Easily see which files have been downloaded when viewing a page as well as how long it took
- Profiles - Disk and Memory

### Reference Sites

- Amazing HTML and CSS reference site - http://www.csszengarden.com
- W3 Web Content Accessibility Guidelines - http://www.w3.org/TR/WCAG10-HTML-TECHS
- Fangs Screen Reader Emulator (FireFox Addon) - https://addons.mozilla.org/en-US/firefox/addon/fangs-screen-reader-emulator/
- ChromeShades Screen Reader Emulator (Chrome Extension) - http://google-axs-chrome.googlecode.com/svn/trunk/chromeshades_docs/chromeshades_help.html
- Chrome Developer Tools - http://developer.chrome.com/devtools/index
- {less} - http://www.lesscss.com
