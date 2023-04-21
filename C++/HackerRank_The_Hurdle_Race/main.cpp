#include <iostream>
#include <vector>
using namespace std;

int hurdleRace(int k, vector<int> height) {
    int min = height[0], max = height[0];
    for(unsigned i = 0; i < height.size(); i++){
        if (max<height[i]){
            max = height[i];
        }
        if (min>height[i]){
            min = height[i];
        }
    }
    if (max - k < 0 ){
        return 0;
    }
    return max - k;
}

int main()
{
    
    return 0;
}
