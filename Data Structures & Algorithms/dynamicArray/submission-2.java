class DynamicArray {
    private int capacity;
    private int size;
    private int[] array;

    public DynamicArray(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new int[this.capacity];
    }

    public int get(int i) {
        return array[i];
    }

    public void set(int i, int n) {
        array[i] = n;
    }

    public void pushback(int n) {
        if(size == capacity){
            resize();
        }

        array[size] = n;
        size += 1;
    }

    public int popback() {
        if (size > 0){
            size--;
        }

        return array[size];
    }

    private void resize() {
        capacity *= 2;
        int[] newArr = new int[capacity];
        for(int i =0; i < size; i++){
            newArr[i] = array[i];
        }

        array = newArr;
    }

    public int getSize() {
        return size;
    }

    public int getCapacity() {
        return capacity;
    }
}
