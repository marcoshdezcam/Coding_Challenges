#include <iostream>
using namespace std;

int anagram(string s) {
    int numberOfChanges = 0;
    if (s.size() % 2 != 0) {
        return -1;
    } else {
        string leftString = s.substr(0, s.size() / 2);
        string rightString = s.substr(s.size() / 2, s.size());
        for (int i_itr = 0; i_itr < leftString.size(); i_itr++) {
            if (rightString.find_first_of(leftString.at(i_itr)) != string::npos) {
                rightString.erase(rightString.find_first_of(leftString.at(i_itr)), 1);
            }
        }
        numberOfChanges = rightString.size();
    }
    return numberOfChanges;
}
