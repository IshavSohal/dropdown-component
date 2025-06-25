# dropdown-component

A vanilla JS dropdown menu component

## How to use

1. Install the package

```
npm install dropdown-component
```

2. Write the dropdown contents, either into an html file or into the DOM using JS. Ensure that the dropdown content container has an id, and that the appropriate classes
   are used for the dropdown container as well as its items.

```
<div id="test">
    <div id="dropdown1" class="dropdown-content" style="visibility: hidden">
        <button class="dropdown-item">Item 1</button>
        <button class="dropdown-item">Item 2</button>
        <button class="dropdown-item">Item 3</button>
        <button class="dropdown-item">Item 4</button>
        <button class="dropdown-item">Item 5</button>
    </div>
</div>
```

3. Create the dropdown component by passing in the id of the dropdown content and the id of the parent element, if applicable. If the `parentId` is not provided, it will be assumed that the parent element is `document.body`

```
dropdown({ dropdownId: "dropdown1", parentId: "test" });
```
