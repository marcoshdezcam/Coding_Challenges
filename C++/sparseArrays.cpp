#include <iostream>
#include <bits/stdc++.h>
#include <vector>
using namespace std;

vector<int> matchingStrings(vector<string> strings, vector<string> queries) {
  vector<int> result{};
  for (string query : queries) {
    int counter = count(strings.begin(), strings.end(), query);
    cout << counter << endl;
    result.push_back(counter);
  }
  
  return result;
}

int main(int argc, char const *argv[]){
    vector<string> strings{"aba","baba","aba","xzxb"};
    vector<string> queries{"aba","xzxb","ab"};

    const vector<int> res = matchingStrings(strings, queries);
    // cout << res.size() << endl;



  return 0;
}
