describe("CountingValleys", () => {
    it("Should return 1", () => {
        const result = countingValleys(8, "UDDDUDUU");
        expect(result).toEqual(1);
    });
    it("Should return 2", () => {
        const result = countingValleys(12, "DDUUDDUDUUUD");
        expect(result).toEqual(2);
    });
    it("Should return 0", () => {
        const result = countingValleys(10, "UDUUUDUDDD");
        expect(result).toEqual(0);
    });
    it("Should retur 1", () => {
        const result = countingValleys(10, "UDDDUDUDUU");
        expect(result).toEqual(1);
    });
    it("Should return 2", () => {
        const result = countingValleys(100, "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD");
        expect(result).toEqual(2);
    });
    it("Should return 5", () => {
        const result = countingValleys(100, "DDUDUDDUDDUDDUUUUDUDDDUUDDUUDDDUUDDUUUUUUDUDDDDUDDUUDUUDUDUUUDUUUUUDDUDDDDUDDUDDDDUUUUDUUDUUDUUDUDDD");
        expect(result).toEqual(5);
    });
    it("Should return 6", () => {
        const result = countingValleys(100, "UDUDDUUUDUDUDUUDUUDDDDDUDUDDDDUUDDUDDUUUUDUUDUDDDDUDUDUUUDDDUUUDUDDUUDDDUUDDUDDDUDUUDUUDUUDUDDDUUUUU");
        expect(result).toEqual(6);
    });
    it("Should return 3", () => {
        const result = countingValleys(1000, "UDDDUUDUUDDDDUUDDUDDDUUDDDUUDDUUDUDUDDDDUUDDDDDDUUUDUDUDUUDUUUUUUUUUUUDUUUUUDUDUDUDDDDUUDUUUDDDDDUUDUUDUUUUUUDDDDDUUDUUDDDUDUUUUUUUDUUUUDDUDDDDDUUUDDUUUUUUUDDDDUUUDUUUDUUUUUUUDDUUUDDDDUUDUDDDUDDDDUUDDDDDUUDUDDUDUUUDDUDUDDDUUDDUDUUUUUDDUUUDUUUUUUDDUDUUDDUUDDDUDUDDDDUDUDDUUUDDDUDDUDDUUUUDDDUDUDDDUUUUUDUUUDDUDUUDUUUDDUDUUUDUDUDUUUUDDUDDDUUUDDDUDUDDDDDDDUUUUDDUUDUUUDUDUDUDDUUUDDUDUDDUDDUDDDUDUDUDDUUDDDUUDUUDUDDDDDDDDUUDDUUDDUUUUUUDUUUDDUUDUDDUUDDDUDDUUUUUDUDUDDDUUUDDUUDDDUDUUDUUDDDUDDUUDUUUDDUUUUDUUUDDDDUDUUUDDUDDDDDDDUDDDUUDUDDUDUDUUDUDDUUDUUDUUDUUDUDDDUUDDUUUUDUUDUUDUUUUDUUUDDUUUDDUDUDDUDUDUUUDUDDDUUUUDUUDUUUDDUUDUDUDDDDUDUDDDDDUUUDUUUDUDDUUUDUUUUDDUUUDDDUDUDUUDUUUUUDUUDDDUUDDUDDDDUUUDUUUUUDDUUUUUDDUUDUDDUDUDUUUUDUUDUUUDUUDDDUUUUDDDUDUDUUDUDUUDDDUDDUUDDUDUDUUDUDUDDDUDDDUDDDDUDUUUUUDUDUDUUDUUDUDDUDUUDDUUDUDUDDDDUDDUDDUDDUUUUDUDDUUUUDUUDUDDUDDDUDUUUDUDUDUDDDUDDUUUUDDUDUDUDDUDDDUDDDUUUDUDUDUUDUUUUUDUDDDDUUDDDDUDUDDUDDDDUUUDUDUUDUDUUUDDUDUDDDDDUUDUDUUDDDDUUDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
        expect(result).toEqual(3);
    });
});
//# sourceMappingURL=countingValleys.test.js.map