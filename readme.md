### Answering this Questions for Assignment-5.

---

### Q.1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **Answer 1.getElementById is using for select a specific element which contain id name. Because in whole document id name is unique. For target a fixed element we use getElementByID**
- **2.getElementByClassName is using for select those element who contain this class name. we can use same class name in multiple element. If we want to select those multiple element then we can use getElementByClassName**
- **3.querySelector contain a css selector. For example it can contains class , tag. Basically it contains something which can use for css selector. If I use querySelector then its select the first element from the document which have this specific selector**
- **4.querySelectorAll is simillar like querySelector. It also a css selector but the difference is querySelector select the first element which have this selector but querySeletorAll select all the elements which have this selector**
- **Summary: getElementById select a single element which have id only, getElementByClassName select all the elements which matche this element , querySelector select first element which matche the specific css selector,querySelectorAll select all element which matches the specific css selector**

---

### Q.2: How do you create and insert a new element into the DOM?

- **1. Create element → document.createElement("tagName")**
- **2. Set content/attributes → .textContent, .innerHTML, .setAttribute()**
- **3. Insert into DOM → .appendChild()**
- **Summary: At first declare a variable which value is document.createElement("tagName") then using variable.attributes like innerHTML ,textContent = `content` finally push new element by using document.whereIWannaPush.appendChild(variable)**

---

### Q.3: What is Event Bubbling and how does it work?

- **Event bubbling is the process where an event triggered on a child element first runs its own event handler, and then propagates upward through its parent, grandparent, and finally up the DOM tree.**

### Q.4:What is Event Delegation in JavaScript? Why is it useful?

- **"Event Delegation is a process where we attach a single event listener to a parent element and handle events on its child elements through event bubbling by using .target attribute.**
  - **Using event delegation have many benefits like Performance friendly (efficient for many elements) , dynamically handle any element , avoid repetitive event listeners**

### Q.5: What is the difference between preventDefault() and stopPropagation() methods?

- **The difference between preventDefault() and stopPropagation() methods are preventDefault() is using for stop the default action of an event and stopPropagation() is using for stops event bubbling of the parent element**
