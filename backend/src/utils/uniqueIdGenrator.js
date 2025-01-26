const UniqueIdGenerator = (prevId) => {
    if (!prevId) console.log("prevID not found");
    console.log("prevId: ", prevId);
    
    const newUID =  prevId.trim().slice(0,4) + (Number(prevId.trim().slice(4)) + 1)
    console.log(newUID);
    return newUID;
    
}
console.log("UniqueIdGenerator: " , UniqueIdGenerator);
 
export { UniqueIdGenerator }