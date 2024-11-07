# Pizza-cli

## What is Pizza-cli?
pizza-cli is a command-line tool that calculates the amount of ingredients (flour, water, salt, yeast, and sourdough starter) needed to make the specified number of pizzas, based on the type of dough (Yeast or Sourdough). The tool supports various ways to run it, including using Makefile, Docker, or directly via Node.js.

## Installation & Usage
### 1. Using Makefile
```
make dough AMOUNT=<amount> TYPE=<type>
``` 
### 2. Using Docker
You can also build and run the program using Docker:
Build the Docker image:
```
docker build -t pizza-cli .
``` 

Run the Docker container with the desired parameters:
```
docker run --rm pizza-cli <amount> <type>
```

### 3. Using TypeScript and Node.js
If you prefer running the program directly via Node.js:

Compile the TypeScript code:
```
tsc
```
Run the compiled JavaScript file:
```
node pizza.js <amount> <type>
```
Where:

- **`<amount>`**: The number of pizzas you want to make (e.g., `1`, `5`, `10`).  
- **`<type>`**: The type of dough (either `Yeast` or `Sourdough`).

Example:
```
node pizza.js 5 Yeast
```
Example Output
For Yeast type with 5 pizzas, the output might look like:
```
┌─────────────────────────┬──────────┬───────┐
│ Dough Ingredients🍞     │ amount   │ %     │
├─────────────────────────┼──────────┼───────┤
│ Flour:                  │ 748g     │ 100%  │
├─────────────────────────┼──────────┼───────┤
│ Water:                  │ 486g     │ 60%   │
├─────────────────────────┼──────────┼───────┤
│ Salt:                   │ 15g      │ 2%    │
├─────────────────────────┼──────────┼───────┤
│ Dry yeast:              │ 0.37g    │ 0.05% │
│ Fresh yeast:            │ 1.12g    │ 0.15% │
└─────────────────────────┴──────────┴───────┘
```



## How It Works

The program calculates the required amounts of dough ingredients based on the type of dough:
For Yeast Dough:
        Flour, water, salt, dry yeast, and fresh yeast are calculated based on the total dough weight.
        Yeast percentage is 0.05% for dry yeast and 0.15% for fresh yeast.

For Sourdough:
        Flour, water, salt, and sourdough starter are calculated.
        The sourdough starter is calculated as 5% of the flour weight.

Both types are hydrated to 60% water content.


