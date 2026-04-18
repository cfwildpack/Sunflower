#include <iostream>
using namespace std;

class GrowthEngine {
public:
    void simulateGrowth(int days) {
        int height = 10;
        for (int i = 0; i < days; i++) {
            height += 2;
        }
        cout << "Height after " << days << " days: " << height << " cm" << endl;
    }
};

int main() {
    GrowthEngine engine;
    engine.simulateGrowth(5);
    return 0;
}
