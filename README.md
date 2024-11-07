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
docker build -t pizza-cli .
Run the Docker container with the desired parameters:
docker run --rm pizza-cli <amount> <type>
