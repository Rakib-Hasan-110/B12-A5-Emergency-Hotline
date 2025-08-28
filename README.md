        1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

                            Answer to Question 1: 

        Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

        All these methods are used to access DOM elements, but they differ in functionality:

        getElementById()

        - Fetches an element by its unique ID.

        - If multiple elements share the same ID (which is invalid), only the first match is returned.

        getElementsByClassName()

        - Returns a live HTMLCollection of all elements with the given class name.

        - It can select multiple elements at once.

        querySelector()

        - Selects the first element matching a CSS selector (ID, class, tag, etc.).

        - Syntax is similar to CSS: #id, .class, tag.

        querySelectorAll()

        - Similar to querySelector, but returns all matching elements as a static NodeList.


        2. How do you **create and insert a new element into the DOM**?

                            Answer to Question 2: 

        Steps to create and insert a new element into the DOM:

        Create the element:

        const newElement = document.createElement("p");


        Add content:

        newElement.innerText = "This is a new paragraph.";


        Append to a parent element (e.g., a div with ID container):

        const parent = document.getElementById("container");
        parent.appendChild(newElement);

        Now, the new element appears in the DOM.


        3. What is **Event Bubbling** and how does it work?

                            Answer to Question 3: 

        Event Bubbling means when an event occurs on an element, it propagates upward through its parent elements, all the way up to the document root.

        Example: Clicking on a button triggers click events for its parent <div>, <body>, and document unless stopped.


        4. What is **Event Delegation** in JavaScript? Why is it useful?

                        Answer to Question 4: 

        Event Delegation is a technique where a single event listener is attached to a parent element to manage events for its child elements using event bubbling.

        Benefits:
        - Reduces code duplication
        - Improves performance (fewer event listeners)
        - Handles dynamically added elements easily


        5. What is the difference between **preventDefault() and stopPropagation()** methods?

                        Answer to Question 5: 

        Difference between preventDefault() and stopPropagation():

        preventDefault()

        Stops the browser’s default action for an event.

        Example: Prevent form submission from reloading the page.

        stopPropagation()

        Stops the event from bubbling up to parent elements.

        Example: Prevents click on a child element from triggering the parent’s click event.