export function forEach(items: number[], callBack: (num:number) => number){
    for (let i of items) {
      callBack(i);
    }
}
