const  getCurryingSum = (...args) => {
    return function next(...nextArgs) {
        if (nextArgs.length === 0) {
            return args.reduce((sum, num) => sum + num, 0);
        }
        return getCurryingSum(...args, ...nextArgs);
    };
}

const getAllSum = getCurryingSum(5)(6)(7)(8)(123)

console.log(getAllSum())

const currySum = (num1) => {
    return (num2) => {
        return (num3) =>{
            return (num4) => {
                return num1 + num2  + num3 + num4
            }
        }
    }
}

const getCurrySum = currySum(5)(4)(4)(4);

console.log(getCurrySum)