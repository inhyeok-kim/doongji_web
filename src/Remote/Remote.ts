interface Subs {
    [index : string] : { seq : number, callback : Function}[]
}
const subs : Subs = {};

export const Observer = {
    doSubscribe : function(id : number, callback : Function){
        if(subs.hasOwnProperty(id)){
            const seq = subs[id][subs[id].length-1].seq +1;
            subs[id].push({seq,callback});
            return seq;
        } else {
            const seq = 1;
            subs[id] = [{seq,callback}];
            return seq;
        }
    },
    unSubscribe : function(id : number, seq : number){
        if(subs.hasOwnProperty(id)){
            const idx = subs[id].findIndex(v=>v.seq === seq);
            subs[id].splice(idx,1);
            if(subs[id].length === 0) delete subs[id];
        }
    },
    onchange : function(id : number, data : string){
        console.log(id,data);
        if(subs.hasOwnProperty(id)){
            subs[id].forEach(v=>{
                v.callback(data);
            })
        }
    }
}