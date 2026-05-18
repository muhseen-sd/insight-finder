/*

1. Creat an array of objects that contains the list you will work on. At least 6
2. get the elements of the serachBar and list by ID 
3. Wirte a a function that can display the list on the screen (website):
    - map through the list to convert it to an HTML String 
    - join the string 
    - display it using innerHTML
    - run the fuction once for the user to see

4. add an event listener that will listen to the search bar and grap the texts using "input" and giving it a parameter 
    - create a variable that will help in getting the text target and convert it to a lowercase element.
    - crat another variable for filter to filter the crop  (i am dounting of this step, I can remeber the exact thing to write or do)
    - 

4. Add an event listener that will listen to the search bar and grab the texts using "input" and giving it a parameter 
    - Create a variable that will help in getting the text target and convert it to a lowercase element.
    
    - Still douting but,
    - Create another variable called 'filteredBooks'.
    - Use the .filter() method on your master list. 
    - Inside the filter, tell the bouncer to check if the books's name (converted to lowercase) .includes() the user's search text.
    
    - THE FINAL STEP:
    - Take that new 'filteredBooks' list and pass it into your display function from Step 3 so the screen updates!
*/


let availableBooks = [
    {id: 1, name: "Atomic Habit", category: "Habit", author: "James Clear", price: 7000, image: "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg"},
    {id: 2, name: "Change Your Thinking Change Your Life", category: "Mindset", author: "Brain Tracy", price: 10000, image: "https://covers.openlibrary.org/b/isbn/9780471448587-M.jpg"},
    {id: 3, name: "Eat That Frog", category: "Time Management", author: "Brain Tracy", price: 4000, image: "https://covers.openlibrary.org/b/isbn/9781626569416-M.jpg"},
    {id: 4, name: "Unlock It", category: "Business & Marketing", author: "Dan Lock", price: 6000, image:"images/unlock_it.png"},
    {id: 5, name: "Tunaninka Kamanninka", category: "Self Awareness", author: "Mal. Bashir USman Tofa", price: 15000, image: "images/tunaninka.png"},
    {id: 6, name: "Gina Manufa", category: "Productivity", author: "Aliyu M. Ahmad", price: 9000, image: "images/ginamanufa.png"},
    {id: 7, name: "The Laws of Human Nature", category: "Phsychology", author: "Robert Greene", price: 14000, image: "images/laws.webp"},
    {id: 8, name: "Deep Work", category: "Productivity", author: "Carl Newport", price: 9500, image: "https://covers.openlibrary.org/b/isbn/9781455586691-M.jpg"},
    {id: 9, name: "The 7 Habits of Highly Effective People", category: "Habit", author: "Stephen R. Covey", price: 8500, image: "https://covers.openlibrary.org/b/isbn/9781451639612-M.jpg"},
    {id: 10, name: "The Sealed Nectar (Ar-Raheeq Al-Makhtum)", category: "History & Biography", author: "Safiur Rahman Mubarakpuri", price: 12000, image: "images/sealed.webp"},
    {id: 11, name: "The One Thing", category: "Productivity", author: "Gary Keller", price: 7500, image: "images/one_thing3.webp"},
    {id: 12, name: "Skills Rather Than Just Degrees", category: "Personal Development", author: "Obasanjo Fasanmi", price: 5000, image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600"},
    {id: 13, name: "Mindset: The New Psychology of Success", category: "Mindset", author: "Carol S. Dweck", price: 8000, image: "https://covers.openlibrary.org/b/isbn/9780345472328-M.jpg"},
    {id: 14, name: "Essentialism: The Disciplined Pursuit of Less", category: "Time Management", author: "Greg McKeown", price: 9000, image: "https://covers.openlibrary.org/b/isbn/9780307887894-M.jpg"},
    {id: 15, name: "The Let Them Theory", category: "Self Awareness", author: "Mel Robbins", price: 11000, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=600"},
    {id: 16, name: "Think and Grow Rich", category: "Business & Marketing", author: "Napoleon Hill", price: 6500, image: "https://covers.openlibrary.org/b/isbn/9781593302009-M.jpg"},
    {id: 17, name: "Show Your Work!", category: "Career Growth", author: "Austin Kleon", price: 5500, image: "https://covers.openlibrary.org/b/isbn/9780761178972-M.jpg"},
    {id: 18, name: "Can't Hurt Me", category: "Psychology", author: "David Goggins", price: 13000, image: "images/cant_hurt_me.webp"}

    
];

// Get the elements from HTML file to use for the logic

const searchBar = document.getElementById("search-bar")
const booksList = document.getElementById("books-list")

// Write the display function 

function displayBooks(booksArray){
    // map through the list to convert it to an HTML String 

    let htmlStrings = booksArray.map( book => {
        // return `<li>${book.name} - (${book.category}) - ${book.author} - ₦${book.price}</li>`
        // We are now using <div> inseatd of <li> a div due to styling purposes

        return `
            <div class="book-card">
                <div class="card-cover">
                    <img src="${book.image}" alt="${book.name} Cover" class="book-img">
                </div>
                <div class="card-details">
                    <h3 class="book-title">${book.name}</h3>
                    <p class="book-author">${book.author}</p>
                    <span class="category-badge">${book.category}</span>
                    <p class="book-price">₦${book.price.toLocaleString()}</p> <!-- Local Cyrrency Format -->
                </div>
            </div>
        
        `;
    })

    let finalHTML = htmlStrings.join('')
    booksList.innerHTML = finalHTML
}

displayBooks(availableBooks)


// getting the searched item from the input using 
searchBar.addEventListener("input", (event) => {

    // get the input text and convert it to lower case 
    let searchText = event.target.value.toLowerCase()

    // Filter the book list and check if it includes the search inputs
    let filteredBook = availableBooks.filter( book => {
        return book.name.toLowerCase().includes(searchText)
    })

    displayBooks(filteredBook)
})





































// Learning Phase

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
// let even = numbers.filter(isEven)
// let odd = numbers.filter(isOdd)

// console.log(even)
// console.log(odd)

// function isEven(evenNum){
//     return evenNum % 2 === 0
// }

// function isOdd(oddNum){
//     return oddNum % 2 !==0
// }

// let words = ["learning", "coding", "nap", "bug", "deploy", "host", "domain"]
// let short = words.filter(shortWords)
// let long = words.filter(longWords)

// console.log(short)
// console.log(long);


// function shortWords(findWords){
//     return findWords.length < 6
// }

// function longWords(findWords){
//     return  findWords.length >= 6
// }


// let ages = [13, 15, 16, 16, 29, 21, 34, 55];

// let elders = ages.filter(adults => {
//     return adults >= 18;
// })

// console.log(elders);

// let teenagers = ages.filter(function (children){
//     return children < 18
// })

// console.log(teenagers);

// function adults(elders){
//     return elders >= 18
// }

// const numbers = [1, 2, 3, 4, 5]

// const sqrResult = numbers.map(squareNums)
// const cubeResult = numbers.map(cubeNums)

// console.log(sqrResult)
// console.log(cubeResult)

// function squareNums(element){
//     return Math.pow(element, 2)
// }

// function cubeNums(element){
//     return Math.pow(element, 3)
// }

// const siblings = ["abdulhalim", "ayyub", "abdulmajid", "fatima", "abdulhaq"]

// const toUpperResult = siblings.map(toUpperCase => {
//     return toUpperCase.toUpperCase()
// })
// console.log(toUpperResult);


// // function toUpperCase(names){
// //     return names.toUpperCas

// let dates = [2004-11-20, 2007-9-2, 2026-5-16]

// let datesResult = dates.map(regionBased)
// console.log(datesResult)

// function regionBased(elements){
//     let  parts = elements.split("-")
//     return parts = `${dates[1]}/${dates[2]}/${dates[0]}`
// }