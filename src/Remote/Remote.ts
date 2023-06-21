interface Subs {
    [index : string] : { seq : string, callback : Function}[]
}
const subs : Subs = {};

export function doSubscribe(id : string, callback : Function){
    const seq = crypto.randomUUID();
    if(subs.hasOwnProperty(id)){
        subs[id].push({seq,callback});
        return seq;
    } else {
        subs[id] = [{seq,callback}];
        return seq;
    }
}
export function unSubscribe(id : string, seq : string){
    if(subs.hasOwnProperty(id)){
        const idx = subs[id].findIndex(v=>v.seq === seq);
        subs[id].splice(idx,1);
        if(subs[id].length === 0) delete subs[id];
    }
}
export function onChange(id : string, data : string){
    if(subs.hasOwnProperty(id)){
        subs[id].forEach(v=>{
            v.callback(data);
        })
    }
}