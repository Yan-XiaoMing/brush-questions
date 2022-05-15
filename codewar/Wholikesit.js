function likes(names = []) {
    const len = names.length;
    if(!len){
        return 'no one likes this'
    }
    else if(len === 1){
        return `${names[0]} likes this`
    }
    else if(len === 2){
        return `${names[0]} and ${names[1]} like this`
    }
    else if(len === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else {
        let result = `${names[0]}, ${names[1]} and `
        let end = 'like this'
        names.splice(0,2)
        result += `${names.length} others ` + end
        return result 
    }
}