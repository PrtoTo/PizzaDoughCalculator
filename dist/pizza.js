"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_table3_1 = __importDefault(require("cli-table3"));
function calculatePizzaDough(amount, weight, hydration, type) {
    let totalWeight = amount * weight;
    if (type == "Yeast") {
        let flour = totalWeight / (1 + (hydration / 100) + (2.05 / 100));
        let water = (hydration / 100) * flour;
        let salt = (2 / 100) * flour;
        let dryYeast = (0.05 / 100) * flour;
        let freshYeast = (0.15 / 100) * flour;
        const table = new cli_table3_1.default({
            head: ['Dough Ingredients🍞', 'amount'],
            colWidths: [25, 10,]
        });
        table.push(['Flour:', Math.round(flour) + 'g'], ['Water:', Math.round(water) + 'g'], ['Salt:', Math.round(salt) + 'g'], ['Dry yeast:\nFresh yeast:', dryYeast.toFixed(2) + 'g\n' + freshYeast.toFixed(2) + 'g']);
        console.log(table.toString());
    }
    else if (type == "Sourdough") {
        let flour = totalWeight / (1 + (hydration / 100) + (7 / 100));
        let water = (hydration / 100) * flour;
        let salt = (2 / 100) * flour;
        let sourdoughStarter = (5 / 100) * flour;
        const table = new cli_table3_1.default({
            head: ['Dough Ingredients🍞', 'amount'],
            colWidths: [25, 10,]
        });
        table.push(['Flour:', Math.round(flour) + 'g'], ['Water:', Math.round(water) + 'g'], ['Salt:', Math.round(salt) + 'g'], ['Sourdough starter:', Math.round(sourdoughStarter) + 'g']);
        console.log(table.toString());
    }
}
const args = process.argv;
calculatePizzaDough(Number(process.argv[2]), 250, 65, process.argv[3]);
//# sourceMappingURL=pizza.js.map