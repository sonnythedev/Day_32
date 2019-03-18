Array.prototype.solution1=function(){
    let len=this.length;
    if(len==0) return this;
    //console.log(len);
    for(let i=1; i<len; i++){
        //This will let us loop through the array
        let currentItem=this[i];
        let j=i-1;
        while(j>=0 && currentItem<this[j]){
            //console.log('I am here');
            //loop back in the sorted part of the array and swap position only if current item is less than any of the item
            temp=this[j];
            this[j]=this[j+1];
            this[j+1]=temp;
            j--;
        }
        
    }
    return this;
}

let arr=[100,101,1,2,3,-100,5000,-4.5,5];
//let arr=[];
console.log(arr.solution1());


