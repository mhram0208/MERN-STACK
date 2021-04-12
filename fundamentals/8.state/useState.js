// const [count, setCount] = useState(0)

function useState (initialValue){
    //... some logic written by react
    return [
        initialValue,
        () =>{ //updater function

        }
    ]
}

const result = useState(0)
// const count = result[0], setCount = result[1]
// console.log(count, setCount)

const [count, setCount] = result
console.log(count, setCount)