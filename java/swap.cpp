void swap(int *x, int *y){
    int t=*x;
    *x=*y;
    *y=t;
    return;
}

int main(){
    int x=3, y=5;
    System.out.println(x);
    System.out.println(y);
    swap(&x, &y);
    System.out.println(x);
    System.out.println(y);
    return 0;
}
