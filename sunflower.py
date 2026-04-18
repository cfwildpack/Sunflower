class Sunflower:
    def __init__(self, height=10):
        self.height = height
        self.days_grown = 0

    def grow(self, sunlight_hours):
        if sunlight_hours >= 6:
            self.height += 2
        else:
            self.height += 1
        self.days_grown += 1

    def status(self):
        print(f"Days grown: {self.days_grown}")
        print(f"Current height: {self.height} cm")

if __name__ == "__main__":
    flower = Sunflower()
    flower.grow(7)
    flower.status()
