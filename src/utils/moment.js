export function dateFormat (time) {
    let d = new Date(time);
    let myTime = d.toLocaleDateString('en-US');
    return myTime.substr(0, 5) + myTime.slice(-2) + " | " + d.toLocaleDateString() 
}