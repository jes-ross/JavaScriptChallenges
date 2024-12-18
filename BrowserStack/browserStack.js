const prompt = require('prompt-sync')()


class BrowserStack{
    
    constructor(){
        this.items = []
    }
    search(web){
        this.items.push(web)
    }
    whereAmI(){
        return this.items[this.items.length -1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    howManyWindows(){
        return this.items.length
    }
    clearHistory(){
        return this.items = []
    }
    deleteWindow(){
        return this.items.pop()
    }
}



function browserSimulator(){
    let end = false
    const browserStack = new BrowserStack()
    let goBackStact = new BrowserStack()
    while (!end){
        option = prompt("Option: ")
        switch(option){
            case "1":
                item = prompt('Search here: ')
                browserStack.search(item)
                console.log("Looked for: " + item)
                break
            case "2":
                if (browserStack.isEmpty()){
                    console.log("You are in the landing page of Google")
                } else {
                    console.log(browserStack.whereAmI())
                }
                break
            case "3":
                if (browserStack.isEmpty()){
                    console.log("None")
                } else {
                    console.log("You have opened: " + browserStack.howManyWindows())
                }
                break
            case "4":
                if (browserStack.isEmpty()){
                    console.log("You are at the landing page of Google")
                } else {
                    goBackStact.search(browserStack.deleteWindow())
                    console.log("Now you are at: " + browserStack.whereAmI())
                }
                break
            case "5":
                if (browserStack.isEmpty()){
                    console.log("You have not search anything")
                } else{
                    browserStack.search(goBackStact.deleteWindow())
                    console.log("You are back at: " + browserStack.whereAmI())
                }
                break
            case "6":
                if(browserStack.isEmpty()){
                    console.log("Nothing to clear")
                } else {
                    browserStack.clearHistory()
                    console.log("Clearing your history search")
                }
                break
            case "7":
                end = true
                break
        }
        
    }
}

console.log(`
    ******************
    Wellcome to Google
    ******************
    Menu:
        1) Search
        2) Where Am I?
        3) How many windows did I open?
        4) Go Back
        5) Go forward
        6) Clear history
        7) Exit
    `)
browserSimulator()
