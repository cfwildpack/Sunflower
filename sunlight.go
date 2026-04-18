package main

import "fmt"

func calculateSunlight(hoursPerDay int, days int) int {
	return hoursPerDay * days
}

func main() {
	total := calculateSunlight(6, 7)
	fmt.Printf("Total sunlight hours in a week: %d\n", total)
}
