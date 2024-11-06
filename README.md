# PizzaDoughCalculator


Makefile:
make ARG1=100 ARG2= Yeast


Docker:
docker build -t pizza-app .

docker run --rm pizza-app 100 Sourdough
