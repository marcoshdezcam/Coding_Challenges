#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int loneLyIteger(vector<int> a)
{
  int result = 0;
  for (int i : a)
  {
    int occurrences = count(a.begin(), a.end(), i);

    if (occurrences == 1)
    {
      return i;
    }
  }

  return result;
}

int main(int argc, char const *argv[])
{
  vector<int> array = {1, 2, 3, 4, 3, 2, 1};
  int result = loneLyIteger(array);
  cout << result << endl;

  return 0;
}
