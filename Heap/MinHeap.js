class Heap {
  constructor(){
    this.heap = [];
  }
  getParentIdx(idx){
    return Math.floor((idx - 1) / 2);
  }
  getLeftChildIdx(idx){
    return 2 * idx + 1;
  }
  getRightChildIdx(idx){
    return 2 * idx + 2;
  }
  swap(ith, jth){
    [this.heap[ith], this.heap[jth]] = [this.heap[jth], this.heap[ith]];
  }
  insert(val){
    this.heap.push(val);
    this.upheapify();
  }
  upheapify(){
    let idx = this.heap.length -1;
    while(idx > 0 && this.heap[this.getParentIdx(idx)] > this.heap[idx]){
      this.swap(idx, this.getParentIdx(idx));
      idx = this.getParentIdx(idx);
    }
  }
  remove(){
    if(this.heap.length === 0) return null;
    if(this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.downheapify();
    
    return root;
  }
  downheapify(){
    let idx = 0;
    while (this.getLeftChildIdx(idx) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIdx(idx);
      let rightChildIndex = this.getRightChildIdx(idx);
      if( rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]){
        smallerChildIndex = rightChildIndex;
      }
      if (this.heap[idx] <= this.heap[smallerChildIndex]) break;
      this.swap(idx, smallerChildIndex);
      idx = smallerChildIndex;
    }
  }
  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}