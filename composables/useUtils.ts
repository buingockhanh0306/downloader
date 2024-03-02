
export const useUtils = () =>{
const funcTest = (name: String)=>{
    console.log(`Hello ${name}`)
}
return {funcTest}
}