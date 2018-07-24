export class ArrayFunctions {
    static removeItem(item, array){
        array.splice(this.findIndex(item,array),1);
    }

    static findIndex(item,array){
        return array.indexOf(item);
    }

    static inArray(item, array : any[]){
        return array.includes(item);
    }
}