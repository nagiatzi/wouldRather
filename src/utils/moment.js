export function dateFormat (time) {
    let d = new Date(time);
    let time = d.toLocaleDateString('en-US');
    return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString() 
}