public class Plant {
    private String name;
    private int height;

    public Plant(String name) {
        this.name = name;
        this.height = 10;
    }

    public void grow() {
        height += 2;
        System.out.println(name + " grew to " + height + " cm.");
    }

    public static void main(String[] args) {
        Plant sunflower = new Plant("Sunflower");
        sunflower.grow();
    }
}
