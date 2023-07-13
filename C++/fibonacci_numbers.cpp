#include <iostream>
using namespace std;

int fibonacci(int seq_itr){
	if (seq_itr == 0) return 0;
	if (seq_itr == 1) return 1;

	return fibonacci(seq_itr - 1 ) + fibonacci(seq_itr - 2);
}

int main(){
	cout << fibonacci(40) << endl;
	return 0;
}
